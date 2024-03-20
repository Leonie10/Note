import   classes from './Box.module.css'
import useDragger from '../../hooks/useDragger'
import { useRef, useState, useContext, useEffect } from 'react'



const Box = (props) => {


    const boxRef = useRef(null)

    const refTop = useRef(null)
    const refLeft = useRef(null)
    const refRight = useRef(null)
    const refBottom = useRef(null)


    useEffect( ()=> {

        const container = document.getElementById("container");

        let box = boxRef.current
        let borderRight = refRight.current;

        let styles = window.getComputedStyle(box);

        let height = parseInt(styles.height,10);
        let width = parseInt(styles.width, 10);


        let topBox = styles.top
        let leftBox = styles.left

        // console.log('top', 'right', topBox, leftBox)

        let coords = {
            x: 0,
            y: 0
        }


        const onMouseDownHandler = (e) => {
            console.log('mouse down ')
            coords.x = e.clientX;
            coords.y = e.clientY;

            borderRight.addEventListener("mousemove", onMouseMoveHandler)
            container.addEventListener("mousemove", onMouseMoveHandler)
        }


        const onMouseMoveHandler = (e) => {

            e.preventDefault();

            console.log('mouse move ')

            const dx = e.clientX - coords.x;
            width = coords.x + dx;
            box.style.width = `${width}px`;
            coord
            console.log("coords", coords)
            console.log("width", width)
            borderRight.addEventListener("mouseup", onMouseUpHandler)
            container.addEventListener("mouseup", onMouseUpHandler)
        }


        const onMouseUpHandler = (e) => {
            console.log('mouse up ')

            const dx = e.clientX - coords.x;
            width = dx;

            borderRight.removeEventListener("mousemove", onMouseMoveHandler)
            container.removeEventListener("mousemove", onMouseMoveHandler)
            

        }
      
        borderRight.addEventListener("mousedown", onMouseDownHandler)
        


      

        return () => {
            borderRight.removeEventListener("mousedown", onMouseDownHandler)
            borderRight.removeEventListener("mouseup", onMouseMoveHandler)
            container.removeEventListener("mouseup", onMouseMoveHandler)

        }


    },[])

    useDragger(props.id)

    return <div id={props.id} className={classes["box-container"]} ref={boxRef}>

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