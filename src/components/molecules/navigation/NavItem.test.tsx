import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import NavItem from "./NavItem";
import classes from "../../organisms/navigation/MainNavigation.module.scss";

// NavItem now prefixes its target with the active :lang segment, so tests
// mount it inside a /:lang route.
function renderAt(entry: string, to: string, end = false) {
  return render(
    <MemoryRouter initialEntries={[entry]}>
      <Routes>
        <Route
          path="/:lang/*"
          element={
            <NavItem to={to} end={end}>
              About
            </NavItem>
          }
        />
      </Routes>
    </MemoryRouter>
  );
}

describe("NavItem component", () => {
  test("renders a navigation item with a language-prefixed href", () => {
    renderAt("/en", "/about-me");
    const link = screen.getByRole("link", { name: /about/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/en/about-me");
  });

  test("prefixes with the active language (es)", () => {
    renderAt("/es", "/about-me");
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "/es/about-me"
    );
  });

  test("applies active class when route matches", () => {
    renderAt("/en/about-me", "/about-me");
    expect(screen.getByRole("link", { name: /about/i })).toHaveClass(
      classes.active
    );
  });

  test("renders motion div indicator when active", () => {
    renderAt("/en/about-me", "/about-me");
    expect(screen.getByTestId("tab-indicator")).toBeInTheDocument();
  });

  test("does not render indicator when not active", () => {
    renderAt("/en/home", "/about-me");
    expect(screen.queryByTestId("tab-indicator")).not.toBeInTheDocument();
  });

  test("respects the 'end' prop: active on exact match", () => {
    renderAt("/en/about-me", "/about-me", true);
    expect(screen.getByRole("link", { name: /about/i })).toHaveClass(
      classes.active
    );
  });

  test("respects the 'end' prop: not active when route longer", () => {
    renderAt("/en/about-me/details", "/about-me", true);
    expect(screen.getByRole("link", { name: /about/i })).not.toHaveClass(
      classes.active
    );
  });
});
