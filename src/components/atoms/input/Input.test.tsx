import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Input from "./Input";

describe("Input Component", () => {
  test("renders an input field with the correct label", () => {
    render(<Input label="Username" name="username" type="text" />);
    const input = screen.getByLabelText("Username");
    
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  test("renders a textarea when 'textarea' prop is true", () => {
    render(<Input label="Message" name="message" textarea />);
    const textarea = screen.getByLabelText("Message");

    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName.toLowerCase()).toBe("textarea");
  });

  test("input and textarea should be disabled when 'disabled' prop is set", () => {
    render(<Input label="Email" name="email" type="email" disabled />);
    const input = screen.getByLabelText("Email");

    expect(input).toBeDisabled();
  });

  test("input should have the correct placeholder", () => {
    render(<Input label="Full Name" name="fullName" type="text" />);
    const input = screen.getByPlaceholderText("Full Name");

    expect(input).toBeInTheDocument();
  });

  test("renders input with correct type", () => {
    render(<Input label="Password" name="password" type="password" />);
    const input = screen.getByLabelText("Password");

    expect(input).toHaveAttribute("type", "password");
  });

  test("textarea does not have a type attribute", () => {
    render(<Input label="Comments" name="comments" textarea />);
    const textarea = screen.getByLabelText("Comments");

    expect(textarea).not.toHaveAttribute("type");
  });

  test("input is required when 'disabled' is false", () => {
    render(<Input label="Phone" name="phone" type="tel" />);
    const input = screen.getByLabelText("Phone");

    expect(input).toBeRequired();
  });

  test("input is not required when 'disabled' is true", () => {
    render(<Input label="Age" name="age" type="number" disabled />);
    const input = screen.getByLabelText("Age");

    expect(input).not.toBeRequired();
  });
});

