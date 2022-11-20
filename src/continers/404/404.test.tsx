import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Logo from "./index";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Logo />
    </BrowserRouter>
  );

  expect(screen.getByAltText(/auto1 logo/i)).toBeInTheDocument();
});
