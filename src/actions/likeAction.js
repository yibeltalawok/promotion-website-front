import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError } from "../utils/toast";
import  BaseUrl from "../utils/BaseUrl";
export const updateLike = createAsyncThunk(
  "likes",
  async (data,thunkAPI) => {
    //   let query ="job_vacancy";
    const id=1;
      // console.log("ccccccc:"+data.likes);  
    try {
      // let URL = `${BaseUrl}/addressapi/vacancies/all?key=${query}`
     let URL = `http://localhost:11278/fileupload-api/like/${id}`
      // let URL = `${BaseUrl}/addressapi/vacancies/all?key=${query}&per_page=3&page=${page}`
     // {params:{key:"job_vacancy"}};
     let response = await axios.put(URL,data);
     // console.log("vacancies action", response);
      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }} 
      catch (e) {
      console.log("Error", e.response.data);
      handleError("loading...");
      return thunkAPI.rejectWithValue(e.response.data);
    }});