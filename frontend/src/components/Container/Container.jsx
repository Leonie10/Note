import { useState } from "react";
import Note from "../Note/Note"
import classes from './Notes.module.css'

const Notes = () => {

    // data fetching or new notes 

    // each element who can be move have to have a ref and a container ref
    // where use useMove ? notes / note, everything in notes container
    
   const ids = ["1", "2", "3"];

   const containerRef = useRef(null);

 
    return <main className={classes.main}ref={containerRef}>
        {ids.map( (id) => {
            return <Note key={id} containerRef={containerRef} />
        })}
    </main>
}

export default Notes