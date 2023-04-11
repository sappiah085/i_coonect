import { useState } from "react";
export default function MainNav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="w-full bg-gradient-to-b from-black via-black/40 to-black/5  flex items-center lg:hidden fixed top-0 px-5 p-3 z-40">
      <nav className="w-full flex items-center justify-between">
        <button onClick={() => setOpenNav(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 36 36"
            fill="white"
            stroke="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.76172 18.2397H30.0002"
              stroke="white"
              strokeWidth="3.50005"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.76172 9.48926H30.0002"
              stroke="white"
              strokeWidth="3.50005"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.76172 26.9897H30.0002"
              stroke="white"
              strokeWidth="3.50005"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="font-semibold text-lg uppercase text-white">Trailers</h1>
        <button className="p-1  rounded-md">
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
      </nav>
    </header>
  );
}
