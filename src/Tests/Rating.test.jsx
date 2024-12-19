import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import Rating from "../Components/Rating";

it("Renders Rating.jsx correctly", () => {
  expect(true).toBe(true);

  const rating = { rate: 4.9, count: 1000 };

  const { container } = render(<Rating rating={rating} />);
  expect(container).toMatchSnapshot();
});
