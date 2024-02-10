import { useEffect, useRef } from "react";

function useDragger () {

    const isClicked = useRef(false)
    const coords = useRef({
            startX: 0,
            startY: 0,
            lastX: 0,
            lastY: 0
        })


    useEffect(() => {

        if(!containerRef.current || !elementRef.current ) return;

        const container = containerRef.current;
        const element = elementRef.current;

        
        
        const onMouseDown = (e) => {
            isClicked.current = true;
            coords.current.startX = e.clientX; 
            coords.current.startY = e.clientY;
        }

        const onMouseUp = (e) => {
            isClicked.current = false;

            coords.current.lastX = element.offsetLeft;
            coords.current.lastY = element.offsetTop;
        }

        const onMouseMove = (e) => {

            if(!isClicked) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX; 
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            element.style.top = `${nextX}px`
            element.style.left = `${nextY}px`

        }


       
        element.addEventListenner('mousedowm', onMouseDown)
        element.addEventListenner('mouseup', onMouseUp)
        container.addEventListenner('mousemove', onMouseMove)


        const cleanUp = () => {
            element.removeEventListener('mousedown', onMouseDown)
            element.removeEventListener('mouseup', onMouseUp)
            container.removeEventListener('mousemove', onMouseMove)
        }

        return cleanUp;
    }, [])

    return {
        containerRef,
        elementRef
    }
}

export default useDragger;