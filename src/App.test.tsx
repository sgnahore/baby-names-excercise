import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./sexArrangement";

test("renders greeting", () => {
  render(<App />);
  const soughtElement = screen.getByText(/Hello, World!/i);
  expect(soughtElement).toBeInTheDocument();
});
