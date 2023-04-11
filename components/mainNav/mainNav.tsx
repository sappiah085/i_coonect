import Image from "next/image";
import logo from "../../public/assets/icons/logo.svg";
import Link from "next/link";
import Search from "../search/search";
import Overlay from "../overLay";
import Menu from "../menu/menu";
import { links } from "./menu-items";
import { useState } from "react";
export default function MainNav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="w-full bg-white flex items-center fixed top-0 px-5 p-3 z-40">
      <nav className="w-full flex items-center justify-between">
        <Link className="h-7 md:h-10" href={"/home"}>
          <Image
            className="h-full  w-fit object-contain"
            src={logo}
            alt="logo"
          />
        </Link>
        <Search />
        <div className="flex items-center gap-5">
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.74147 14.9581C7.73965 13.6609 7.99646 12.3761 8.49711 11.1779C8.99776 9.97974 9.73234 8.89176 10.6585 7.97672C11.5847 7.06167 12.6841 6.33766 13.8935 5.84641C15.1028 5.35516 16.3981 5.10639 17.7048 5.11445C23.157 5.15469 27.5181 9.65376 27.5181 15.0816V16.0518C27.5181 20.9486 28.5501 23.7901 29.459 25.3431C29.5569 25.5091 29.609 25.6977 29.6101 25.89C29.6111 26.0823 29.561 26.2715 29.4649 26.4385C29.3688 26.6055 29.23 26.7443 29.0626 26.8411C28.8952 26.9378 28.705 26.989 28.5113 26.9895H6.74723C6.55348 26.989 6.3633 26.9378 6.19586 26.841C6.02842 26.7443 5.88964 26.6054 5.79354 26.4384C5.69743 26.2714 5.64738 26.0821 5.64845 25.8898C5.64952 25.6975 5.70167 25.5088 5.79963 25.3429C6.70903 23.7898 7.74147 20.9483 7.74147 16.0518L7.74147 14.9581Z"
                stroke="#111F5F"
                strokeWidth="2.80004"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.2227 26.9897V28.0835C13.2227 29.2439 13.687 30.3567 14.5134 31.1771C15.3399 31.9976 16.4608 32.4586 17.6297 32.4586C18.7985 32.4586 19.9194 31.9976 20.7459 31.1771C21.5723 30.3567 22.0367 29.2439 22.0367 28.0835V26.9897"
                stroke="#111F5F"
                strokeWidth="2.80004"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button onClick={() => setOpenNav(true)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.76172 18.2397H30.0002"
                stroke="#111F5F"
                strokeWidth="3.50005"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.76172 9.48926H30.0002"
                stroke="#111F5F"
                strokeWidth="3.50005"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.76172 26.9897H30.0002"
                stroke="#111F5F"
                strokeWidth="3.50005"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Image className="h-7 md:h-8  w-fit" src={logo} alt="user" />
        </div>
      </nav>
      {openNav && (
        <Overlay closeFunc={() => setOpenNav((pre) => !pre)}>
          <Menu
            items={links}
            render={({ icon, label, link }: typeof links[0]) => (
              <Link
                onClick={() => setOpenNav((pre) => !pre)}
                className="flex items-center gap-3"
                href={link}
              >
                <Image className="h-[24px]" src={icon} alt={label} /> {label}
              </Link>
            )}
          />
        </Overlay>
      )}
    </header>
  );
}
