import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function JoinCard({ text, image }: any) {
  const article = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.from(".image", 2, { opacity: 0, y: 50 });
    }, article);
    return () => ctx.revert();
  }, []);
  return (
    <article
      ref={article}
      className="snap-center flex flex-col gap-1 w-full max-w-md min-w-[250px]"
    >
      <Image
        priority
        src={image}
        blurDataURL={image}
        className="object-contain image"
        alt="illustration"
      />
      <p className="uppercase text-purple font-bold text-center lg:text-[.7rem] text-sm">
        {text}
      </p>
    </article>
  );
}
