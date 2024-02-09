import style from './Note.module.css'
import SvgAdd from '../UI/SVG/SvgAdd'
import { useState } from 'react';


const Note = (props) => {

    let classes = `${style["note-container"]}`;

   const elementRef = useRef(null);

   useEffect(() => {
       if(!containerRef.current || !elementRef.current ) return;

       const container = props.containerRef.current;
       const element = elementRef.current;
       
       const onMouseDown = () => {
           console.log('clicked')
       }
      
       element.addEventListenner('mousedowm', onMouseDown)


       const cleanUp = () => {
           element.removeEventListener('mousedown', onMouseDown)
       }

       return cleanUp;
   })


    return (
            <div className={classes} >

                <div >
                    
                    <div className={style["note-container_header"]}>
                                <div className="btn"> 

                                    <span className={style["btn-delete"]}></span>
                                    <span className={style["btn-less"]}></span>
                                    <span className={style["btn-more"]}></span>
                                    
                                </div>

                                <SvgAdd class={style["add-new-note"]}/>
                    </div>

                </div>

                  
                <section>

                    <div className="content"> texte...</div>

                </section>


            </div>
    )
}

export default Note;