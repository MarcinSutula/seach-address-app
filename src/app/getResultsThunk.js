import { createAsyncThunk } from "@reduxjs/toolkit";

export const getResultsThunk = createAsyncThunk(
  "search-address/getResultsThunk",
  async (thunkPayload, { dispatch, getState }) => {
    try {
      const url = `https://services5.arcgis.com/UoRAQmXv3KtNImPl/ArcGIS/rest/services/adresss/FeatureServer/0/query?where=ulica+%3D%27${thunkPayload.streetName}%27+and+numerPorza+like+%27${thunkPayload.streetNumber}%27&outFields=ulica%2CnumerPorza&outSR=4326&f=json`;
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      return data.features;
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  }
);
