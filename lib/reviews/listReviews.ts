import { ReviewProps } from "@Types";
import { readdirSync } from "fs";
import { join } from "path";
import getReview from "./getReview";

const listReviews: () => ReviewProps[] = () => {
  const listData: ReviewProps[] = [];
  const listReviews = readdirSync(join(process.cwd(), "/content/reviews"));
  const slugs = listReviews
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.split(".md")[0]);

  slugs.forEach((slug) => listData.push(getReview(slug)));
  listData.sort((a, b) => b.date.localeCompare(a.date));
  return listData;
};

export default listReviews;
