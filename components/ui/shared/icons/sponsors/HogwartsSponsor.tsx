import Image from 'next/image';

export default function HogwartsSponsor() {
  return (
    <Image
      src="/sponsors/hogwarts-sponsor.svg"
      alt="Hogwarts Sponsor"
      width={200}
      height={100}
    />
  );
}
