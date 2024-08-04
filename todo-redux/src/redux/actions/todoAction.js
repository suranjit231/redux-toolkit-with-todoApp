
//====== actions constain ====//
export const ADD_TODO = "Add Todo";
export const TOGGLE_TODO = "Toggle Todo";

//====== action creator =======//
export const addTodo = (text)=>({text, type:ADD_TODO});

export const toggleTodo = (index)=>({index, type:TOGGLE_TODO});