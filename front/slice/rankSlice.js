import { createSlice } from "@reduxjs/toolkit";
import { getUpdatedRankAction } from "../actions/rank";

export const initialState = {
  data: "",
  isUpdating: false,
  UpdateErrorReason: "",
};

export const rankSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {},
  extraReducers: {
    [getUpdatedRankAction.pending](state, action) {
      state.isUpdating = true;
    },
    [getUpdatedRankAction.fulfilled](state, action) {
      state.isUpdating = false;
      state.data = action.payload;
    },
    [getUpdatedRankAction.rejected](state, action) {
      state.UpdateErrorReason = "error";
      state.isUpdating = false;
    },
  },
});

export default rankSlice;
