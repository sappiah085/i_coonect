import React, { ReactNode, useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import Overlay from "../overLay";
import OutsideClickHandler from "react-outside-click-handler";
interface TagLikeProps {
  label: string;
  children: ReactNode;
  overlay?: boolean;
}

const TagLikeOption = ({ label, children, overlay = false }: TagLikeProps) => {
  const [open, setOpen] = useState(false);
  return (
    <OutsideClickHandler
      display="contents"
      onOutsideClick={() => setOpen(false)}
    >
      <div
        tabIndex={0}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen(true)}
        className="border-[1px] p-1 flex flex-col cursor-pointer"
      >
        <h4 className="uppercase flex gap-1 items-center text-sm font-semibold text-deep_blue">
          {label}{" "}
          <span className="text-lg">
            <RiArrowDownSFill />
          </span>
        </h4>
        {!overlay && open && (
          <OutsideClickHandler
            display="contents"
            onOutsideClick={() => setOpen(false)}
          >
            <span className="absolute  w-full top-[22%] -left-0">
              {children}
            </span>
          </OutsideClickHandler>
        )}
        {overlay && open && (
          <div className="absolute left-0 top-[0%] w-full justify-center flex p-3  bg-black/10 h-full">
            <OutsideClickHandler
              display="contents"
              onOutsideClick={() => setOpen(false)}
            >
              <span
                className="w-[80%] absolute top-[25%] bg-white h-fit py-3 p-2
            "
              >
                {children}
              </span>
            </OutsideClickHandler>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default TagLikeOption;
