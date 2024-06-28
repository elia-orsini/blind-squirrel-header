import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const HeaderTop: React.FC<{ initialDelay: number }> = ({ initialDelay }) => {
  useGSAP(() => {
    gsap.from(".fromTop", {
      translateY: "-100%",
      opacity: 0,
      duration: 1,
      delay: initialDelay,
    });
  }, []);

  return (
    <header className="w-full flex flex-row justify-between p-4 overflow-hidden uppercase">
      <Image src="/logo.png" alt="Blind Squirrel Logo" width={96} height={96} />

      <div className="fromTop flex-row gap-x-8 items-center hidden sm:flex">
        <p>about</p>
        <p>projects</p>
        <p>careers</p>
        <p>news</p>
        <a className="rounded-3xl px-4 py-2 bg-orange text-white font-bold">
          contact us
        </a>
      </div>
    </header>
  );
};

export default HeaderTop;
