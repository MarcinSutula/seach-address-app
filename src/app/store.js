import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getResultsThunk } from "./getResultsThunk";

const initialState = {
  searchResults: [],
  getResultsStatus: "",
  result: {
    coords: [],
    name: "",
  },
};

const searchAddressSlice = createSlice({
  name: "search-address",
  initialState,
  reducers: {
    resetResults(state) {
      state.getResultsStatus = "";
      state.searchResults = [];
      state.result = { coords: [], name: "" };
    },
    setResult(state, action) {
      state.result = {
        coords: [action.payload.geometry.y, action.payload.geometry.x],
        name: Object.values(action.payload.attributes),
      };
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
