import classes from './Note.module.css'
import SvgAdd from '../UI/SVG/SvgAdd'


const Note = () => {

    return (

            <main class="container">

                <section>
                    
                <div class="container">
  <header>
    <div className="btn"> 

        <span class="btn-delete"></span>
        <span class="btn-less"></span>
        <span class="btn-more"></span>
                          
    </div>
    
     <div>
     
        <SvgAdd class={classes["add-new-note"]}/>
        
    </div>
    
  </header>
    
    
   
</div>



                </section>

                  
                <section>
                    <div className="content"> texte...</div>
                </section>


            </main>

    )
}


export default Note;