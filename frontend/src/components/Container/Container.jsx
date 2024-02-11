import { useState } from "react";
import Note from '../Note/Note'
import classes from './Container.module.css'

import useDragger from "../../hooks/useDragger";

const Container = () => {
 
    return <main>
        <div className={classes.main}><Note id="first"/></div>
        
    </main>
}

export default Container;