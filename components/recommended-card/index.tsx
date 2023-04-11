import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
const RecommendedCard = ({ image }: { image: string }) => {
  return (
    <article className="flex pt-7 lg:pt-11 px-2 lg:px-3 rounded-md overflow-hidden flex-col justify-between relative w-[253px] md:w-[323.73px] md:h-[497.09px] h-[281px] flex-shrink-0 after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/50 pb-3 ">
      <button className="z-[1]  text-xl absolute top-3 right-3 text-black ">
        <svg
          width="36"
          height="36"
          viewBox="0 0 52 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.9486 45.9352L26.0177 37.8679L13.0898 45.9352V10.4391C13.0898 10.0112 13.2601 9.60084 13.5632 9.29825C13.8663 8.99567 14.2774 8.82568 14.706 8.82568H37.3324C37.7611 8.82568 38.1722 8.99567 38.4752 9.29825C38.7783 9.60084 38.9486 10.0112 38.9486 10.4391V45.9352Z"
            fill="url(#paint0_linear_3559_8994)"
          />
          <path
            d="M19.0898 25.7642H31.3122"
            stroke="white"
            strokeWidth="1.56456"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.2031 19.6636V31.8653"
            stroke="white"
            strokeWidth="1.56456"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3559_8994"
              x1="26.0192"
              y1="8.82568"
              x2="26.0192"
              y2="45.9352"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0.62" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <Image
        className="absolute top-0 w-full h-full object-fill left-0"
        src={image}
        alt="image"
        height={200}
        width={200}
      />
      <div className="z-[1] text-white  w-full  flex flex-col justify-between h-full">
        <div className="flex flex-col  gap-3">
          <h3 className="text-lg lg:text-2xl lg:w-[200px] font-bold">
            Summer School rocks
          </h3>
          <p className="w-full lg:w-[200px] text-[#BFCCD9] font-semibold text-sm lg:text-base lg:leading-5 leading-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            lacus, scelerisque pretium consectetur. In vitae eu faucibus vel.
          </p>
        </div>
        <div>
          <p className=" text-[#BFCCD9] font-semibold text-[.62rem] lg:text-[0.75rem]">
            Disclaimer : 18 and above, may contain nuidity
          </p>
          <div className="flex w-full justify-between items-center gap-[2px]  text-grey font-semibold text-sm">
            <span>Movie</span> <span>1 hr 30 mins</span> <span>High Sch.</span>{" "}
            <span className="flex items-center">
              <span className="text-[#F3CE13]">
                <AiFillStar />
              </span>
              5.2
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RecommendedCard;
