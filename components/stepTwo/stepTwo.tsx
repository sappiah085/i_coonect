import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const sampleTags = [
  "Ants",
  "Animals",
  "Boss",
  "Cars",
  "NFL",
  "Sex",
  "X Box",
  "Technology",
  "PS4",
  "Cristiano Ronaldo",
  "Football",
  "Government",
  "Home Skills",
  "DIY",
  "Railways",
  "Winter",
];
export default function StepTwo({ handleNext }: any) {
  const container = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".like", 1, { opacity: 0, y: 10 }, { opacity: 1, y: 0 });
    }, container);
  }, []);
  return (
    <section
      ref={container}
      className="flex items-center gap-8 flex-col w-full m-auto py-4"
    >
      <div className="w-full  flex justify-around gap-5 flex-wrap">
        <div className="flex flex-col gap-5 items-center max-w-lg like">
          <h1 className="text-2xl text-center font-bold text-deep_blue">
            Likes
          </h1>
          <p className="text-purple font-medium text-center">
            Now we are at likes, choose what you would like to see while on
            connect, remember you can change it anytime
          </p>
          <input
            className="bg-grey/20 self-start w-[90%] p-2 rounded-xl outline-none border-[1px] border-white focus-within:border-purple"
            type="text"
            placeholder="Search"
          />
          <div className="w-full flex gap-3 flex-wrap">
            {sampleTags.map((tag) => (
              <button
                className="bg-main_blue/10 rounded-3xl px-4 text-main_blue p-1 border-[1px] border-main_blue/5 hover:bg-white hover:text-main_blue hover:border-main_blue"
                key={tag}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center max-w-lg like">
          <h1 className="text-2xl text-center font-bold text-deep_blue">
            Dislike
          </h1>
          <p className="text-purple font-medium  text-center">
            Now we are at likes, choose what you would like to see while on
            connect, remember you can change it anytime
          </p>
          <input
            className="bg-grey/20 self-start w-[90%] p-2 rounded-xl outline-none border-[1px] border-white focus-within:border-purple"
            type="text"
            placeholder="Search"
          />
          <div className="w-full flex gap-3 flex-wrap">
            {sampleTags.map((tag) => (
              <button
                className="bg-main_blue/10 rounded-3xl px-4 text-red p-1 border-[1px] border-main_blue/5 hover:bg-white hover:text-red hover:border-red"
                key={tag}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex max-w-6xl justify-between items-center">
        <button
          onClick={() => handleNext(-1)}
          className="bg-main_blue/25 mt-5 md:mt-0 border-2 font-Open_Sans border-white w-fit  font-semibold text-main_blue text-lg py-2 px-14 rounded-3xl hover:bg-white hover:text-main_blue hover:border-main_blue"
          type="submit"
        >
          Back
        </button>
        <button
          onClick={() => handleNext(1)}
          className="bg-main_blue mt-5 md:mt-0 border-2 font-Open_Sans border-white w-fit  font-semibold text-white text-lg  py-2 px-14 rounded-3xl hover:bg-white hover:text-main_blue hover:border-main_blue"
          type="submit"
        >
          Next
        </button>
      </div>
    </section>
  );
}
