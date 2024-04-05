import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

export const getImg = createAsyncThunk(
  "img/get",
  async () => {
    try {
      const responce = await axios.get(BASE_URL);
      console.log(responce.data.message);
      return responce?.data?.message;
    } catch (error: any) {
      return error;
    }
  }
);
