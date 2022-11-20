import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchCar} from "./carAPI";
import {CarState, Status} from "../Cars/models";

const initialState: CarState = {
  status: Status.idle,
  car: null,
};

export const getCar = createAsyncThunk(
  "GET_CAR",
  async (stockNumber: number) => {
    const response = await fetchCar(stockNumber);
    return response;
  }
);

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    resetSelectedCar: (state, action) => {
      state.car = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCar.pending, (state) => {
        state.status = Status.loading;
      })
      .addCase(getCar.fulfilled, (state, action) => {
        state.status = Status.idle;
        state.car = action.payload;
      })
      .addCase(getCar.rejected, (state) => {
        state.status = Status.error;
      });
  },
});

export const selectCar = (state: RootState) => state.car;

export const {resetSelectedCar} = carSlice.actions;

export default carSlice.reducer;
