import { useRef } from "react";
import scrollBlock from "./hooks/scrollBlock"

export const MenuMobile = () => {

    const menuMobile = useRef();

    const [blockScroll, allowScroll] = scrollBlock();

    const handlerMenu = (open=false) => {
        menuMobile.current.classList.toggle("-translate-x-full")
        open ? blockScroll() : allowScroll()
 
    }

    return (
        <div className="col-span-1 md:hidden">
            <div className="flex justify-center items-center h-[100%]">
                <i class="fas fa-bars text-[2rem] cursor-pointer" onClick={()=> handlerMenu(true)}></i>  
            </div>
            <div className="bg-green-main absolute left-0 top-0 -translate-x-full min-h-full min-w-full duration-300 ease-in-out z-50 " ref={menuMobile}>
                <div className="h-[100px]">
                    <i class="fas fa-times text-[2rem] cursor-pointer text-white pl-4 pt-4" onClick={() => handlerMenu(false) }></i>
                </div>
                <div className="flex justify-center items-center h-screen ">
                    <div className="flex flex-col text-center">
                        <a href="#quienes-somos" className="text-[2rem] font-Roboto text-white font-bold"  onClick={() => handlerMenu(false) }>Quienes somos</a>
                        <a href="#producto" className="text-[2rem] font-Roboto text-white font-bold"  onClick={() => handlerMenu(false) }>Productos</a>
                        <a href="#contacto" className="text-[2rem] font-Roboto text-white font-bold"  onClick={() => handlerMenu(false) }>Contacto</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
