import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../app/store";
// @ts-ignore
import {LocalStorageMock} from "@react-mock/localstorage";

import Favourite from "./index";

const renderComponent = (props: any) =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <LocalStorageMock items={{}}>
          <Favourite {...props} />
        </LocalStorageMock>
      </Provider>
    </BrowserRouter>
  );

test("renders a favourite car", () => {
  renderComponent({isFavourite: false});

  expect(screen.getByTestId("favourite-button")).toBeInTheDocument();
  expect(screen.getByText("Save")).toBeInTheDocument();
  expect(screen.queryByText("Unsave"))?.not.toBeInTheDocument();
});

test("renders a not favourite car", () => {
  renderComponent({isFavourite: true});

  expect(screen.getByTestId("favourite-button")).toBeInTheDocument();
  expect(screen.getByText("Unsave")).toBeInTheDocument();
  expect(screen.queryByText("Save"))?.not.toBeInTheDocument();
});
