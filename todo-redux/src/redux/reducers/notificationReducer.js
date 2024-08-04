import { createSlice } from "@reduxjs/toolkit";
import {  actions as todoAction } from "./todoReducer";
import { actions as noteAction } from "./noteReducer";

const initialState = {
    message:"",

}

 const notificationSlice = createSlice({
    name:"notification",
    initialState:initialState,

    reducers:{
        reset:(state, action)=>{
            state.message = "";
        }

    },

    extraReducers:(builder)=>{
       
        builder.addCase(todoAction.add, (state, actions)=>{
            state.message = "New todo is created";
        })

        builder.addCase(noteAction.add, (state, action)=>{
            state.message = "New notes is created";
        })
    }


   

})

export const notificationRedeucer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
export const notificationSelector = (state)=>state.notificationRedeucer.message;

