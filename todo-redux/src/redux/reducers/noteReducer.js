//import { ADD_NOTE, DELETE_NOTE } from "../actions/noteAction";
import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    notes:[
        {
            text: "Meeting with team at 10 AM",
            createdOn: new Date().toLocaleDateString()
          },
          {
            text: "Buy groceries: Milk, Bread, Eggs",
            createdOn: new Date().toLocaleDateString()
          },
          {
            text: "Call the bank to inquire about the loan",
            createdOn: new Date().toLocaleDateString()
          },
    ]
}

//================ creating note reducer using reddux-toolkit by ( createSlice ) function ========//
const noteSlice = createSlice({
    name:"note",
    initialState:INITIAL_STATE,

    reducers:{

        //------ adding new note to the state of notes ------//
        add:(state, action)=>{
            state.notes.push({
                text:action.payload,
                createdOn:new Date().toLocaleDateString()
            })

        },

        //------ deleting a note from the note ------------//

        delete:(state, action)=>{
            console.log("delete note is called: ", action)
            state.notes.splice(action.payload, 1);
        }
    }
})


export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;
export const noteSelector = (state)=>state.noteReducer.notes;





//====================== creating note reducer using redux ========================//
// export function noteReducer(state=INITIAL_STATE, action){
//     switch (action.type){

//         case ADD_NOTE:
//             return{
//                 ...state,
//                notes:[
//                     ...state.notes,
//                     {text:action.text, createdOn:new Date().toLocaleDateString()}
//                ]
//             }

//         case DELETE_NOTE:
//             return{
//                 ...state,
//                 notes:state.notes.filter((note, i)=> i !== action.index)
//             }

//         default:
//             return state;
//     }

// }