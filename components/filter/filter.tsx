import React from "react";
import Menu from "../menu/menu";
import { CW } from "@/utils/simData";
import Link from "next/link";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
const sampleTags = ["Ants", "Animals", "Boss", "Cars", "NFL"];
const Filter = () => {
  return (
    <div className=" flex text-sm px-3 flex-col gap-3">
      <div className="flex items-center">
        <input
          className="bg-grey/25 p-3 py-2 rounded-md placeholder:text-deep_grey outline-none focus-within:border-grey border-transparent border-[.3px]  w-full pr-10"
          type="text"
          placeholder="What show are you searching for ?"
        />
        <button className="bg-red p-1 -ml-[2.3rem] rounded-md">
          <svg
            width="24"
            height="24"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.06821 12.5C10.9255 12.5 13.2419 10.1495 13.2419 7.25C13.2419 4.35051 10.9255 2 8.06821 2C5.21086 2 2.89453 4.35051 2.89453 7.25C2.89453 10.1495 5.21086 12.5 8.06821 12.5Z"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.7266 10.9629L14.7199 14.0004"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="w-full text-sm flex gap-1 flex-wrap">
        {sampleTags.map((tag) => (
          <button
            className="bg-main_blue/10 rounded-3xl px-4 text-main_blue p-1 border-[1px] border-main_blue/5 hover:bg-white hover:text-main_blue hover:border-main_blue"
            key={tag}
          >
            {tag}
          </button>
        ))}
      </div>
      <Menu
        items={CW}
        render={({ name, image }: typeof CW[0]) => (
          <div className="flex font-semibold text-deep_blue justify-between w-full items-center">
            <Link
              className="flex  justify-between items-start gap-3 max-w-sm"
              href={"/" + name}
            >
              <Image
                className="w-[47.21px] h-[41.49px]"
                height={41.49}
                width={47.21}
                src={image}
                alt={name}
              />
              <span className="w-[250px]">{name}</span>
            </Link>
            <button className="text-xl">
              <RiDeleteBinLine />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Filter;
