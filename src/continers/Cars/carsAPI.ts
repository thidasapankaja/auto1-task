import { CarModel, CarsResponse } from "./models";

const BASE_URL = "https://auto1-mock-server.herokuapp.com";

export const fetchCars = async (page: string, query: string) => {
    const resp = await fetch(`${BASE_URL}/api/cars?page=${page}${query}`);
    const data = await resp.json();
    return data as CarsResponse;
};

export const fetchCar = async (stockNumber: number) => {
    const resp = await fetch(`${BASE_URL}/api/cars/${stockNumber}`);
    const data = await resp.json();
    return data.car as CarModel;
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
