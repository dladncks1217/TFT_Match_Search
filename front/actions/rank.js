import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export const getUpdatedRankAction = createAsyncThunk(
  "rank/update",
  async (data, thunkAPI) => {
    console.log(data);
    const result = await axios.get("/apirequest/updatedrank");
    return result;
  }
);
