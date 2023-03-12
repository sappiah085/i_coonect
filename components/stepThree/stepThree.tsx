import Image from "next/image";
import blogging from "../../public/assets/blogging.png";
import vlogging from "../../public/assets/vlogging.png";
import messaging from "../../public/assets/messaging.png";
import four from "../../public/assets/four.svg";
export default function StepThree({ handleNext }: any) {
  return (
    <section className="flex flex-col w-full items-center font-Montserrat text-deep_blue font-bold m-auto gap-10 py-3">
      <div className="lg:grid grid-cols-4 grid-rows-3 gap-5 flex overflow-x-scroll items-center snap-x">
        <div className="uppercase flex flex-col items-center row-start-1 row-span-2 max-w-sm flex-shrink-0 snap-center">
          <Image src={blogging} alt="blog" />
          <h3>Blogging</h3>
        </div>
        <div className="uppercase lg:mt-16 flex flex-col items-center row-start-2 col-start-2 row-span-2 w-full max-w-sm flex-shrink-0 snap-center">
          <Image src={vlogging} alt="blog" />
          <h3>Vlogging</h3>
        </div>
        <div className="uppercase flex flex-col items-center col-start-3 row-start-1 row-span-2 max-w-sm flex-shrink-0 snap-center">
          <Image src={four} alt="blog" />
          <h3>E-WALLET</h3>
        </div>
        <div className="uppercase flex flex-col items-center row-start-2 col-start-4 row-span-2 max-w-sm flex-shrink-0 snap-center">
          <Image src={messaging} alt="blog" />
          <h3>MESSAGING</h3>
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
