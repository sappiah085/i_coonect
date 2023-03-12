import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import svg from "../../public/assets/circular_logo.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function Splash({ on }: { on: boolean }) {
  const container = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".logo", 1, { scale: 0.5, opacity: 0 });
      tl.from(".bottom_comp", { opacity: 0, y: 10, delay: 0.2 });
      tl.from(".bottom_comp_image", { x: -50, opacity: 0 });
      tl.from(".bottom_comp_text1", { y: 10, opacity: 0 });
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={container}
      style={{
        transform: on ? "scale(1)" : "scale(0)",
        height: on ? "100vh" : "0px",
      }}
      className="w-full relative h-screen flex flex-col items-center justify-center  max-w-[2500px] mx-auto overflow-hidden transition-all"
      tabIndex={-1}
    >
      <Image className="logo" src={logo} alt="logo" />
      <div className="absolute gap-2 font-Montserrat bottom-5 flex justify-end bottom_comp">
        <Image
          className="h-[3rem] w-fit bottom_comp_image"
          src={svg}
          alt="circle"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-sm font-bold ">CHORDIC</h1>
          <h2 className="text-[.6rem] tracking-[.6rem] bottom_comp_text1">
            TECHNOLOGIES
          </h2>
        </div>
      </div>
    </section>
  );
}
