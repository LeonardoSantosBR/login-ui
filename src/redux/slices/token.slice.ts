import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
  },
  reducers: {
    getToken: (state, actions) => {

    },
    setToken: (state, actions) => {
      
    },
  },
});

export const { getToken, setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
