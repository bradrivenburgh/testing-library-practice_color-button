import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button operates correctly, changing colors / text when clicked", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to MidnightBlue'
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button text be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
});

test("check checkbox and button initial state", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  const checkbox = screen.getByRole("checkbox");

  // check that checkbox starts out unchecked
  expect(checkbox).not.toBeChecked();
  // check that button starts out enabled
  expect(colorButton).toBeEnabled();
});

test("checkbox disables button when checked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  //const checkbox = screen.getByLabelText('disable');
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  // Disable button with checkbox
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  // Enable button with checkbox
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test("disabled button turns gray; reverts back to MediumVioletRed", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // Disable button and check if it is gray
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  //Enable button and check that the color is MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("disabled button is gray; reverts to MidnightBlue", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // Change the button color to MidnightBlue; disable and check if it is gray
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});
