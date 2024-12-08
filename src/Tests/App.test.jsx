import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../Components/App";

describe("Test App.jsx", () => {
  it("Expect true to be true", () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
