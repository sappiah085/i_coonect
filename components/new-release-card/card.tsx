import React from "react";
import eagle from "@/public/assets/eagle.jpeg";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
const NewReleaseCard = () => {
  return (
    <article className="min-w-[266px] snap-center  max-w-[558.6px] w-full flex gap-1 flex-col">
      <span>
        <Image
          src={eagle}
          className="object-center object-cover  w-[266px] md:h-[338.1px] md:w-[558.6px] rounded-md h-[161px]"
          alt="eagle"
        />
      </span>
      <div className="flex gap-2 items-center  text-deep_blue font-semibold text-sm">
        <span>Movie</span> <span>Action</span> <span>2024</span>{" "}
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

export default NewReleaseCard;
