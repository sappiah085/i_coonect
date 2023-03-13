import FeatureCard from "../featureCard/featureCard";
import Tag from "../tags/tag";

export default function LargeScreenHome() {
  return (
    <section className="w-full hidden xl:flex flex-col p-2 ">
      <Tag />
      <div className="w-full py-6 grid grid-cols-4  gap-2">
        <div className="row-start-1 h-[25rem]  col-start-1 col-span-2">
          <FeatureCard />
        </div>
        <div className="row-start-1 h-[25rem]  col-start-3 ">
          <FeatureCard />
        </div>
        <div className="row-start-1 h-[25rem] col-start-4">
          <FeatureCard />
        </div>
      </div>
    </section>
  );
}
