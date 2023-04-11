import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
const BookmarkedCard = ({ image }: { image: string }) => {
  return (
    <article className="flex w-[24rem] flex-shrink-0 lg:mr-6 mr-2  gap-3">
      <div className="md:w-[150px] flex-shrink-0 w-[180px]">
        <Image
          className="object-cover w-full h-full rounded-md "
          src={image}
          height={200}
          width={200}
          alt="movie alt"
        />
      </div>
      <div className="flex flex-col flex-shrink-0 justify-between w-[200px]">
        <h3 className="text-lg lg:text-xl text-deep_blue font-semibold">
          Till I Break
        </h3>
        <p className="text-grey break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue lacus,
          scelerisque pretium consectetur. In vitae eu faucibus vel.
        </p>
        <div className="flex flex-wrap gap-2 items-center w-full text-deep_blue font-semibold text-sm">
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
