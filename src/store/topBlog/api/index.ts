import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "@/utils/utils";

export const getTopBlog = createAsyncThunk(
  "blog/getTopBlog",
  async () => {
    try {
      const responce = await axios.get(config.BASE_URL);
      return responce?.data;
    } catch (error: any) {
      return error;
    }
  }
);
