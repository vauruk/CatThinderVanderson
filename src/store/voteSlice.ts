import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { VoteService } from '../services/VoteService';
import { VotePayload } from '../services/types';
import { VoteState } from './types';

const initialState: VoteState = {
  loading: false,
  error: null,
};

export const sendVote = createAsyncThunk(
  'vote/sendVote',
  async (payload: VotePayload, { rejectWithValue }) => {
    try {
      await VoteService.sendVote(payload);
      return true;
    } catch (error: any) {
      return rejectWithValue(error?.message || 'Erro ao votar');
    }
  },
);

const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    clearVoteState: state => {
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendVote.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendVote.fulfilled, state => {
        state.loading = false;
      })
      .addCase(sendVote.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || 'Erro ao votar';
      });
  },
});

export const { clearVoteState } = voteSlice.actions;
export default voteSlice.reducer;
