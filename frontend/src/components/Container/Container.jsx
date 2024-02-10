import { useState } from "react";
import Note from "../Note/Note"
import classes from './Notes.module.css'

const Notes = () => {

 
    return <main className={classes.main}>
        <Note id="first"/>
        <Note id="second"/>
        <Note id="third"/>
    </main>
}

export default Notes