import CardItem from "@Components/CardItem";
import Heading from "@Components/Heading";
import { getFeatureReview } from "@Lib/reviews/getFeatureReview";
import { ReviewProps } from "@Types";
import React from "react";

const HomePage: React.FC = () => {
  console.log("[HomePage] is rendering");
  const featureReview: ReviewProps = getFeatureReview();

  return (
    <>
      <Heading>Game Reviewed</Heading>
      <p>New relate</p>
      <CardItem
        children={featureReview.title}
        href={`/reviews/${featureReview.slug}`}
        imageUrl={featureReview.image}
      />
    </>
  );
};

export default HomePage;
