import BookmarkedCard from "@/components/bookmarked-card/bookmarkedCard";
import Caro from "@/components/caro/caro";
import Category from "@/components/category/category";
import ChartVideoCard from "@/components/chartVideoCard/chartVideoCard";
import Card from "@/components/continue-watching-card/card";
import LargeScreenHome from "@/components/largeScreenHome/largeScreen";
import MainLayout from "@/components/mainLayout/mainLayout";
import NewReleaseCard from "@/components/new-release-card/card";
import PicksCard from "@/components/picks-card";
import RecommendedCard from "@/components/recommended-card";
import SmallHomeScreen from "@/components/smallScreenHome/smallScreenHome";
import { CW } from "@/utils/simData";
import Head from "next/head";
import { useState } from "react";
import Slider from "react-slick";
const colors = [
  "after:bg-[red]",
  "after:bg-[yellow]",
  "after:bg-[green]",
  "after:bg-[blue]",
  "after:bg-[purple]",
  "after:bg-[white]",
];

export default function Home() {
  const [activeCaro, setActiveCaro] = useState(0);
  // settings for caro
  const settings = {
    customPaging: (index: number) => {
      return (
        <span
          className={` mt-2 mx-2 block h-[10px]  rounded-md ${
            activeCaro === index ? "bg-main_blue w-[25px]" : "bg-grey w-[20px]"
          }`}
        ></span>
      );
    },
    afterChange: (current: number) => setActiveCaro(current),
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
  };
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <MainLayout>
        <LargeScreenHome />
        <SmallHomeScreen />
        <Category label={"charts"}>
          {colors.map((color) => {
            return (
              <ChartVideoCard label={"charts"} color={color} key={color} />
            );
          })}
        </Category>

        <Category label={"CONTINUE WATCHING"}>
          {CW.map(({ image, ...rest }) => {
            return <Card key={image} image={image} {...rest} />;
          })}
        </Category>

        <Category label={"Bookmarked"}>
          {CW.map(({ label, ...rest }) => {
            return <BookmarkedCard key={label} {...rest} />;
          })}
        </Category>

        <Category scrollable={false} label="Featured">
          <Slider {...settings}>
            {CW.map(({ label, ...rest }) => (
              <Caro key={label} {...rest} />
            ))}
          </Slider>
        </Category>

        <Category label={"New Release"}>
          {CW.map(({ label, ...rest }) => {
            return <NewReleaseCard key={label} {...rest} />;
          })}
        </Category>

        <Category label={"Picks"}>
          {CW.map(({ label, ...rest }) => {
            return <PicksCard label={label} {...rest} key={label} />;
          })}
        </Category>

        <Category label={"Recommend"}>
          {CW.map(({ image, ...rest }) => {
            return <RecommendedCard image={image} {...rest} key={image} />;
          })}
        </Category>
      </MainLayout>
    </>
  );
}
