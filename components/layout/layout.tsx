import Image from "next/image";
import Link from "next/link";
import connect from "../../public/assets/connect.svg";
export default function LayoutForAfterSplash({
  children,
  on,
  link,
  label,
  className,
}: any) {
  return (
    <main
      style={{
        height: !on ? "100%" : "0px",
        opacity: !on ? 1 : 0,
        overflow: !on ? "visible" : "hidden",
      }}
      className="flex transition-opacity delay-300 flex-col font-Montserrat items-center justify-start w-full max-w-[2500px] mx-auto duration-500"
    >
      <header className="w-full flex items-center">
        <nav className="flex justify-between items-center w-full  p-7 text-xl">
          <Link href={"/"}>
            <Image className="w-fit h-5" height={50} src={connect} alt="logo" />
          </Link>
          <Link className={className} href={link}>
            {label}
          </Link>
        </nav>
      </header>
      {children}
    </main>
  );
}
