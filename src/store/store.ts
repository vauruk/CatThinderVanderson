import { configureStore } from '@reduxjs/toolkit';
import catReducer from './catSlice';
import catDetailReducer from './catDetailSlice';
import voteReducer from './voteSlice';

export const store = configureStore({
  reducer: {
    cats: catReducer,
    catDetail: catDetailReducer,
    vote: voteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
