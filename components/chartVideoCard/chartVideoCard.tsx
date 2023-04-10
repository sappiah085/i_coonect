import Image from "next/image";
import image from "../../public/assets/image.png";
export default function ChartVideoCard({
  label,
  color,
}: {
  color: string;
  label: string;
}) {
  return (
    <article className="snap-center font-Montserrat relative w-[250px] flex-shrink-0 h-[200px] after:absolute cursor-pointer after:top-0 after:left-0 after:h-full after:w-full after:bg-black/25 rounded-md overflow-hidden flex flex-col ">
      <Image className="absolute h-full w-full" src={image} alt="card image" />
      <span className="p-5 z-[1] w-full  h-full flex flex-col gap-2">
        <h2
          className={`uppercase font-bold text-white after:absolute relative after:h-full after:w-[3px] after:rounded-xl  after:left-0 pl-2 ${color}`}
        >
          {label}
        </h2>
        <h4 className="text-white font-medium flex gap-2">
          <span>25 hrs</span>
          <span>Action</span>
          <span>2025</span>
        </h4>
        <h5 className="text-white">94%</h5>
      </span>
      <h3 className="text-grey text-sm z-[1] mx-auto font-semibold pb-1">Promotions Included</h3>
    </article>
  );
}
