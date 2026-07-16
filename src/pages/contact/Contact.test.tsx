import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ContactPage from "./Contact";

const mocks = vi.hoisted(() => ({
  state: {
    succeeded: false,
    submitting: false,
    errors: null as unknown,
  },
}));

vi.mock("@formspree/react", () => ({
  useForm: () => [mocks.state, vi.fn()],
  ValidationError: () => null,
}));

describe("Contact component", () => {
  beforeEach(() => {
    mocks.state = { succeeded: false, submitting: false, errors: null };
  });

  test("renders the Contact heading", () => {
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
  });

  test("renders all form fields as required", () => {
    render(<ContactPage />);

    expect(screen.getByLabelText(/name/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/message/i)).toBeRequired();
  });

  test("send button is enabled when the form is not submitting", () => {
    render(<ContactPage />);
    expect(screen.getByRole("button", { name: /send message/i })).toBeEnabled();
  });

  test("send button is disabled while submitting", () => {
    mocks.state = { succeeded: false, submitting: true, errors: null };
    render(<ContactPage />);
    expect(screen.getByRole("button", { name: /send message/i })).toBeDisabled();
  });

  test("shows a success message after the form is submitted", () => {
    mocks.state = { succeeded: true, submitting: false, errors: null };
    render(<ContactPage />);
    expect(screen.getByText(/thanks for your message/i)).toBeInTheDocument();
  });
});
