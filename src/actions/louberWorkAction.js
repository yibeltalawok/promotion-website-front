  

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError } from "../utils/toast";
import  BaseUrl from "../utils/BaseUrl";
export const searchDayWork = createAsyncThunk(
  "loubers",
  async (term, thunkAPI) => {
    try {
      console.log("action term : ",term);
      let baseUrl = `${BaseUrl}/addressapi/vacancies/all?start_date=${term}`;
      let response = await axios.get(baseUrl);
      console.log("responese : ", response);
      if (response.status === 200) {
         //console.log("response 2 : ",response.data);
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      handleError("search single vacancie...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

  export const Daily_Labourer = createAsyncThunk(
    "loubers",
    async (thunkAPI) => {
        let query ="daily_work";
       // console.log("page is : ", page);
      try {
        let URL = `${BaseUrl}/addressapi/vacancies/all?key=${query}`
        // {params:{key:"job_vacancy"}};
        let response = await axios.get(URL);
        // console.`log("uuuuuuuuuuuuuuuuuuuuuu loubers action", response);
        if (response.status === 200) {
          return response.data;
        } else {
          handleError(response.message);
          return thunkAPI.rejectWithValue(response.data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
        handleError("loading...");
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );


