import FeatureCard from "../featureCard/featureCard";
import Search from "../search/search";
import Tag from "../tags/tag";
import feature from "@/public/assets/feature/image.png";
export default function SmallHomeScreen() {
  return (
    <section className="xl:hidden flex flex-col w-full px-2 items-center gap-5">
      <div className="w-full h-[20rem]">
        <FeatureCard
          header="The End of Nowhere"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada amet accumsan dolor orci, at. In sociis arcu turpis enim sem ultricies maecenas adipiscing. "
          image={feature}
          bookmarked
        />
      </div>
      <Tag
        pl={"w-[100%] justify-center gap-1 sticky top-[3.25rem] bg-white p-5"}
      />
      <Search show={"flex xl:hidden w-full"} />
    </section>
  );
}
