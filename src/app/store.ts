import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import carsReducer from '../continers/Cars/carsSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
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
