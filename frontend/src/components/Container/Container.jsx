import { useContext, useRef, useEffect, useState } from "react";

import Nav from '../Nav/Nav'
import Box from "../Box/Box";
import classes from './Container.module.css'




const Container = () => {
    
//    const [mousePosition, setMousePosition] = useState()
//    const refContainer = useRef()

//    let ctxPositionElements = useContext(PositionElementsContext);
//    console.log(ctxPositionElements.containerRef.current)

    return <main id="container" className={classes.main} >
                        <Box id="first" />
        </main>


}

export default Container;