'use client'
import Link from "next/link"
import { useState, useEffect } from "react"



export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    });  {/* dopo la graffa c'era un ritardo di 1000 che dava problemi alla syncro tra client e server */}

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`;
  }



  return ( 
    <nav className={
      navOpen 
        ? "fixed z-[999] top-0 mix-blend-normal transition duration-1000"
        : "fixed z-[999] top-0 mix-blend-difference transition duration-1000"
      }>
      
        <div className="fixed top-0 left-0 w-full flex justify-between items-center p-[2em]">
          <div className="p-[0.125em] text-sm uppercase font-bold">
            <Link href="/" className="cursor-pointer">
              AVCUT LICITRA
            </Link>
          </div>
          <div className="group cursor-pointer relative " onClick={() => setNavOpen(!navOpen)}>
            <div className={
              navOpen ? 
              "relative w-[44px] h-[44px] cursor-pointer rounded-[50%] p-[2.4em] trans-ease-nav hover:bg-[ rgba(255, 255, 255, 0.2)] bg-background" 
              : "relative w-[44px] h-[44px] cursor-pointer rounded-[50%] p-[2.4em] trans-ease-nav hover:bg-[ rgba(255, 255, 255, 0.2)] group-hover:scale-110 transition duration-700"}>
              <div className={navOpen ? "lineTop spin bg-white" : "lineTop group-hover:scale-110 transition duration-700 bg-white"}></div>
              <div className={navOpen ? "lineBottom spin bg-white" : "lineBottom group-hover:scale-110 transition duration-700 bg-white"}></div>
            </div>
          </div>
        </div>


        <div className="fixed z-[-2] top-[-100%] left-0 w-full h-screen overflow-hidden p-1 trans-cubic-bezier-nav bg-black transition duration-1000" style= {{
          top: navOpen ? "0" : "-100%",
          transitionDelay: navOpen ? "0s" : "0s"
        }}>
          <ul className="absolute top-1/2 left-1/2 translate-container m-0 p-0 flex flex-col justify-center items-start">
            <li className="relative p-3">
              <Link 
                href="/" 
                className="text-white lg:text-9xl md:text-7xl text-4xl relative top-0 trans-cubic-bezier-nav uppercase nav-active"
                aria-current
                onClick={() => setNavOpen(!navOpen)} 
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                <span className="pr-10">01</span> Home
              </Link>
            </li>
            <li className="relative p-3">
              <Link 
                href="/portfolio" 
                className="text-white lg:text-9xl md:text-7xl text-4xl relative top-0 trans-cubic-bezier-nav uppercase nav-active "
                aria-current
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                <span className="pr-10">02</span>Portfolio
              </Link>
            </li>
            <li className="relative p-3">
              <Link 
                href="/servizi" 
                className="text-white lg:text-9xl md:text-7xl text-4xl relative top-0 trans-cubic-bezier-nav uppercase nav-active "
                aria-current
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                <span className="pr-10">03</span>Servizi
              </Link>
            </li>
            <li className="relative p-3">
              <Link 
                href="/chi-sono" 
                className="text-white lg:text-9xl md:text-7xl text-4xl relative top-0 trans-cubic-bezier-nav uppercase nav-active "
                aria-current
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                <span className="pr-10">04</span>Chi Sono
              </Link>
            </li>
            <li className="relative p-3">
              <Link 
                href="/contatti"
                className="text-white lg:text-9xl md:text-7xl text-4xl relative top-0 trans-cubic-bezier-nav uppercase nav-active "
                aria-current 
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.2s" : "0s",
                }}
              >
                <span className="pr-10">05</span>Contatti
              </Link>
            </li>
          </ul>

          <div className="absolute w-full bottom-0 left-0 p-[2em] flex md:flex-row flex-col justify-between">

              <div 
                className="relative bottom-[-20px] opacity-0 trans-cubic-bezier-nav uppercase" 
                style={{
                  bottom: navOpen ? "0" : "-120px",
                  opacity: navOpen ? "1" : "0",
                  transitionDelay: navOpen ? "1.2s" : "0"
                }}>
                 Milano, IT {/* {time} */}
              </div>

              <div className="flex flex-row gap-4 bottom-[-20px] opacity-0 trans-cubic-bezier-nav uppercase" style={{
              bottom: navOpen ? "0" : "-120px",
              opacity: navOpen ? "1" : "0",
              transitionDelay: navOpen ? "1.2s" : "0"
                }}>
                <p>
                  <a href="https://www.facebook.com/vincenzo.licitra" target='_blank'>
                    Facebook
                  </a> &nbsp; •
                </p>
                <p>
                  <a href="https://instagram.com/avcutlicitra" target='_blank'>
                    Instagram
                  </a> &nbsp; •
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/licitravincenzo/" target='_blank'>
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>

        </div>

    </nav>
  )
}
