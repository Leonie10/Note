import   classes from './Box.module.css'
import useDragger from '../../hooks/useDragger'
import { useRef, useState } from 'react'


const Box = (props) => {

    useDragger(props.id)


    const boxRef = useRef(null)
    const refLeft = useRef(null)
    const refTop = useRef(null)
    const refRight = useRef(null)
    const refBottom = useRef(null)


    const onClickHandler =  () => {
        // depend of the purpose of the box
    }
    
   

    return <div id={props.id} className={classes["box-container"]} >

            <div className={`${classes.resizer} ${classes.rl}`} ></div>
            <div className={`${classes.resizer} ${classes.rt}` }></div>
            <div className={`${classes.resizer} ${classes.rr}`} ></div>
            <div className={`${classes.resizer} ${classes.rb}`} ></div>

        <div className={`${classes.drag}`} >
            {props.children}
        </div>

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