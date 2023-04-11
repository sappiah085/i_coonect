import Image from "next/image";
import stepOne from "../../public/assets/illustrations/stepone.webp";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function StepOne({ handleNext }: any) {
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
        <p className="font-semibold text_ani flex-shrink-0 min-w-[200px]  lg:text-left lg:text-2xl text-deep_blue flex-grow flex-1 text-center max-w-lg">
          Hi!, welcome to connect, we know its your first time here and we would
          like to show you around. So why don’t you finish up with your sign up
          process and allow us show you what the world really could be.{" "}
        </p>
        <Image
          className="image h-[27rem] object-contain"
          src={stepOne}
          alt="step one"
        />
      </div>
      <button
        onClick={() => handleNext(+1)}
        className="bg-main_blue mt-5 md:mt-0 border-2 font-Open_Sans border-white w-fit  font-semibold text-white text-xl py-2 px-14 rounded-3xl hover:bg-white hover:text-main_blue hover:border-main_blue"
        type="submit"
      >
        Next
      </button>
    </section>
  );
}
