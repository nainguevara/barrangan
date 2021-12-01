import { useRef, useEffect, useCallback } from "react"
import { Slider } from "./Slider"

import { v4 as uuidv4 } from 'uuid';


export const SliderShow = ({ img, controles = false, autoplay = true, velocidad = "1000", invertalo = "4000" }) => {

    const sliderShowRef = useRef( null )
    const intervaloSlideShow = useRef( null )

    const next = useCallback(() => {
            // Comprobar que el slideShow tenga elementos

            if ( sliderShowRef.current.children.length > 0 ) {
                // Obtener el primer elemento del slideShow
                const firstElement = sliderShowRef.current.children[0]
    
                // Establecemos la transicion para el slideShop
                sliderShowRef.current.style.transition = `${ velocidad }ms ease-out all`
    
                const sizeSlide = sliderShowRef.current.children[0].offsetWidth;
    
                // Movemos el sliderShow
                sliderShowRef.current.style.transform = `translateX(-${ sizeSlide }px)`
    
                const transition = () => {
    
                    // Reiniciamos la posicion del SlideShow
                    sliderShowRef.current.style.transition = "none";
                    sliderShowRef.current.style.transform = `translateX(0px)`;
                    
                    // Tomamos el primer elemento y lo mandamos al final
                    sliderShowRef.current.appendChild( firstElement )
                    sliderShowRef.current.removeEventListener("transitionend",transition);
                };
    
                // EventListener para cuando termina la animacion
                sliderShowRef.current.addEventListener("transitionend", transition);
            }
    },[ velocidad ])


    const previous = () => {
        // Comprobar que el slideShow tenga elementos
        if ( sliderShowRef.current.children.length > 0 ) {
            // Obtener el ultimo elemento del slideShow
            const lastElement = sliderShowRef.current.children[ sliderShowRef.current.children.length - 1 ];
            sliderShowRef.current.insertBefore( lastElement, sliderShowRef.current.firstChild );

            sliderShowRef.current.style.transition = "none";

            const sizeSlide = sliderShowRef.current.children[0].offsetWidth;
            sliderShowRef.current.style.transform = `translateX(-${ sizeSlide }px)`

            setTimeout(() => {
                sliderShowRef.current.style.transition = `${ velocidad }ms ease-out all`;
                sliderShowRef.current.style.transform = `translateX(0)`
            },30)
 
        }
    };

    
    useEffect(() => {
        if ( autoplay ) {
            intervaloSlideShow.current = setInterval(() => {
                next()
            }, invertalo);
    
            // eliminar los intervalos
    
            sliderShowRef.current.addEventListener("mouseenter", () => {
                clearInterval( intervaloSlideShow.current )
            })
    
            // Volvemos a poner el intervalo cuando saque el cursor 
            sliderShowRef.current.addEventListener("mouseleave", () => {
                intervaloSlideShow.current = setInterval(() => {
                    next()
                }, invertalo);
            })
        }
    },[ invertalo, autoplay, next ])
   
    
    return (
        <div className="relative m-w-vw overflow-hidden">

            <div className="flex flex-nowrap" ref={ sliderShowRef }>

                { img.map(( el, id ) => ( <Slider key={ uuidv4() } img={ img[id] }/> )) }
            </div>
            
            { controles && 
                <div className="absolute top-0 z-20 w-full h-full pointer-events-none">
                    <button className="buttom-slide absolute pointer-events-all z-30 border-0 text-7xl bg-none cursor-pointer outline-none w-14 h-full " onClick={ previous }>
                        <p>&#8249;</p>
                    </button>
                    <button className=" buttom-slide-r absolute pointer-events-all z-30  border-0 text-7xl bg-none cursor-pointer outline-none w-14 h-full  right-0" onClick={ next }>
                        <p>&#8250;</p>
                    </button>
                </div>
            }

        </div>

    )
}