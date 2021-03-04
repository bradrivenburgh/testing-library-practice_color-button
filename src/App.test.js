import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button operates correctly, changing colors / text when clicked", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("check checkbox and button initial state", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole('checkbox');

  // check that checkbox starts out unchecked
  expect(checkbox).not.toBeChecked();
  // check that button starts out enabled
  expect(colorButton).toBeEnabled();
});

test("checkbox disables button when checked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole('checkbox');

  // Disable button with checkbox
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  // Enable button with checkbox
  fireEvent.click(checkbox); 
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});


