import { useContext, useRef, useEffect, useState } from "react";

import Nav from '../Nav/Nav'
import Box from "../Box/Box";

import classes from './Container.module.css'


const Container = () => {
    
   const [mousePosition, setMousePosition] = useState()
   const refContainer = useRef()


    return <main id="container" className={classes.main} ref={refContainer}>
                        <Box id="first" />
        </main>


}

export default Container;