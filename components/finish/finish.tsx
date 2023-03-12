import Image from "next/image";
import stepOne from "../../public/assets/finish.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
export default function Finish({ handleNext }: any) {
  const parentEl = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".image", 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
      gsap.fromTo(
        ".text_ani",
        1.3,
        { opacity: 0, x: -50, skewX: -6 },
        { opacity: 1, x: 0, skewX: 0 }
      );
    }, parentEl);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={parentEl}
      className="flex w-full m-auto flex-col gap-1 items-center py-2"
    >
      <div className="w-full  flex items-center max-w-6xl justify-between flex-wrap-reverse">
        <div className="flex flex-col lg:gap-24 min-h-full flex-grow">
          <p className="font-semibold text_ani flex-shrink-0 min-w-[200px] text-xl lg:text-left lg:text-2xl text-deep_blue flex-grow flex-1 text-center max-w-lg">
            All you need to do now is to tap “Finish”, we’ll be waiting for you
            on the other side.
            <br />
            <br />
            Welcome Home! “Username”
          </p>
          <div className="w-full flex max-w-6xl justify-between items-center">
            <button
              onClick={() => handleNext(-1)}
              className="bg-main_blue/25 mt-5 md:mt-0 border-2 font-Open_Sans border-white w-fit  font-semibold text-main_blue text-lg py-2 px-14 rounded-3xl hover:bg-white hover:text-main_blue hover:border-main_blue"
              type="submit"
            >
              Back
            </button>
            <Link
              href={"/"}
              className="bg-main_blue mt-5 md:mt-0 border-2 font-Open_Sans border-white w-fit  font-semibold text-white text-lg  py-2 px-14 rounded-3xl hover:bg-white hover:text-main_blue hover:border-main_blue"
              type="submit"
            >
              Finish
            </Link>
          </div>
        </div>

        <Image
          className="image h-[27rem] object-contain"
          src={stepOne}
          alt="step one"
        />
      </div>
    </section>
  );
}
