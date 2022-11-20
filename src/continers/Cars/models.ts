enum FuelType {
  Diesal = "Diesal",
  Petrol = "Petrol",
}

enum Unit {
  km = "km",
  mi = "mi",
}

type PaginationMeta = {
  totalCarsCount: number;
  totalPageCount: number;
};

export interface PaginationModel extends PaginationMeta {
  currentPage: number;
}

export enum Status {
  idle = "idle",
  loading = "loading",
  error = "error",
}

export type Milage = {
  number: string;
  unit: Unit;
};

export type Model = {
  name: string;
};

export type Manufacturer = {
  name: string;
  models: Array<Model>;
};

export type CarModel = {
  color: string;
  stockNumber: string;
  manufacturerName: string;
  mileage: Milage;
  fuelType: FuelType;
  pictureUrl: string;
  modelName: string;
};

export type CarsModel = Array<CarModel>;

export interface CarsResponse extends PaginationMeta {
  cars: Array<CarModel>;
}

type option = {
  label: string;
  value: string;
};

export type CarsState = {
  list: CarsModel;
  status: Status;
  selectedCar: CarModel | null;
  colors: Array<option> | [];
  manufacturers: Array<option> | [];
  pagination: PaginationModel;
  favourites: Array<CarModel> | [];
};
