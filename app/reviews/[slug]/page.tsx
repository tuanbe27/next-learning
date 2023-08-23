import Heading from "@Components/Heading";
import React from "react";
import getReview from "@Lib/reviews/getReview";
import { ReviewProps } from "@Types";
import NotFoundSite from "app/not-found";
import SharedLinkButton from "@Components/SharedLinkButton";

interface Props {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}

export async function generateStaticParams() {
  return [
    { slug: "diablo-iv" },
    { slug: "hollow-knight" },
    { slug: "stardew-valley" },
  ];
}

export const generateMetadata = (props: Props) => {
  const { slug } = props.params;
  const review = getReview<ReviewProps>(slug);
  return {
    title: review.title,
  };
};

const ReviewPage: React.FC = (props: Props) => {
  const { slug } = props.params;

  console.log("[ReviewPage] rendering with slug", slug);

  const data = getReview<ReviewProps>(slug);
  if (!data) {
    return NotFoundSite();
  }
  const { title, date, image, html } = data;
  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{date}</p>
        <SharedLinkButton />
      </div>

      <img
        src={image}
        alt=""
        width="640"
        height="320"
        className="mb-2 rounded"
      />

      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
};

export default ReviewPage;
