import { useState } from "react";
import Overlay from "../overLay";
import Filter from "../filter/filter";

export default function Search({ show = "hidden lg:flex w-1/3" }: any) {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className={" items-center  gap-4 " + show}>
      <input
        className="bg-grey/25 p-3 py-2 rounded-md placeholder:text-deep_grey outline-none focus-within:border-grey border-transparent border-[.3px]  w-full pr-10"
        type="text"
        placeholder="What show are you searching for ?"
      />
      <button className="bg-red p-1 -ml-[3.3rem] rounded-md">
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
      <button
        onClick={() => setOpenFilter(true)}
        className="bg-red p-1 rounded-md"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.25 12.5H18.75"
            stroke="#F8F9FC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.34375 7.8125H22.6562"
            stroke="#F8F9FC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.1562 17.1875H14.8438"
            stroke="#F8F9FC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {openFilter && (
        <Overlay closeFunc={() => setOpenFilter(false)}>
          <Filter />
        </Overlay>
      )}
    </div>
  );
}
