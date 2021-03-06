import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText("Checkout Form");
  expect(header);
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const checkoutButton = screen.getByTestId("checkoutbtn");
  fireEvent.click(checkoutButton);
  const successMessage = screen.getByTestId("successMessage");
  expect(successMessage);
});
