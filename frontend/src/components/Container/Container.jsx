import { useContext, useState } from "react";
import Note from '../Note/Note'
import classes from './Container.module.css'
import { DraggerContext } from "../../store/dragger-context";}

import useDragger from "../../hooks/useDragger";

const Container = () => {

    draggerCtx = useContext(DraggerContext);

    const isDraggingItems = draggerCtx.selectedItems;

    // useDragger(itemsIds)

    return <main>
        <div className={classes.main}><Note id="first"/></div>
    </main>
}

export default Container;