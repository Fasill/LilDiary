import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WhyUs from "../components/subComponents/WhyUs";

describe("WhyUs", () => {
  it("renders the headline", () => {
    render(<WhyUs />);
    expect(
      screen.getByRole("heading", { name: /why lildiary/i }),
    ).toBeInTheDocument();
  });

  it("renders as a single heading", () => {
    render(<WhyUs />);
    const headings = screen.getAllByRole("heading");
    expect(headings).toHaveLength(1);
  });
});
