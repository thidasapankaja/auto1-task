import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import carsReducer from '../continers/Cars/carsSlice';
import carReducer from '../continers/Car/carSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    car: carReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
