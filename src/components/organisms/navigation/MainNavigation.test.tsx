import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import MainNavigation from "./MainNavigation";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../../config/social-images", () => ({
  SOCIAL_IMAGES: [
    {
      id: "github",
      image: "/github.png",
      alt: "GitHub",
      href: "https://github.com",
    },
    {
      id: "linkedin",
      image: "/linkedin.png",
      alt: "LinkedIn",
      href: "https://linkedin.com",
    },
  ],
}));

vi.mock("../../../config/navigation", () => ({
  NAV_ITEMS: [
    { to: "/about", text: "About", end: true },
    { to: "/projects", text: "Projects", end: false },
  ],
}));

vi.mock("../../molecules/social/Social", () => {
  return {
    default: (props: { social: { id: string; alt: string } }) => (
      <div data-testid={`social-${props.social.id}`}>{props.social.alt}</div>
    ),
  };
});

vi.mock("../../molecules/navigation/NavItem", () => {
  return {
    default: (props: { to: string; children: string }) => (
      <div data-testid={`navitem-${props.to}`}>{props.children}</div>
    ),
  };
});

describe("MainNavigation", () => {
  test("renders profile image, name and handle", () => {
    render(
      <MemoryRouter>
        <MainNavigation />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/profile image/i)).toHaveAttribute(
      "src",
      expect.stringContaining("profile.png")
    );
    expect(
      screen.getByRole("heading", { name: /Diego Mayorga Torres/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/@devdiegomt/i)).toBeInTheDocument();
  });

  test("renders all social icons", () => {
    render(
      <MemoryRouter>
        <MainNavigation />
      </MemoryRouter>
    );

    expect(screen.getByTestId("social-github")).toBeInTheDocument();
    expect(screen.getByTestId("social-linkedin")).toBeInTheDocument();
  });

  test("renders all navigation items", () => {
    render(
      <MemoryRouter>
        <MainNavigation />
      </MemoryRouter>
    );

    expect(screen.getByTestId("navitem-/about")).toBeInTheDocument();
    expect(screen.getByTestId("navitem-/projects")).toBeInTheDocument();
  });
});
