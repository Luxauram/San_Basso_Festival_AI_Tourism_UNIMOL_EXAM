'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const commonShader = `
#define size iResolution.xy
#define SAMPLE(a, p, s) texture((a), (p)/s)
float gauss(vec2 x, float r) {
    return exp(-pow(length(x)/r,2.));
}
#define SPEED
#define BLASTER
#define PI 3.14159265
#ifdef SPEED
    #define dt 8.5
    #define P 0.01
#else
    #define dt 2.
    #define P 0.05
#endif
#define particle_density 2.5
#define minimal_density 0.4
const float radius = 3.0;
`;

const bufferAShader =
  commonShader +
  `
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform vec2 iResolution;
uniform vec4 iMouse;
uniform float iTime;
uniform int iFrame;

void Check(inout vec4 U, vec2 pos, vec2 dx) {
    vec4 Unb = SAMPLE(iChannel0, pos+dx, size);
    vec2 rpos1 = mod(pos-Unb.xy+size*0.5,size) - size*0.5;
    vec2 rpos2 = mod(pos-U.xy+size*0.5,size) - size*0.5;
    if(length(rpos1) < length(rpos2)) {
        U = Unb;
    }
}

vec4 B(vec2 pos) {
   return 5.*SAMPLE(iChannel1, pos, size);
}

void main() {
    vec2 pos = gl_FragCoord.xy;
    vec4 U = SAMPLE(iChannel0, pos, size);
    
    Check(U, pos, vec2(-1,0));
    Check(U, pos, vec2(1,0));
    Check(U, pos, vec2(0,-1));
    Check(U, pos, vec2(0,1));
    Check(U, pos, vec2(-1,-1));
    Check(U, pos, vec2(1,1));
    U.xy = mod(U.xy,size);
    
    if(length(mod(pos-U.xy+size*0.5,size) - size*0.5) > 1./minimal_density) {
        U.xy = pos;
    }
    vec2 ppos = U.xy;
    vec2 pressure = vec2(B(ppos+vec2(1,0)).z - B(ppos+vec2(-1,0)).z, B(ppos+vec2(0,1)).z - B(ppos+vec2(0,-1)).z);
    
    #ifdef BLASTER
     U.zw += 0.005*vec2(cos(0.012*iTime*dt), sin(0.012*iTime*dt))*gauss(ppos-size*vec2(0.5,0.5),15.)*dt;
    #endif
    
    U.zw = U.zw*0.998;
    U.zw += P*pressure*dt;
    vec2 velocity = U.zw;
    U.xy += dt*velocity;
    U.xy = mod(U.xy,size);
    
    if(iFrame < 1) {
        if(mod(pos, vec2(1./particle_density)).x < 1. && mod(pos, vec2(1./particle_density)).y < 1.)
           U = vec4(pos,0.,0.);
    }
    
    gl_FragColor = U;
}
`;

const bufferBShader =
  commonShader +
  `
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform vec2 iResolution;

vec4 B(vec2 pos) {
   return SAMPLE(iChannel1, pos, size);
}

vec3 pdensity(vec2 pos) {
   vec4 particle_param = SAMPLE(iChannel0, pos, size);
   return vec3(particle_param.zw,gauss(pos - particle_param.xy, 1.0*radius));
}

void main() {
    vec2 pos = gl_FragCoord.xy;
    vec3 density = pdensity(pos);
    vec4 u;
    u.xyz = 0.7*density;
    float div = B(pos+vec2(1,0)).x-B(pos-vec2(1,0)).x+B(pos+vec2(0,1)).y-B(pos-vec2(0,1)).y;
    u.zw = 0.97*0.25*(B(pos+vec2(0,1))+B(pos+vec2(1,0))+B(pos-vec2(0,1))+B(pos-vec2(1,0))).zw;
    u.zw += vec2(div*0.2, density.z*1.4);
    gl_FragColor = u;
}
`;

const imageShader =
  commonShader +
  `
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform vec2 iResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uTime;

vec4 B(vec2 pos) {
   return SAMPLE(iChannel1, pos, size);
}

vec3 pdensity(vec2 pos) {
   vec4 particle_param = SAMPLE(iChannel0, pos, pos);
   return vec3(particle_param.zw,gauss(pos - particle_param.xy, 1.0*radius));
}

