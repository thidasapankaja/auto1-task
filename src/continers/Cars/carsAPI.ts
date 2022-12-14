import {CarsResponse} from "./models";

const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchCars = async (page: string, query: string) => {
  const resp = await fetch(`${BASE_URL}/api/cars?page=${page}${query}`);
  const data = await resp.json();
  return data as CarsResponse;
};

export const fetchColors = async () => {
  const resp = await fetch(`${BASE_URL}/api/colors`);
  const data = await resp.json();
  return data;
};

export const fetchManufacturers = async () => {
  const resp = await fetch(`${BASE_URL}/api/manufacturers`);
  const data = await resp.json();
  return data;
};
