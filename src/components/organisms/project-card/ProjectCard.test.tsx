import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  const mockProps = {
    image: "/project-image.png",
    title: "Sample Project",
    description: "This is a sample project.",
    technologies: [
      {
        id: "react",
        name: "React",
        logo: "/react-logo.png",
        title: "React Library",
      },
      {
        id: "typescript",
        name: "TypeScript",
        logo: "/ts-logo.png",
        title: "TypeScript Language",
      },
    ],
    link: "https://example.com",
  };

  test("renders project title, description and image", () => {
    render(<ProjectCard {...mockProps} />);

    expect(
      screen.getByRole("heading", { name: /sample project/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/this is a sample project\./i)).toBeInTheDocument();
    expect(screen.getByAltText(/sample project/i)).toHaveAttribute(
      "src",
      mockProps.image
    );
  });

  test("renders all technology logos", () => {
    render(<ProjectCard {...mockProps} />);

    mockProps.technologies.forEach((tech) => {
      const techImg = screen.getByAltText(tech.name);
      expect(techImg).toBeInTheDocument();
      expect(techImg).toHaveAttribute("src", tech.logo);
      expect(techImg).toHaveAttribute("title", tech.title);
    });
  });

  test("renders link with correct href and security attributes", () => {
    render(<ProjectCard {...mockProps} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockProps.link);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
