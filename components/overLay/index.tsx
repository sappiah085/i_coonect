import { gsap } from "gsap";
import React, { ReactNode, useEffect, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
const Overlay = ({
  children,
  closeFunc,
}: {
  children: ReactNode;
  closeFunc: () => void;
}) => {
  const parent = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".child",
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    }, parent);
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={parent}
      className="h-[100dvh] flex flex-col items-center justify-end top-0 left-0 z-50 w-full fixed bg-black/50 overflow-hidden"
    >
      <OutsideClickHandler display="contents" onOutsideClick={closeFunc}>
        <div className="bg-white p-2 py-4 w-[95%] max-w-md rounded-t-md child">
          {children}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Overlay;
