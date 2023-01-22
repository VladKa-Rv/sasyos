import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
    name: "loader",
  
    initialState: {
      loader : true
    },
  
    reducers: {
      setLoader: (state, action) => {
        state.loader = action.payload;
      },
    },
  });
  
  export const getLoader = (state) => state.loader.loader;

  export const { setLoader } = loaderSlice.actions;
  
  export default loaderSlice.reducer;