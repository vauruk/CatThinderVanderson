import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CatDetailService } from '../services/CatDetailService';
import { CatDetail } from '../services/types';

interface CatDetailState {
  detail: CatDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: CatDetailState = {
  detail: null,
  loading: false,
  error: null,
};

export const fetchCatDetail = createAsyncThunk(
  'catDetail/fetchCatDetail',
  async (id: string) => {
    return await CatDetailService.fetchCatDetail(id);
  },
);

const catDetailSlice = createSlice({
  name: 'catDetail',
  initialState,
  reducers: {
    clearCatDetail: state => {
      state.detail = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCatDetail.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCatDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.loading = false;
      })
      .addCase(fetchCatDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro ao buscar detalhes';
      });
  },
});

export const { clearCatDetail } = catDetailSlice.actions;
export default catDetailSlice.reducer;
