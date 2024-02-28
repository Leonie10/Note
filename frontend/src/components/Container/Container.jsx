import { useContext, useRef, useEffect, useState } from "react";

import Nav from '../Nav/Nav'
import Box from "../Box/Box";

import { PositionElementsContext } from "../../store/elements-context";
import classes from './Container.module.css'




const Container = () => {
    
   const [mousePosition, setMousePosition] = useState()
   const refContainer = useRef()

   let ctxPositionElements = useContext(PositionElementsContext);
   console.log(ctxPositionElements.containerRef.current)

    return <main className={classes.main} ref={refContainer}>

                        <Box id="first" />
                        <Box id="second" />
                        
        </main>


}

export default Container;