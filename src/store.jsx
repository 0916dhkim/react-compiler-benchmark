import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";
export const dataSlice = createSlice({
  name: "data",
  initialState: new Array(400).fill(null).map(() => new Array(100).fill("foo")),
  reducers: {
    setCell: (state, action) => {
      const { row, column, value } = action.payload;
      state[row][column] = value;
    },
  },
});

export const store = configureStore({
  reducer: dataSlice.reducer,
});
