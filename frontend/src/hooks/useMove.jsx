import { useEffect, useRef } from "react";

function useMove () {
    const containerRef = useRef(null);
    const elementRef = useRef(null);

    useEffect(() => {
        if(!containerRef.current || !elementRef.current ) return;

        const container = containerRef.current;
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

    return {
        containerRef,
        elementRef
    }
}