void main() {
    vec2 pos = gl_FragCoord.xy;
    vec3 density = pdensity(pos);
    float vorticity = B(pos+vec2(1,0)).y-B(pos-vec2(1,0)).y-B(pos+vec2(0,1)).x+B(pos-vec2(0,1)).x;
    
    float colorMix = sin(uTime * 0.3) * 0.5 + 0.5;
    vec3 finalColor = mix(uColor1, uColor2, colorMix);
    
    float l1 = 700.*abs(vorticity);
    float l2 = 1.-l1;
    gl_FragColor = vec4(finalColor * l1 + vec3(0.03)*l2, 0.6);
}
`;

export function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = 1400;
    const height = 1000;
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(pixelRatio);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const rtOptions = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
    };

    const renderTargets = {
      bufferA: [
        new THREE.WebGLRenderTarget(width, height, rtOptions),
        new THREE.WebGLRenderTarget(width, height, rtOptions),
      ],
      bufferB: [
        new THREE.WebGLRenderTarget(width, height, rtOptions),
        new THREE.WebGLRenderTarget(width, height, rtOptions),
      ],
    };

    const colors = [
      [new THREE.Vector3(0.4, 0.8, 0.9), new THREE.Vector3(1.0, 0.4, 0.7)], // cyan-pink
      [new THREE.Vector3(1.0, 0.4, 0.7), new THREE.Vector3(1.0, 0.9, 0.3)], // pink-yellow
      [new THREE.Vector3(1.0, 0.9, 0.3), new THREE.Vector3(0.6, 0.3, 0.9)], // yellow-purple
      [new THREE.Vector3(0.6, 0.3, 0.9), new THREE.Vector3(0.3, 0.9, 0.5)], // purple-green
      [new THREE.Vector3(0.3, 0.9, 0.5), new THREE.Vector3(0.4, 0.8, 0.9)], // green-cyan
    ];

    let currentColorIndex = 0;

    const bufferAMaterial = new THREE.ShaderMaterial({
      fragmentShader: bufferAShader,
      uniforms: {
        iChannel0: { value: null },
        iChannel1: { value: null },
        iResolution: { value: new THREE.Vector2(width, height) },
        iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
        iTime: { value: 0 },
        iFrame: { value: 0 },
      },
    });

    const bufferBMaterial = new THREE.ShaderMaterial({
      fragmentShader: bufferBShader,
      uniforms: {
        iChannel0: { value: null },
        iChannel1: { value: null },
        iResolution: { value: new THREE.Vector2(width, height) },
      },
    });

    const imageMaterial = new THREE.ShaderMaterial({
      fragmentShader: imageShader,
      uniforms: {
        iChannel0: { value: null },
        iChannel1: { value: null },
        iResolution: { value: new THREE.Vector2(width, height) },
        uColor1: { value: colors[0][0].clone() },
        uColor2: { value: colors[0][1].clone() },
        uTime: { value: 0 },
      },
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const quad = new THREE.Mesh(geometry, imageMaterial);
    scene.add(quad);

    let frameCount = 0;
    let lastColorChange = 0;
    const COLOR_CHANGE_INTERVAL = 6000;

    let animationId: number;
    const animate = (time: number) => {
      const t = time * 0.001;
      frameCount++;

      if (time - lastColorChange > COLOR_CHANGE_INTERVAL) {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        lastColorChange = time;
      }

      const targetColor1 = colors[currentColorIndex][0];
      const targetColor2 = colors[currentColorIndex][1];
      imageMaterial.uniforms.uColor1.value.lerp(targetColor1, 0.02);
      imageMaterial.uniforms.uColor2.value.lerp(targetColor2, 0.02);
      imageMaterial.uniforms.uTime.value = t;

      if (frameCount % 2 === 0) {
        bufferAMaterial.uniforms.iChannel0.value =
          renderTargets.bufferA[0].texture;
        bufferAMaterial.uniforms.iChannel1.value =
          renderTargets.bufferB[0].texture;
        bufferAMaterial.uniforms.iTime.value = t;
        bufferAMaterial.uniforms.iFrame.value = frameCount;

        quad.material = bufferAMaterial;
        renderer.setRenderTarget(renderTargets.bufferA[1]);
        renderer.render(scene, camera);

        [renderTargets.bufferA[0], renderTargets.bufferA[1]] = [
          renderTargets.bufferA[1],
          renderTargets.bufferA[0],
        ];

        bufferBMaterial.uniforms.iChannel0.value =
          renderTargets.bufferA[0].texture;
        bufferBMaterial.uniforms.iChannel1.value =
          renderTargets.bufferB[0].texture;

        quad.material = bufferBMaterial;
        renderer.setRenderTarget(renderTargets.bufferB[1]);
        renderer.render(scene, camera);

        [renderTargets.bufferB[0], renderTargets.bufferB[1]] = [
          renderTargets.bufferB[1],
          renderTargets.bufferB[0],
        ];
      }

      imageMaterial.uniforms.iChannel0.value = renderTargets.bufferA[0].texture;
      imageMaterial.uniforms.iChannel1.value = renderTargets.bufferB[0].texture;

      quad.material = imageMaterial;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    cleanupRef.current = () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      bufferAMaterial.dispose();
      bufferBMaterial.dispose();
      imageMaterial.dispose();
      renderTargets.bufferA.forEach((rt) => rt.dispose());
      renderTargets.bufferB.forEach((rt) => rt.dispose());
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-70"
      style={{
        zIndex: 0,
        width: '1400px',
        height: '1000px',
        maxWidth: '90vw',
        maxHeight: '90vh',
      }}
    />
  );
}
