import MainNav from "../mainNav/mainNav";
import SideBar from "../sideBar/sideBar";
export default function MainLayout({ children }: any) {
  return (
    <main className="flex w-full flex-col min-h-screen">
      <MainNav />
      <div className="flex w-full pt-20">
        <SideBar />
        <div className="lg:w-[85%] w-full flex flex-col gap-3 pb-24 lg:pb-2">
          {children}
        </div>
      </div>
    </main>
  );
}
