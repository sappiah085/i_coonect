import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
const Caro = ({ image }: { image: string }) => {
  return (
    <article className="flex rounded-md overflow-hidden flex-col justify-between relative w-full md:h-[476px]  mx-auto h-[202px] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/50 ">
      <Image
        className="absolute top-0 w-full h-full object-cover left-0"
        src={image}
        height={200}
        width={200}
        alt="image"
      />
      <div className="z-[1] text-white p-4  flex flex-col justify-between h-full">
        <div className="flex flex-col md:p-10 gap-3">
          <h3 className="md:text-3xl text-lg font-bold">
            Once Upon A Time In Nethr....
          </h3>
          <p className="w-full max-w-sm text-[#BFCCD9] font-semibold text-sm md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            lacus, scelerisque pretium consectetur. In vitae eu faucibus vel.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between items-center gap-4  text-grey font-semibold text-base">
            <span>Movie</span> <span>Action</span> <span>2024</span>{" "}
            <span className="flex items-center">
              <span className="text-[#F3CE13]">
                <AiFillStar />
              </span>
              5.2
            </span>
          </div>
          <button className="h-[36px] flex items-center justify-center aspect-square bg-red rounded-full ">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2819 7.10034L6.16345 1.94475C6.08665 1.90133 5.99872 1.87762 5.90873 1.87606C5.81873 1.8745 5.72991 1.89515 5.65141 1.93588C5.5729 1.97662 5.50754 2.03597 5.46205 2.10782C5.41656 2.17968 5.39258 2.26145 5.39258 2.34473V12.6559C5.39258 12.7392 5.41656 12.8209 5.46205 12.8928C5.50754 12.9647 5.5729 13.024 5.65141 13.0647C5.72991 13.1055 5.81873 13.1261 5.90873 13.1246C5.99872 13.123 6.08665 13.0993 6.16345 13.0559L15.2819 7.90028C15.356 7.85841 15.4172 7.79963 15.4596 7.7296C15.5021 7.65956 15.5244 7.58061 15.5244 7.50031C15.5244 7.42001 15.5021 7.34106 15.4596 7.27102C15.4172 7.20098 15.356 7.14221 15.2819 7.10034Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Caro;
