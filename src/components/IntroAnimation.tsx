import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";

const IntroAnimation: React.FC<{ duration: number }> = ({ duration }) => {
  useGSAP(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap.fromTo(
      "#openingDiv",
      {
        yPercent: 0,
      },
      {
        yPercent: -100,
        duration: 1,
        ease: "power1.inOut",
        delay: duration,
      }
    );

    let obj = { value: 0 };
    const loadPercentageObj = document.getElementById("loadPercentage");

    const loadingAnimation = gsap.timeline();

    loadingAnimation.to(obj, {
      duration: duration,
      value: 100,
      onUpdate: function () {
        if (loadPercentageObj) {
          loadPercentageObj.innerText = `${obj.value.toFixed(0)}%`;
        }
      },
    });
    loadingAnimation.to("#loadPercentage", { opacity: 0 });

    const snakeAnimation = gsap.timeline();

    snakeAnimation.fromTo(
      "#snakePath",
      {
        drawSVG: "0%",
      },
      {
        drawSVG: "-100%",
        duration: duration,
        ease: "power1.inOut",
      }
    );
    snakeAnimation.to("#snakePath", {
      opacity: 0,
      duration: 1,
    });
  }, [duration]);

  return (
    <div className="pointer-events-none">
      <div className="h-screen w-full fixed flex z-40">
        <p id="loadPercentage" className="m-auto text-white text-3xl">
          0%
        </p>
      </div>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1921 546"
        fill="none"
        className="fixed z-40 opacity-50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="snakePath"
          d="M2068.07 260.789C1768.76 -32.9281 1413.25 100 1321.19 162.883C1152.03 278.425 963.666 470.999 640.703 470.999C197.867 470.999 233.494 60.4991 -66.2729 76.1667"
          stroke="#FFFFFF"
          stroke-width="150"
          stroke-linejoin="round"
        />
      </svg>

      <div
        id="openingDiv"
        className="fixed rounded-b-[60px] bg-orange h-[110vh] w-full z-30"
      />
    </div>
  );
};

export default IntroAnimation;
