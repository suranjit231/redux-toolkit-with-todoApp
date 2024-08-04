import { useState } from "react";
import styles from "./Note.module.css";
import { useSelector, useDispatch } from "react-redux";
//import { addNote, deleteNote } from "../../redux/actions/noteAction";
import { actions } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";

export default function Notes(){
    const [noteText, setNotes] = useState("");
    const notes = useSelector(noteSelector);
    const dispatch = useDispatch();
      
      function handleAddNote(e){
       
        e.preventDefault();
        if(!noteText) return;
        dispatch(actions.add(noteText));
        clearInput();
      }

      function clearInput(){
        setNotes("");
      }
      

    return(
        <div className={styles.notesContainer}>

            <div className={styles.noteForm}>
                <form onSubmit={handleAddNote} >
                    <input type="text" value={noteText} placeholder="Enter the note text..."
                        onChange={(e)=>setNotes(e.target.value)}/>
                    <button>Create Note</button>
                </form>
            </div>

            <div className={styles.noteListWrapper}>
                {notes && notes.length>0? notes.map((note, idx)=>{
                    return(
                        <div key={idx} className={styles.noteDiv}>
                            <div>
                                <p>{note.createdOn}</p>
                                <p>{note.text}</p>
                            </div>
                           <button onClick={()=>dispatch(actions.delete(idx))} >Delete</button>
                        </div>
                    )
                }) :null}
            </div>

        </div>
    )
}