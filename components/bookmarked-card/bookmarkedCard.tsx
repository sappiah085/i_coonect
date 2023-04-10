import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import eagle from "@/public/assets/eagle.jpeg";
const BookmarkedCard = () => {
  return (
    <article className="flex w-full  gap-2">
      <div className="md:w-[250px] w-[320px]">
        <Image
          className="object-cover w-full h-full rounded-md "
          src={eagle}
          alt="movie alt"
        />
      </div>
      <div className="flex flex-col justify-between max-w-sm">
        <h3 className="text-lg lg:text-xl text-deep_blue font-semibold">
          Till I Break
        </h3>
        <p className="text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue lacus,
          scelerisque pretium consectetur. In vitae eu faucibus vel.
        </p>
        <div className="flex justify-between items-center w-full text-deep_blue font-semibold text-sm">
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
