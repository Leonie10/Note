
const ref = useRef(null)
const refLeft = useRef(null)
const refTop = useRef(null)
const refRight = useRef(null)
const refBottom = useRef(null)

useEffect(() => {

    const resizableEle = ref.current;
    const styles = window.getComputedStyle(resizableEle)
    let width = parseInt(styles.width, 10)
    let height = parseInt(style.height, 10)
    let x = 0;
    let y = 0;

    resizableEle.style.top = "50px"
    resizableEle.style.left = "50px"

    // Rigth resize 

    const onMouseMoveRightResize = (e) => {
        const dx = e.clientX - x;
        x = e.clientX;
        width = width + dx;
        resizableEle.style.width = `${width}px`;

    }

    const onMouseUpRightResize = (e) => {
        document.removeEventListener("mousemove", onMouseMoveRightResize)

    }

    const onMouseDownRightResize = (e) => {
        x = e.clientX;
        resizableEle.style.left = styles.left;
        resizableEle.style.right = null;
        document.addEventListener("mousemove", onMouseMoveRightResize)
        document.addEventListener("mouseup", onMouseUpRightResize)

    }
    // 8.30 min

    // Add mouse down event listener
    const resizerRight = refRight.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize) 

    return () => {
        resizerRight.removeEventListener("mousedown", onMouseDownRightResize )
    }


}, [])


// const Box = (props) => {
    
//     const boxRef= useRef(); 
  
//     const leftRef = useRef()
//     const topRef = useRef()
//     const rightRef = useRef()
//     const bottomRef = useRef()
    
//     const {mouseDownHandler, mouseMoveHandler, mouseUpHandler} = useResize(boxRef, {side: 'left', ref: leftRef});
  
   
    
//     return <div className={classes["box-container"]} ref={boxRef}>

//         <div  ref={leftRef} className={`${classes.resizer} ${classes.rl}`} onMouseDown={} onMouseMove={} onMouseUp={} ></div>
//         <div  ref={topRef} className={`${classes.resizer} ${classes.rt}` } ></div>
//         <div  ref={rightRef} className={`${classes.resizer} ${classes.rr}`} ></div>
//         <div  ref={bottomRef} className={`${classes.resizer} ${classes.rb}`} ></div>

//         <div className={`${classes.drag}`}>
//             {props.children}
//         </div>
//     </div>
// }

// const useResize = (boxRef, borderData) => {
//   const boxRef = boxRef.current;
//   const borderRef = borderData.ref.current;
  
  
  
//   // fonction pour coté droit (down, move, up)

//     useEffect(() => {
    
      
      
//     })
    
    

// }



// 19/02

// const Box = (props) => {
    
//     const boxRef= useRef(); 
  
//     const leftRef = useRef()
//     const topRef = useRef()
//     const rightRef = useRef()
//     const bottomRef = useRef()
    
//     const {mouseDownHandler, mouseMoveHandler, mouseUpHandler} = useResize(boxRef, {side: 'left', ref: leftRef});
  
   
    
//     return <div className={classes["box-container"]} ref={boxRef}>

//         <div  ref={leftRef} className={`${classes.resizer} ${classes.rl}`} onMouseDown={} onMouseMove={} onMouseUp={} ></div>
//         <div  ref={topRef} className={`${classes.resizer} ${classes.rt}` } ></div>
//         <div  ref={rightRef} className={`${classes.resizer} ${classes.rr}`} ></div>
//         <div  ref={bottomRef} className={`${classes.resizer} ${classes.rb}`} ></div>

//         <div className={`${classes.drag}`}>
//             {props.children}
//         </div>
//     </div>
// }



// const useResize = (boxRef, borderData) => {

//   const boxRef = boxRef.current;
//   const borderRef = borderData.ref.current;
//   const sideName = borderData.side;
  
//   const styles = window.getComputedStyle(boxRef)
//   let width = parseInt(styles.width, 10)
//   let height = parseInt(styles.height, 10)
//   let x = 0;
//   let y = 0;
       
  
//   let moveLeft = undefined;
//   let moveTop = undefined;
//   let moveRight = undefined;
//   let moveBottom = undefined;
  
  
//   // fonction pour coté droit (down, move, up)
    
//      const onMouseDownHandler = (e) => {
//         x = e.clientX;
//         boxRef.style.left = styles.left;
//         boxRef.style.right= null;
//      }
     
//      const onMouseMoveHandler = (e) => {
//         const dx = e.clientX - x;
//         x = e.clientX;
//         width = width + dx;
//         boxRef.style.width = `${width}px`;
//      }
     
//      const onMouseUpHandler = (e) => {
   
//      }
    
//     return {
//     onMouseDownHandler, 
//     onMouseMoveHandler, 
//     onMouseUpHandler,
//     }
    

// }