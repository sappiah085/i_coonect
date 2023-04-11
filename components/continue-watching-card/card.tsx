import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
const Card = ({ image, year }: { image: string; year: number }) => {
  return (
    <article className="w-[190px] snap-center gap-1  flex flex-col justify-between items-start">
      <div className="relative w-full rounded-sm overflow-hidden   h-[242px]">
        <Image
          className="absolute object-cover -z-[1] top-0 left-0 h-full w-full"
          src={image}
          width={200}
          height={200}
          alt="eagle"
        />
        <span className="z-[1] flex flex-col justify-between h-full py-2">
          <button>
            {" "}
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
          <div className="w-[85%] overflow-hidden relative  mx-auto rounded-md bg-[#C4C4C480] h-[3px] after:absolute after:top-0 after:left-0 after:w-2/3 after:bg-[#FF3C38] after:h-full"></div>
        </span>
      </div>
      <div className="flex justify-between items-center w-full text-deep_blue font-semibold text-sm">
        <span>Movie</span> <span>Action</span> <span>{year}</span>{" "}
        <span className="flex items-center">
          <span className="text-[#F3CE13]">
            <AiFillStar />
          </span>
          5.2
        </span>
      </div>
    </article>
  );
};

export default Card;
