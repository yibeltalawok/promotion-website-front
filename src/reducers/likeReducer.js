import { createSlice } from "@reduxjs/toolkit";
import { updateLike } from "../actions/likeAction";

//initail state
const initialState = {
    loading: false,
    likes:[],
    filter:[],
    error: false,
    success: false,
    message: null,
  }
  const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {},
    extraReducers: {

        [updateLike.pending]: (state) =>{
            state.loading = true
            state.error = false
            console.log("search pending")
        },
        [updateLike.fulfilled]: (state, {payload}) =>{
            state.success = true
            state.likes = payload
            state.error = false
            state.filter = payload
            console.log("Likes==",payload)
        },
        [updateLike.rejected]: (state, {payload}) =>{
            state.error = payload
            state.success = false
            console.log("search rejected")
        },
        
    },
})
export default likeSlice.reducer;