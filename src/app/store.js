import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getResultsThunk } from "./getResultsThunk";

const initialState = {
  searchResults: [],
  getResultsStatus: "",
  coords: [],
};

const searchAddressSlice = createSlice({
  name: "search-address",
  initialState,
  reducers: {
    resetResultsStatus(state) {
      state.getResultsStatus = "";
    },
    setCoords(state, action) {
      state.coords = [action.payload.y, action.payload.x];
    },
  },
  extraReducers: {
    [getResultsThunk.pending]: (state) => {
      state.getResultsStatus = "loading";
    },
    [getResultsThunk.fulfilled]: (state, action) => {
      if (!action.payload || action.payload.length === 0) {
        state.searchResults = [];
        state.getResultsStatus = "no results";
      } else {
        state.searchResults = action.payload;
        state.getResultsStatus = "success";
      }
    },
    [getResultsThunk.rejected]: (state) => {
      state.getResultsStatus = "failed";
      alert("Something went wrong !");
    },
  },
});

const store = configureStore({
  reducer: searchAddressSlice.reducer,
});

export const searchAddressActions = searchAddressSlice.actions;

export default store;
