import Image from "next/image";
import React from "react";
const PicksCard = ({ label, image }: { label: string; image: string }) => {
  return (
    <article className="flex flex-col gap-2">
      <div className="md:h-[301.3px] rounded-md overflow-hidden md:w-[269.48px] w-[144px] h-[161px] relative flex items-center justify-center after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/25 ">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={image}
          alt={label}
          height={200}
          width={200}
        />
        <h3 className="z-[1] text-xl font-bold text-white md:text-3xl">
          {label}
        </h3>
      </div>
      <div className="flex md:gap-4 gap-1 items-center w-full text-deep_blue font-semibold text-sm">
        <span>Movie</span> <span>Action</span> <span>2024</span>{" "}
      </div>
    </article>
  );
};

export default PicksCard;
