import style from './Note.module.css'

import SvgAdd from '../UI/SVG/SvgAdd'
import useDragger from '../../hooks/useDragger';
import { useEffect, useRef } from 'react';


// if mouse is on note 
// if mouse is position < border
// isDragging : true 
// else is resizing 


const Note = (props) => {

    const ref = useRef(null)
    const refLeft = useRef(null)
    const refTop = useRef(null)
    const refRight = useRef(null)
    const refBottom = useRef(null)


    const id = props.id;

    useDragger(id)

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
    
   
    return (
  
            <div className={style["note-container"]} id={props.id} >
                <div ref={ref}  className={style.resizable}>
                    <div ref={refLeft}  className={`${style.resizer} ${style.resizerL}`}></div>
                    <div ref={refTop}  className={`${style.resizer} ${style.resizerT}`}></div>
                    <div  ref={refRight} className={`${style.resizer} ${style.resizerR}`}></div>
                    <div ref={refBottom}  className={`${style.resizer} ${style.resizerB}`}></div>
                </div>
                    
                <div className={style["note-container_header"]}>
                                <div className="btn"> 

                                    <span className={style["btn-delete"]}></span>
                                    <span className={style["btn-less"]}></span>
                                    <span className={style["btn-more"]}></span>
                                    
                                </div>

                                <SvgAdd class={style["add-new-note"]}/>
                </div>


                  
                <div>

                    <div className="content"></div>

                </div>


            </div>
    )
}

export default Note;