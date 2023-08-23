import listReviews from "@Lib/reviews/listReviews";
import { ReviewProps } from "@Types";

export const getFeatureReview: () => ReviewProps = () => {
  const featureReview = listReviews();
  return featureReview[0];
};
