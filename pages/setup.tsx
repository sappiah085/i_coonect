import Image from "next/image";
import logo from "../public/assets/icons/connect.svg";
import StepOne from "@/components/stepOne/stepOne";
import { useState } from "react";
import StepTwo from "@/components/stepTwo/stepTwo";
import StepThree from "@/components/stepThree/stepThree";
import Finish from "@/components/finish/finish";
const tabs = ["intro", "Preferences", "How good?", "Here we go"];
export default function Steps() {
  const [index, setIndex] = useState(0);
  function handleNext(arg: number) {
    const next = index + arg;
    setIndex(next);
  }
  return (
    <main className="w-full min-h-screen flex flex-col  font-Montserrat items-center px-4">
      <header className="w-full flex items-center py-5 z-10 ">
        <nav className="w-full items-center">
          <Image className="h-5" src={logo} alt="logo" />
        </nav>
      </header>
      <div className="w-full max-w-md flex items-center gap-4">
        {tabs.map((label, id) => (
          <div key={label} className="flex flex-col gap-2 ">
            <button
              onClick={() => setIndex(id)}
              className={
                id === index
                  ? "rounded-lg h-[9px] bg-main_blue "
                  : "rounded-lg h-[9px] bg-grey "
              }
            >
              {""}
            </button>
            <h2
              className={
                id === index
                  ? " text-main_blue font-medium capitalize text-sm"
                  : " text-grey font-medium capitalize text-sm"
              }
            >
              {label}
            </h2>
          </div>
        ))}
      </div>
      {index === 0 && <StepOne handleNext={handleNext} />}
      {index === 1 && <StepTwo handleNext={handleNext} />}
      {index === 2 && <StepThree handleNext={handleNext} />}
      {index === 3 && <Finish handleNext={handleNext} />}
    </main>
  );
}
