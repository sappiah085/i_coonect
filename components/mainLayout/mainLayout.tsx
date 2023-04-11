import { useRouter } from "next/router";
import MainNav from "../mainNav/mainNav";
import SideBar from "../sideBar/sideBar";
import { ReactNode } from "react";
export default function MainLayout({
  children,
  padding = true,
}: {
  children: ReactNode;
  padding?: boolean;
}) {
  const { pathname } = useRouter();
  const showNav = !pathname.includes("trailer");
  return (
    <main className="flex font-Montserrat w-full  flex-col min-h-screen">
      <span className={`${showNav ? "flex " : "lg:flex hidden"}`}>
        <MainNav />
      </span>
      <div className={`flex w-full h-fit ${padding ? "py-20" : ""}`}>
        <SideBar />
        <div
          className={`lg:w-[82%]  mx-auto w-full flex items-center h-fit flex-col gap-3  ${
            padding ? "lg:pb-2 pb-24" : "lg:pt-20"
          } `}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
