import CardItem from "@Components/CardItem";
import Heading from "@Components/Heading";
import { ReviewLoading } from "@Components/ReviewLoading";
import listReviews from "@Lib/reviews/listReviews";
import { ListSlugs } from "@Lib/reviews/listSlugs";
import { Metadata } from "next/types";
import React from "react";

// Help to update head tag
export const metadata: Metadata = {
  title: "Reviews",
};

// Help build static page with slugs exist
export const generateStaticParams = () => {
  const listSlugs = ListSlugs();
  return listSlugs;
};

const ReviewsPage: React.FC = () => {
  const data = listReviews();
  return (
    <>
      <Heading>Reviews Page</Heading>
      <p className="pb-3">Only best games, reviewed for you</p>
      <nav>
        <ul className="flex flex-row flex-wrap gap-6">
          {data && data.length ? (
            data.map((e) => (
              <CardItem
                children={e.title}
                href={`/reviews/${e.slug}`}
                imageUrl={e.image}
                imageAlt={e.slug}
                key={e.slug}
              />
            ))
          ) : (
            <ReviewLoading />
          )}
        </ul>
      </nav>
    </>
  );
};

export default ReviewsPage;
