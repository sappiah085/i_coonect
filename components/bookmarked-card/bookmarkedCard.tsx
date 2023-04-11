import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import eagle from "@/public/assets/eagle.jpeg";
const BookmarkedCard = () => {
  return (
    <article className="flex w-full lg:mr-6  gap-3">
      <div className="md:w-[200px] flex-shrink-0 w-[180px]">
        <Image
          className="object-cover w-full h-full rounded-md "
          src={eagle}
          alt="movie alt"
        />
      </div>
      <div className="flex flex-col justify-between  max-w-sm">
        <h3 className="text-lg lg:text-xl text-deep_blue font-semibold">
          Till I Break
        </h3>
        <p className="text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue lacus,
          scelerisque pretium consectetur. In vitae eu faucibus vel.
        </p>
        <div className="flex gap-2 items-center w-full text-deep_blue font-semibold text-sm">
          <span>Movie</span> <span>Action</span> <span>2024</span>{" "}
          <span className="flex items-center">
            <span className="text-[#F3CE13]">
              <AiFillStar />
            </span>
            5.2
          </span>
        </div>
      </div>
    </article>
  );
};

export default BookmarkedCard;
