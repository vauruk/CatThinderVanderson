import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CatService, Cat } from '../services/CatService';

interface CatState {
  cats: Cat[];
  loading: boolean;
  error: string | null;
}

const initialState: CatState = {
  cats: [],
  loading: false,
  error: null,
};

export const fetchCats = createAsyncThunk('cats/fetchCats', async (limit: number = 10) => {
  return await CatService.fetchCats(limit);
});

const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.cats = action.payload;
        state.loading = false;
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch cats';
      });
  },
});

export default catSlice.reducer;
