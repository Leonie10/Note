import { useContext, useEffect, useState } from "react";
import Note from '../Note/Note'
import classes from './Container.module.css'
import { DraggerContext } from "../../store/dragger-context";

import useDragger from "../../hooks/useDragger";
import Box from "../Box/Box";



const Container = () => {
   const [mousePosition, setMousePosition] = useState()
    // ctx is dragging // is resizing 

    // useEffect(() => {

        

    // }[isDragging, isResizing])


    const onMouseMoveHandler = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        setMousePosition({
            x: x,
            y: y
        })
    }
    

    return <main className={classes.main} >
            <Box id="first"/>
            <Box id="second"/>
    </main>
}

export default Container;