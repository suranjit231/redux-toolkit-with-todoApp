import React, { useState, useEffect } from "react";
import styles from "./todoForm.module.css";
import { useDispatch, useSelector } from "react-redux";

import { actions, addTodoAsync } from "../../redux/reducers/todoReducer";
import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";


export default function TodoForm(){
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const message = useSelector(notificationSelector);


   // const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (message) {
    
            const timer = setTimeout(() => {
                dispatch(resetNotification())
            }, 3000); // Alert stays for 3 seconds

            return () => clearTimeout(timer);
        }
    }, [message, dispatch]);




    function handleSubmitTodoForm(e){
        e.preventDefault();

        if(!text) return;
        dispatch(addTodoAsync(text));
        clearInput();
    }

    function clearInput(){
        setText("");
    }


    return(
        <div className={styles.todoFormContainer}>

            {message && (
                <div className={styles.alert}>
                    {message}
                </div>
            )}              


            <form onSubmit={handleSubmitTodoForm} >
                <div className={styles.formControl}>
                    <input type="text" value={text} placeholder="Enter the task..."
                     onChange={(e)=>setText(e.target.value)}/>

                     <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}