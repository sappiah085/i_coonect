import Link from "next/link";
import { sideLinks } from "./sideBarLinks";
import { useRouter } from "next/router";

export default function SideBar() {
  const { pathname } = useRouter();

  return (
    <>
      <div className="hidden h-screen flex-shrink-0  flex-col  lg:flex w-[15%] font-Montserrat py-9"></div>
      <aside className="w-full fixed bottom-0 lg:top-0 lg:h-screen   lg:flex-col  flex lg:w-[15%] bg-white font-Montserrat py-9 z-10">
        <nav className="w-full h-full lg:py-14  justify-around lg:justify-start lg:items-start flex lg:flex-col lg:gap-10">
          {sideLinks.map(({ url, label, icon }) => {
            const color = pathname === url ? "#111F5F" : "#C4C4C4";

            return (
              <Link
                style={{ fill: color, color: color }}
                className="flex  items-center  justify-start lg:w-full lg:px-4 gap-5 uppercase font-bold text-grey text-sm"
                href={url}
                key={label}
              >
                {icon} <span className="hidden lg:inline-block">{label}</span>
              </Link>
            );
          })}
          <Link
            className="flex  mt-auto  items-center justify-start  lg:w-full px-4 gap-5 uppercase   font-bold text-deep_blue text-sm"
            href={"/setting"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7148 14.7769L15.7149 26.0269"
                stroke="#111F5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.7149 5.40186L15.7148 11.0269"
                stroke="#111F5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.1523 24.1519L24.1524 26.0269"
                stroke="#111F5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.1524 5.40186L24.1523 20.4019"
                stroke="#111F5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.9648 20.4019H21.3398"
                stroke="#111F5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.27741 20.4019L7.27734 26.0269"
                stroke="#111F5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.27734 5.40186L7.27741 16.6519"
                stroke="#111F5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.46484 16.6519H10.0898"
                stroke="#111F5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5273 11.0269H12.9023"
                stroke="#111F5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden lg:inline-block">SETTINGS</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
