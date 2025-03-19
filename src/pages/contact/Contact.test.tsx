import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import ContactPage from "./Contact";

describe("Contact component", () => {
  test("renders the Contact heading", () => {
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
  });

  test("renders the disabled message", () => {
    render(<ContactPage />);
    expect(
      screen.getByText(/disabled\. send me an email\./i)
    ).toBeInTheDocument();
  });

  test("renders all input fields as disabled", () => {
    render(<ContactPage />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    expect(nameInput).toBeDisabled();
    expect(emailInput).toBeDisabled();
    expect(messageInput).toBeDisabled();
  });

  test("renders the submit button as disabled", () => {
    render(<ContactPage />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });
});
