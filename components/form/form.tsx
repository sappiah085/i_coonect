import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function Form({ children, label, image }: any) {
  const container = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".image_il",
        0.5,
        { scale: 0.8, opacity: 0, x: -10 },
        { scale: 1, opacity: 1, x: 0 }
      );
      tl.from(".form", 2, { opacity: 0, y: 10 });
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={container}
      className="w-full max-w-[2500px] flex flex-col p-5"
    >
      <h1 className="text-purple text-3xl lg:hidden font-extrabold">{label}</h1>
      <div className="flex w-full flex-wrap items-start justify-around px-2 ">
        <Image
          priority
          className="min-w-[230px] flex-1 max-w-lg flex-shrink-0 image_il"
          src={image}
          alt="illustration"
        />
        {children}
      </div>
    </section>
  );
}
