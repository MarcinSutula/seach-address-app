import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchURL } from "../components/utils/helpers";

export const getResultsThunk = createAsyncThunk(
  "search-address/getResultsThunk",
  async (thunkPayload, { dispatch, getState }) => {
    try {
      const response = await fetch(fetchURL(thunkPayload), { method: "GET" });
      const data = await response.json();
      return data.features;
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  }
);
