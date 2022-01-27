import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getResultsThunk } from "./getResultsThunk";

const initialState = {
  queryFirst: "Ulica",
  querySecond: "Numer",
  searchResults: [],
  getResultStatus: "",
};

const searchAddressSlice = createSlice({
  name: "search-address",
  initialState,
  reducers: {
    changeQuery(state, action) {
      state.queryFirst = action.payload.query;
    },
    resetResultStatus(state) {
      state.getResultStatus = "";
    },
  },
  extraReducers: {
    [getResultsThunk.pending]: (state) => {
      state.getResultStatus = "loading";
    },
    [getResultsThunk.fulfilled]: (state, action) => {
      if (!action.payload || action.payload.length === 0) {
        state.getResultStatus = "no results";
      } else {
        state.searchResults = action.payload;
        state.getResultStatus = "success";
      }
    },
    [getResultsThunk.rejected]: (state) => {
      state.getResultStatus = "failed";
      alert("Something went wrong !");
    },
  },
});

const store = configureStore({
  reducer: searchAddressSlice.reducer,
});

export const searchAddressActions = searchAddressSlice.actions;

export default store;
