import   classes from './Box.module.css'
import useDragger from '../../hooks/useDragger'
import useResizer from '../../hooks/useResizer'
import { useRef, useState, useContext, useEffect } from 'react'
import { PositionElementsContext } from '../../store/elements-context'


const Box = (props) => {

    const positionElementsCtx = useContext(PositionElementsContext)
    const containerRef = positionElementsCtx.containerRef;

    const boxRef = useRef()
    const refTop = useRef()
    const refLeft = useRef()
    const refRight = useRef()
    const refBottom = useRef()

    // useDragger(props.id)





    return <div id={props.id} className={classes["box-container"]} ref={boxRef} onMouseMove={onMouseMove} >

            <div className={`${classes.resizer} ${classes.rl}`} ref={refLeft} ></div>
            <div className={`${classes.resizer} ${classes.rt}` } ref={refTop}></div>
            <div className={`${classes.resizer} ${classes.rr}`} ref={refRight}></div>
            <div className={`${classes.resizer} ${classes.rb}`}ref={refBottom} ></div>

            {props.children}

    </div>
}



export default Box;















// Resize & Drag


// const onMouseMoveHandler = (e) =>{

//      target width and height
//      set min width size element when resizing 

//     //Element position in viewport
//     const target = e.target.getBoundingClientRect()
//     const left = target.left;
//     const top = target.top;
//     const width = target.width;
//     const height = target.height

//     //Mouse position in element
//     const mousex = e.clientX - left;
//     const mousey = e.clientY - top;

//     // if mouse is dragging
//     if ( (mousex || mousey) < 7 || mousex >= (width - 7) || mousey >= (height - 7)){
//         setIsResizing(true)
//         setIsDragging(false)
//     } else {
//         setIsDragging(true)
//         setIsResizing(false)
//     }

//     // if mouse is resizing

//     console.log(mousex, mousey, "left", left, top, width, height)
// }