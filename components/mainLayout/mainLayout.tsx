import MainNav from "../mainNav/mainNav";
import SideBar from "../sideBar/sideBar";
export default function MainLayout({ children }: any) {
  return (
    <main className="flex font-Montserrat w-full  flex-col min-h-screen">
      <MainNav />
      <div className="flex w-full  py-20">
        <SideBar />
        <div className="lg:w-[82%]  mx-auto w-full flex items-center  flex-col gap-3 pb-24 lg:pb-2">
          {children}
        </div>
      </div>
    </main>
  );
}
