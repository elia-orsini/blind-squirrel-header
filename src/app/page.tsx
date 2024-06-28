"use client";

import { NextPage } from "next";

import IntroAnimation from "@/components/IntroAnimation";
import HeaderTop from "@/components/header/HeaderTop";
import HeaderMain from "@/components/header/HeaderMain";

const Page: NextPage = () => {
  const introAnimationLength = 2;

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#fefbf4] text-fontColor">
      <IntroAnimation duration={introAnimationLength} />

      <HeaderTop initialDelay={introAnimationLength + 1.5} />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1921 546"
        fill="none"
        className="fixed"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2068.07 260.789C1768.76 -32.9281 1413.25 100 1321.19 162.883C1152.03 278.425 963.666 470.999 640.703 470.999C197.867 470.999 233.494 60.4991 -66.2729 76.1667"
          stroke="#FF8702"
          stroke-width="150"
          stroke-linejoin="round"
        />
      </svg>

      <HeaderMain initialDelay={introAnimationLength + 0.5} />
    </main>
  );
};

export default Page;
