import { screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ProjectCard from "./ProjectCard";
import { renderWithProviders } from "../../../test-utils";
import type { Project } from "../../../config/projects";

const mockProject: Project = {
  id: "sample",
  title: "Sample Project",
  description: {
    en: "This is a sample project.",
    es: "Este es un proyecto de ejemplo.",
  },
  stack: ["React", "TypeScript"],
  image: "/project-image.png",
  demoUrl: "https://example.com",
  repoUrls: [{ label: "Code", url: "https://github.com/example/repo" }],
};

describe("ProjectCard", () => {
  test("renders title, localized description and cover image", () => {
    renderWithProviders(<ProjectCard project={mockProject} />);

    expect(
      screen.getByRole("heading", { name: /sample project/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/this is a sample project\./i)).toBeInTheDocument();
    expect(screen.getByAltText(/sample project screenshot/i)).toHaveAttribute(
      "src",
      mockProject.image
    );
  });

  test("renders the Spanish description under /es", () => {
    renderWithProviders(<ProjectCard project={mockProject} />, { lang: "es" });
    expect(
      screen.getByText(/este es un proyecto de ejemplo\./i)
    ).toBeInTheDocument();
  });

  test("renders every stack chip", () => {
    renderWithProviders(<ProjectCard project={mockProject} />);
    for (const tech of mockProject.stack) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }
  });

  test("renders demo and repo links with security attributes", () => {
    renderWithProviders(<ProjectCard project={mockProject} />);

    const demo = screen.getByRole("link", { name: /live demo/i });
    const repo = screen.getByRole("link", { name: /code/i });

    expect(demo).toHaveAttribute("href", mockProject.demoUrl);
    expect(repo).toHaveAttribute("href", mockProject.repoUrls[0].url);
    for (const link of [demo, repo]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  test("hides the links row when there is no demo or repo", () => {
    renderWithProviders(
      <ProjectCard
        project={{ ...mockProject, demoUrl: "", repoUrls: [] }}
      />
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  test("renders only the demo link when repo is missing", () => {
    renderWithProviders(
      <ProjectCard project={{ ...mockProject, repoUrls: [] }} />
    );
    expect(screen.getByRole("link", { name: /live demo/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /code/i })
    ).not.toBeInTheDocument();
  });
});
