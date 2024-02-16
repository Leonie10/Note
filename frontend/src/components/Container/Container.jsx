import { useContext, useState } from "react";
import Note from '../Note/Note'
import classes from './Container.module.css'
import { DraggerContext } from "../../store/dragger-context";

import useDragger from "../../hooks/useDragger";



const Container = () => {
    

    return <main>
        <div className={classes.main}>
            <Note id="first"/>
            <Note id="second"/>
            <Note id="third"/>
            </div>
    </main>
}

export default Container;