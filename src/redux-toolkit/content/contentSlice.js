import { createSlice } from "@reduxjs/toolkit";
import customerSlice from "../customer/customerSlice";

const initialState = {
  videoText:
    "Vi är mer än glada att hjälpa dig med din förfrågan"
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setMainQuery: (state, { payload }) => {
      state.mainQuery = payload;
    }
  }
});

export const { setMainQuery } = contentSlice.actions;
export const getContentData = (state) => state.content;
export default contentSlice.reducer;
