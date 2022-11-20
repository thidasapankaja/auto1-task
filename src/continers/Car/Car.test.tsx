import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../app/store";
// @ts-ignore
import {LocalStorageMock} from "@react-mock/localstorage";

import Car from "./index";

const sampleCar = {
  stockNumber: 10294,
  manufacturerName: "Porsche",
  modelName: "968",
  color: "red",
  mileage: {
    number: 135827,
    unit: "km",
  },
  fuelType: "Diesel",
  pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
};

const renderComponent = () =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <LocalStorageMock items={{}}>
          <Car />
        </LocalStorageMock>
      </Provider>
    </BrowserRouter>
  );

test("renders favourite text", () => {
  renderComponent();

  expect(
    screen.getByText(
      /This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definite and may change due to bad weather conditions/i
    )
  ).toBeInTheDocument();
});

describe("on save as favourite", () => {
  it("saves the car to localstorage", async () => {
    const favouriteCars: any = {};

    favouriteCars[sampleCar.stockNumber] = sampleCar;
    await localStorage.setItem("favourites", JSON.stringify(favouriteCars));

    const updatedLocalStorage =
      (await JSON.parse(localStorage.getItem("favourites") || "{}")) || {};

    expect(Object.keys(updatedLocalStorage)).toEqual([
      `${sampleCar.stockNumber}`,
    ]);
  });
});
