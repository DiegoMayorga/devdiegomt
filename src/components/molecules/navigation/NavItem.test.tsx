// Configuration
import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

// Components
import NavItem from "./NavItem";

// Styles
import classes from "../../organisms/navigation/MainNavigation.module.scss";

describe("NavItem component", () => {
  test("renders a navigation item with the correct text", () => {
    render(
      <MemoryRouter>
        <NavItem to="/about-me">About</NavItem>
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /about/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about-me");
  });

  test("applies active class when route matches", () => {
    render(
      <MemoryRouter initialEntries={["/about-me"]}>
        <NavItem to="/about-me">About</NavItem>
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /about/i });

    expect(link).toHaveClass(classes.active);
  });

  test("renders motion div indicator when active", () => {
    render(
      <MemoryRouter initialEntries={["/about-me"]}>
        <NavItem to="/about-me">About</NavItem>
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /about/i });
    expect(link).toHaveClass(classes.active);

    const indicator = screen.getByTestId("tab-indicator");
    expect(indicator).toBeInTheDocument();
  });

  test("does not render motion div indicator when not active", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavItem to="/about-me">About</NavItem>
      </MemoryRouter>
    );

    const indicator = screen.queryByTestId("tab-indicator");
    expect(indicator).not.toBeInTheDocument();
  });

  test("respects the 'end' prop: active whene exact match", () => {
    render(
      <MemoryRouter initialEntries={["/about-me"]}>
        <NavItem to="/about-me" end>
          About
        </NavItem>
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /about/i });
    expect(link).toHaveClass(classes.active);
  });

  test("respects the 'end' prop: not active when route longer", () => {
    render(
      <MemoryRouter initialEntries={["/about-me/details"]}>
        <NavItem to="/about-me" end>
          About
        </NavItem>
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /about/i });
    expect(link).not.toHaveClass(classes.active);
  });
});
