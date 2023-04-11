import FeatureCard from "../featureCard/featureCard";
import Tag from "../tags/tag";
import feature from "@/public/assets/feature/image.png";
import feature0 from "@/public/assets/feature/feature0.jpeg";
import feature1 from "@/public/assets/feature/feature1.jpeg";
export default function LargeScreenHome() {
  return (
    <section className="w-full hidden xl:flex flex-col p-2 ">
      <Tag />
      <div className="w-full py-6 grid grid-cols-4  gap-2">
        <div className="row-start-1 h-[25rem]  col-start-1 col-span-2">
          <FeatureCard
            header="The End of Nowhere"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada amet accumsan dolor orci, at. In sociis arcu turpis enim sem ultricies maecenas adipiscing. "
            image={feature}
            bookmarked
          />
        </div>
        <div className="row-start-1 h-[25rem]  col-start-3 ">
          <FeatureCard header="The End of Nowhere" image={feature0} />
        </div>
        <div className="row-start-1 h-[25rem] col-start-4">
          <FeatureCard
            header="The End of Nowhere"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada amet accumsan dolor orci, at. In sociis arcu turpis enim sem ultricies maecenas adipiscing. "
            image={feature1}
          />
        </div>
      </div>
    </section>
  );
}
