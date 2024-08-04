//import { ADD_TODO, TOGGLE_TODO } from "../actions/todoAction";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    todos:[]
}

//============== create async thunk function for api call to get the data ==================//
// export const getInitialStateAsync = createAsyncThunk("todo/getInitialState",
//     async(arg, thunkAPI)=>{
//         try{

//             const res =await axios.get("http://localhost:4100/api/todos");
//             thunkAPI.dispatch(actions.setInitialState(res.data));

//         }catch(error){
//             console.log("error while featching initial todoData: ", error);

//         }finally{
//             console.log("I am suranjit namasudra.");
//         }
     

// })




//====( instead of dispatch actions for update initialState inside the createAsyncThunk return a promise
//====  from this createAsyncThunk fun() which will execute inside the extraReducer of todoSlice =======)

export const getInitialStateAsync = createAsyncThunk("todo/getInitialState",
   async ()=>{
     
    const res=await axios.get("http://localhost:4100/api/todos");
    return res.data;
})


//====== call backend api for add new todo ====================================//
export const addTodoAsync = createAsyncThunk("todo/addTodo",
    async (arg, thunkAPI)=>{
        
        const res = await fetch("http://localhost:4100/api/todos", {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },

            body:JSON.stringify({
                text:arg,
                completed:false
            })
        });


        if(!res.ok){
            throw new Error("Failed to add todo");
        }

        const data = await res.json();
        console.log("response from backend: ", data);
        return data;

})



//================ creating reducer using redux-toolkit =========================//
const todoSlice = createSlice({
    name:"todo",
    initialState:initialState,

    reducers:{
        setInitialState:(state, action)=>{

            state.todos = [...action.payload]
        },
        //------ add a todo to the states ------//
        // add:(state, action)=>{
        //     state.todos.push({
        //         text:action.payload,
        //         completed:false
        //     })
        // },

        //-------- toggle the todos status completed and not completed ---------//
        toggle:(state, action)=>{
            state.todos.map((todo, i)=>{
                if(i===action.payload){
                    todo.completed = !todo.completed
                }

                return todo;
            });
        }
    },

    //======== used a extra reducer for listen for the actions when getInitialStateAsync return =====//
    extraReducers:(builder)=>{
        builder.addCase(getInitialStateAsync.fulfilled, (state, action)=>{
            state.todos = [...action.payload]
        })

        .addCase(addTodoAsync.fulfilled, (state, action)=>{
            state.todos.push(action.payload);
        })
    }
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
export const todoSelector = (state)=>state.todoReducer.todos;









//============== creating reducer using redux ============================//

// export function todoReducers(state=initialState, action){
//     switch (action.type){

//         case ADD_TODO:
//             return{
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {text:action.text, completed:false}
//                 ]
//             }

//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos:state.todos.map((todo, idx)=>{
//                     if(idx===action.index){
//                         todo.completed = !todo.completed;
//                     }

//                     return todo;
//                 })
//             }

//         default:
//             return state;
//     }

// }