import React, { useEffect, useState } from "react";
import styles from "./TodoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actions, todoSelector, getInitialStateAsync } from "../../redux/reducers/todoReducer";
import axios from "axios";


export default function TodoList() {
    const [loading, setLoading] = useState(true);
    const todos = useSelector(todoSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        // async function fetchData() {
        //     // const response = await fetch("http://localhost:4100/api/todos");
        //     // const jsonResponse = await response.json();

        //     //======== fetch the initial data using axios =============//
        //     const response =await axios.get("http://localhost:4100/api/todos");
        //     const data = response.data;
           
        //     dispatch(actions.setInitialState(data));
        //     setTimeout(() => {
        //         setLoading(false);
        //     }, 1000);
        // }

        // fetchData();



        dispatch(getInitialStateAsync());
        // setTimeout(()=>{
        //     setLoading(false);
        // }, 500)
       

    }, [dispatch]);


    useEffect(()=>{
        if(todos){
            setTimeout(()=>{
                setLoading(false);
            },1000)
           
        }

    },[todos]);

    return (
        <div className={styles.todoListContainer}>
            {loading ? (
                <div className={styles.loader}></div>
            ) : (
                todos && todos.length > 0 ? todos.map((todo, idx) => (
                    <div key={idx} className={styles.todoDiv}>
                        <span>{todo.text}</span>
                        <span className={todo.completed ? styles.completed : styles.notCompleted}>
                            {todo.completed ? "completed" : "Not-Completed"}
                        </span>
                        <button onClick={() => dispatch(actions.toggle(idx))}>update-todo</button>
                    </div>
                )) : (
                    <div>No todos available</div>
                )
            )}
        </div>
    );
}
