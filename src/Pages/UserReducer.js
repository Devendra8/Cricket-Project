import { createSlice } from '@reduxjs/toolkit';
import {FetchOrders} from "./FetchOrders";

export const initialState = {
    // cases:"",
    articles1:"",
    articles2:"",
    articles3:"",
    articles4:"",
    articles5:"",
    articles6:"",
    // todayCases:"", 
    // deaths:"",
    // todayDeaths:"",
    // recovered:"",
    // todayRecovered:"",
    status: false,
    error: ""
}

const UserReducer = createSlice({
    name: 'empty',
    initialState,
    reducers:{

    },
    extraReducers:{
        [FetchOrders.pending]: (state) => {
            state.status = "loading";
            state.name = "loading";
        },

        [FetchOrders.fulfilled]:(state, action) => {
            state.status = "suceeded";
            state.articles1 = action.payload.data[0];
            state.articles2 = action.payload.data[1];
            state.articles3 = action.payload.data[2];
            state.articles4 = action.payload.data[3];
            state.articles5 = action.payload.data[4];
            state.articles6 = action.payload.data[5];
         },

        [FetchOrders.rejected]:(state, action) => {
            state.status = "failed";
            state.error = action.error.message;

        }

    }
})

export const FetchOrders1 = UserReducer.actions;

//export const {} = UserReducer.actions
export default UserReducer.reducer;
