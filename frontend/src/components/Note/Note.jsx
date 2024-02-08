import classes from './Note.module.css'
import SvgAdd from '../UI/SVG/SvgAdd'


const Note = () => {

    return (
            <main className={classes.container}>

                <div>
                    
                <div >
                            <div className="btn"> 

                                <span className={classes["btn-delete"]}></span>
                                <span className={classes["btn-less"]}></span>
                                <span className={classes["btn-more"]}></span>
                                
                            </div>

                            <SvgAdd class={classes["add-new-note"]}/>
                </div>

                </div>

                  
                <section>
                    <div className="content"> texte...</div>
                </section>


            </main>
    )
}

export default Note;