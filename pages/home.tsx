import Category from "@/components/category/category";
import ChartVideoCard from "@/components/chartVideoCard/chartVideoCard";
import LargeScreenHome from "@/components/largeScreenHome/largeScreen";
import MainLayout from "@/components/mainLayout/mainLayout";
import SmallHomeScreen from "@/components/smallScreenHome/smallScreenHome";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <MainLayout>
        <LargeScreenHome />
        <SmallHomeScreen />
        {[
          "charts",
          "Bookmarked",
          "Featured",
          "New Release",
          "Picks",
          "Recommend",
        ].map((label) => (
          <Category key={label} label={label}>
            {["red", "yellow", "green", "blue", "purple", "white"].map(
              (label) => {
                const color = `after:bg-[${label}]`;
                return (
                  <ChartVideoCard label={label} color={color} key={label} />
                );
              }
            )}
          </Category>
        ))}
      </MainLayout>
    </>
  );
}
