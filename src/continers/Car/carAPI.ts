import {CarModel} from "../Cars/models";

const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchCar = async (stockNumber: number) => {
  const resp = await fetch(`${BASE_URL}/api/cars/${stockNumber}`);
  const data = await resp.json();
  return data.car as CarModel;
};
