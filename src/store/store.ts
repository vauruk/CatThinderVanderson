import { configureStore } from '@reduxjs/toolkit';
import catReducer from './catSlice';
import catDetailReducer from './catDetailSlice';

export const store = configureStore({
  reducer: {
    cats: catReducer,
    catDetail: catDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
