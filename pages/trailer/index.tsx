import MainLayout from "@/components/mainLayout/mainLayout";
import Tag from "@/components/tags/tag";
import NavTrailer from "@/components/trailer/nav";
import Image from "next/image";
import video from "@/public/assets/trailer/video.jpeg";
import { MdVerified } from "react-icons/md";
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io";
export default function Trailer() {
  return (
    <MainLayout padding={false}>
      <section className="flex relative flex-col w-full  h-[100vh] lg:h-fit ">
        <Tag pl="pl-[20%] hidden lg:!flex" />
        <NavTrailer />
        <div className="w-full relative h-full lg:flex lg:pt-5 lg:gap-3 lg:max-w-4xl mx-auto">
          <div className="absolute left-[25rem] top-[40%] text-3xl  flex-col gap-2 hidden lg:flex">
            <IoMdArrowDropupCircle />
            <IoMdArrowDropdownCircle />
          </div>
          <div className="absolute lg:relative isolate top-0 left-0 w-full lg:max-w-sm h-full lg:h-[80vh]">
            <Image src={video} className="w-full h-full" alt="video" />
            <div className="z-[4] w-full text-white absolute bottom-20 lg:bottom-3 flex justify-between items-center px-3">
              <span className="bg-[#FFFFFF26] px-[.3rem] p-y[.1rem] text-sm rounded-xl">
                0:30
              </span>
              <div className="w-[70%] h-1 rounded-md relative after:absolute after:bg-blue-600 after:w-[60%] after:h-full bg-[#52658A]"></div>
              <span className="bg-[#FFFFFF26] px-[.3rem] p-y[.1rem] text-sm rounded-xl">
                34:07
              </span>
            </div>
          </div>
          <div className="absolute lg:static px-2 bottom-28 flex flex-col gap-2">
            <h2 className="text-white lg:text-deep_blue font-semibold text-lg lg:text-2xl">
              Be Confident
            </h2>
            <p className="text-white lg:text-black text-sm">
              Magna tellus et pretium etiam lacus. Dolor, convallis amet sit sed
              fames. Tortor platea hac mauris fames volutpat et. Nec placerat et
              sagittis ornare euismod at. Quam at mauris quam.
            </p>
            <div className="flex text-white lg:text-deep_blue font-semibold justify-between  items-center">
              <div className="flex items-center gap-1">
                <Image
                  className="h-[30px] w-[30px]  aspect-square"
                  src={video}
                  alt="user"
                />
                <div className="flex items-center gap-1">
                  <span>@Username</span>
                  <span className="text-blue-500">
                    <MdVerified />
                  </span>
                </div>
              </div>
              <span>YESTERDAY</span>
              <span>VIEWS</span>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
