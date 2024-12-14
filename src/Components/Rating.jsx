import { Star } from "lucide-react";
import StyledRating from "./Styles/StyledRating";

export default function Rating({ rating }) {
  return (
    <StyledRating>
      <Star strokeWidth={1} size="16" fill="yellow" />
      <p>{rating.rate}/5</p>
      <p style={{ fontSize: "12px" }}>{`(${rating.count} reviews)`}</p>
    </StyledRating>
  );
}
