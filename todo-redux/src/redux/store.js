//import * as redux from "redux";
//import { combineReducers } from "redux"; 

import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { notificationRedeucer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";


//======== configure the store using redux-toolkit =======//
export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationRedeucer,
       
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(loggerMiddleware ) 
        //-- here i can used multiple middleware by putting comas inside concate 
    }


   
})













//================= combine the reducer in redux and create the redux store ==========//
//========= combined reducers =====//
// const result = combineReducers({
//     todoReducer:todoReducers,
//     noteReducer:noteReducer
// })

//========= create the store ======//
//export const store = redux.createStore(result);