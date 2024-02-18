import   classes from './Box.module.css'
import useDragger from '../../hooks/useDragger'
import { useState } from 'react'

const Box = (props) => {

    useDragger(props.id)
 
    return <div id={props.id} className={classes["box-container"]} >
        {props.children}
    </div>
}

export default Box;



// Resize & Drag

// useEffect(() => {
//     useDragger(props.id)
// }, [isDragging])



// useEffect(() => useReszing(), [isResizing])

// Mouse Position


// const onMouseMoveHandler = (e) =>{

//     // target width and height
//     // set min width size element when resizing 

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