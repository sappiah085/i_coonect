import JoinCard from "../joinCard/joincard";
import first from "../../public/assets/first.svg";
import two from "../../public/assets/two.svg";
import three from "../../public/assets/three.svg";
import four from "../../public/assets/four.svg";
import { useEffect } from "react";
import Link from "next/link";
const illus = [
  {
    image: first,
    text: "WATCH AND CREATE MOVIES. SERIES AND SHORT FILMS.",
  },
  {
    image: two,
    text: "COLLABORATE WITH FRIENDS TO CREATE THE PERFECT STORY.",
  },
  {
    image: three,
    text: "DISRUPT THE WORLD BY MAKING THEM HEAR YOUR VOICE, YOUR SIDE OF THE STORY.",
  },
  {
    image: four,
    text: "KICK BACK AND RELAX, ONCE IN A WHILE YOU HAVE TO LET GO.",
  },
];
export default function Join() {
  useEffect(() => {}, []);
  return (
    <section className="w-full flex flex-col h-full justify-between lg:px-20   gap-16 py-14">
      <h1 className="lg:text-4xl text-3xl px-8 md:px-0 font-extrabold text-grey">
        <span className="text-deep_blue">JOIN</span> FOR{" "}
        <span className="text-deep_blue">FREE</span> <br />{" "}
        <span className="inline-block text-2xl lg:text-3xl pt-2">
          at <span className="text-deep_blue">no cost</span>{" "}
        </span>
      </h1>
      <div className="flex font-Montserrat snap-x items-center gap-7 w-full overflow-x-auto overscroll-x-contain px-3 md:px-0 join_card">
        {illus.map((illus_card) => (
          <JoinCard {...illus_card} key={illus_card.text} />
        ))}
      </div>
      <Link
        href={"/sign-up"}
        className="bg-light_green border-[2px] border-light_green  max-w-[250px] text-white font-semibold p-5 py-2 rounded-lg self-center hover:bg-white hover:text-light_green transition-all duration-150"
      >
        SIGN UP
      </Link>
    </section>
  );
}
