import { useContext, useState } from "react";
import Note from '../Note/Note'
import classes from './Container.module.css'
import { DraggerContext } from "../../store/dragger-context";

import useDragger from "../../hooks/useDragger";
import Box from "../Box/Box";



const Container = () => {
    

    return <main className={classes.main}>
            <Box id="first"/>
            <Box id="second"/>
    </main>
}

export default Container;