import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

test("renders Home component with title", () => {
  jest.useFakeTimers();
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  act(() => {
    jest.runAllTimers();
  });
  const titleElement = screen.getByText("Bank");
  expect(titleElement).toBeInTheDocument();
});
