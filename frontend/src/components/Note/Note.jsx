import style from './Note.module.css'
import SvgAdd from '../UI/SVG/SvgAdd'
import { useState } from 'react';


const Note = (props) => {

    let classes = `${style["note-container"]}`;


  
    return (
            <div className={classes} id={props.id} >

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