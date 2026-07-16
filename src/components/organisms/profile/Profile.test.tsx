import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Profile from "./Profile";

describe("Profile component", () => {
  test("renders the Experience, Education and Certifications sections", () => {
    render(<Profile />);
    expect(
      screen.getByRole("heading", { name: /experience/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /education/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /certifications/i })
    ).toBeInTheDocument();
  });

  test("renders every experience role from the config", () => {
    render(<Profile />);
    expect(screen.getByText(/bilingual it teacher/i)).toBeInTheDocument();
    expect(
      screen.getByText(/web & mobile development intern/i)
    ).toBeInTheDocument();
  });
});
