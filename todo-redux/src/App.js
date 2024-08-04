import React from "react";
import TodoForm from "./component/todoForm/todoForm";
import TodoList from "./component/todoList/TodoList";
import {Provider} from "react-redux";
import { store } from "./redux/store";
import Navbar from "./component/navBar/Navbar";
import Home from "./component/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notes from "./component/notes/Note";


function App() {
  const router = createBrowserRouter([
    {path:"/", element:<Navbar />, children:[
        {index:true, element: <Home />},
        {path:"todos", element: <div className="todoContainer">
          <TodoForm />
          <TodoList />
        
        </div>},


        {path:"notes", element:<Notes />}
    ]}
  ])

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
