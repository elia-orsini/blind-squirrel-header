import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeaderMain: React.FC<{ initialDelay: number }> = ({ initialDelay }) => {
  useGSAP(() => {
    gsap.from(".mainTitle", {
      translateY: "100%",
      duration: 1,
      ease: "power1.inOut",
      delay: initialDelay,
    });

    gsap.from("#mainImageContainer", {
      height: 0,
      delay: initialDelay,
      duration: 0.5,
    });

    gsap.from(".fromBottom", {
      translateY: "100%",
      opacity: 0,
      duration: 0.5,
      delay: initialDelay + 1,
    });

    gsap.from("#arrowButton", {
      scale: 0,
      duration: 0.5,
      delay: initialDelay + 1,
    });
  }, []);

  return (
    <div className="h-full w-full flex flex-col my-auto h-max gap-y-10">
      <div className="overflow-hidden">
        <p className="fromBottom text-sm mx-auto text-left w-64 text-orange">
          Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        <div className="ml-auto z-20 font-bold">
          <h1 className="flex ml-10 text-[100px] leading-[100px] overflow-hidden">
            <span className="mainTitle">TELL</span>
          </h1>
          <h1 className="flex sm:-mr-40 text-[200px] leading-[160px] overflow-hidden">
            <span className="mainTitle">BIG</span>
          </h1>
          <h1 className="flex text-[100px] leading-[100px] overflow-hidden">
            <span className="mainTitle">TAILS</span>
          </h1>
        </div>

        <div className="flex flex-col z-10 w-max h-max sm:mr-auto">
          <div
            id="mainImageContainer"
            className="relative bg-red-200 sm:h-[350px] w-full aspect-square sm:aspect-video bg-red-700 rounded-[40px] object-cover"
          >
            <Image
              src="/ragnarok.png"
              alt=""
              id="mainImage"
              fill={true}
              className="rounded-[40px] object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between">
            <button
              id="arrowButton"
              className="mt-10 bg-lightOrange px-7 py-6 rounded-full text-3xl hidden sm:block text-white font-thin"
            >
              ↓
            </button>

            <div className="fromBottom text-lg flex flex-row ml-auto gap-x-10 m-10 items-top">
              <button className="border px-6 py-1 h-max rounded-3xl hover:bg-orange hover:text-white text-orange border-orange uppercase">
                Learn More
              </button>

              <a className="text-black underline underline-offset-8 uppercase cursor-pointer">
                Contact us
              </a>
            </div>

            <button
              id="arrowButton"
              className="mx-auto bg-lightOrange px-7 py-6 rounded-full text-3xl sm:hidden text-white font-thin"
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
