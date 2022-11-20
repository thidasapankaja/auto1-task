import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {capitalizeFirstLetter} from "../../utils/helpers";
import {fetchCar, fetchCars, fetchColors, fetchManufacturers} from "./carsAPI";
import {CarsResponse, CarsState, Manufacturer, Status} from "./models";

const initialState: CarsState = {
  list: [],
  status: Status.idle,
  selectedCar: null,
  manufacturers: [],
  colors: [],
  pagination: {
    currentPage: 0,
    totalCarsCount: 0,
    totalPageCount: 0,
  },
  favourites: [],
};

export const getCars = createAsyncThunk("GET_CARS", async (data: any) => {
  try {
    const response = await fetchCars(data?.page, data?.query);
    return response as CarsResponse;
  } catch (err) {
    throw err;
  }
});

export const getColors = createAsyncThunk("GET_COLORS", async () => {
  const response = await fetchColors();
  const colors = response?.colors?.map((color: string) => ({
    label: capitalizeFirstLetter(color),
    value: color,
  }));
  colors.unshift({label: "All car colors", value: "all-col"});
  return colors;
});

export const getManufacturers = createAsyncThunk(
  "GET_MANUFACTURERS",
  async () => {
    const response = await fetchManufacturers();
    const manufacturers = response.manufacturers.map((item: Manufacturer) => ({
      label: capitalizeFirstLetter(item?.name),
      value: item.name,
    }));
    manufacturers.unshift({label: "All manufacturers", value: "all-man"});
    return manufacturers;
  }
);

export const getCar = createAsyncThunk(
  "GET_CAR",
  async (stockNumber: number) => {
    const response = await fetchCar(stockNumber);
    return response;
  }
);

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetSelectedCar: (state, action) => {
      state.selectedCar = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state, action) => {
        state.pagination.currentPage = action?.meta?.arg?.page;
        state.status = Status.loading;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.status = Status.idle;
        state.list = action.payload.cars;
        if (state.pagination.currentPage > action.payload.totalPageCount) {
          state.pagination = {
            currentPage: action.payload.totalCarsCount,
            totalPageCount: action.payload.totalPageCount,
            totalCarsCount: action.payload.totalCarsCount,
          };
        } else {
          state.pagination = {
            ...state.pagination,
            totalPageCount: action.payload.totalPageCount,
            totalCarsCount: action.payload.totalCarsCount,
          };
        }
      })
      .addCase(getCars.rejected, (state) => {
        state.status = Status.error;
      })
      .addCase(getCar.pending, (state) => {
        state.status = Status.loading;
      })
      .addCase(getCar.fulfilled, (state, action) => {
        state.status = Status.idle;
        state.selectedCar = action.payload;
      })
      .addCase(getCar.rejected, (state) => {
        state.status = Status.error;
      })
      .addCase(getColors.fulfilled, (state, action) => {
        state.status = Status.idle;
        state.colors = action.payload;
      })
      .addCase(getManufacturers.fulfilled, (state, action) => {
        state.status = Status.idle;
        state.manufacturers = action.payload;
      });
  },
});

export const selectCars = (state: RootState) => state.cars;

export const {resetSelectedCar} = carsSlice.actions;

export default carsSlice.reducer;
