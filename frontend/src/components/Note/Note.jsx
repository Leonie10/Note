import style from './Note.module.css'
import SvgAdd from '../UI/SVG/SvgAdd'
import { useState, useContext } from 'react';
import useDragger from '../../hooks/useDragger';
import { DraggerContext } from '../../store/dragger-context';

// animations 
// Hover header element : afficher chaque element (bouton elargir retrecir )
// resize custom hook 
// z-index change


const Note = (props) => {


    const id = props.id;

    useDragger(id)
    


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

                    <div className="content"></div>

                </section>


            </div>
    )
}

export default Note;