import { useContext, useRef, useEffect, useState } from "react";

import Nav from '../Nav/Nav'
import Box from "../Box/Box";

import { PositionElementsContext } from "../../store/position-elements-context";
import classes from './Container.module.css'




const Container = () => {
    
   const [mousePosition, setMousePosition] = useState()
   const ref = useRef()

    

    return <PositionElementsContext.Provider value={{ref}}>

                <main className={classes.main} ref={ref}>

                        <Box id="first" />
                        <Box id="second" />
                        
                </main>

        </PositionElementsContext.Provider>

}

export default Container;