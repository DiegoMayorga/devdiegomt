import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Profile from "./Profile";

describe("Profile component", () => {
  test("renders the Profile heading", () => {
    render(<Profile />);
    expect(
      screen.getByRole("heading", { name: /professional profile/i })
    ).toBeInTheDocument();
  });
});
