import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  const mockProps = {
    image: "/project-image.png",
    title: "Sample Project",
    description: "This is a sample project.",
    stack: ["React", "TypeScript"],
    demoUrl: "https://example.com",
    repoUrls: [{ label: "Code", url: "https://github.com/example/repo" }],
  };

  test("renders project title, description and cover image", () => {
    render(<ProjectCard {...mockProps} />);

    expect(
      screen.getByRole("heading", { name: /sample project/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/this is a sample project\./i)).toBeInTheDocument();
    expect(screen.getByAltText(/sample project screenshot/i)).toHaveAttribute(
      "src",
      mockProps.image
    );
  });

  test("renders every stack chip", () => {
    render(<ProjectCard {...mockProps} />);

    for (const tech of mockProps.stack) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }
  });

  test("renders demo and repo links with correct href and security attributes", () => {
    render(<ProjectCard {...mockProps} />);

    const demo = screen.getByRole("link", { name: /live demo/i });
    const repo = screen.getByRole("link", { name: /code/i });

    expect(demo).toHaveAttribute("href", mockProps.demoUrl);
    expect(repo).toHaveAttribute("href", mockProps.repoUrls[0].url);
    for (const link of [demo, repo]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  test("hides the links row when there is no demo or repo URL", () => {
    render(<ProjectCard {...mockProps} demoUrl="" repoUrls={[]} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  test("renders only the demo link when repo is missing", () => {
    render(<ProjectCard {...mockProps} repoUrls={[]} />);
    expect(screen.getByRole("link", { name: /live demo/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /code/i })
    ).not.toBeInTheDocument();
  });
});
