import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Social from "./Social";

const mockSocial = {
  id: "github",
  image: "/github-icon.png",
  alt: "Github Icon",
  href: "https://github.com/user",
};

describe("Social Component", () => {
  test("renders the social link with correct href, image src and alt", () => {
    render(<Social className="custom-class" social={mockSocial} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockSocial.href);

    const image = screen.getByRole("img", { name: mockSocial.alt });
    expect(image).toHaveAttribute("src", mockSocial.image);
    expect(image).toHaveAttribute("alt", mockSocial.alt);

    const motionDiv = link.closest("div");
    expect(motionDiv).toHaveClass("custom-class");
  });

  test("matches snapshot", () => {
    const { container } = render(
      <Social className="custom-class" social={mockSocial} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
