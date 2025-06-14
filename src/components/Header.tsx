import { useMemo } from "react";
import { NavLink,useLocation } from "react-router-dom"
export default function Header() {
    const {pathname} = useLocation();
    const isHome = useMemo( () => pathname === '/',[pathname])
    console.log(pathname);
  return (
    <>
    <header className={isHome ? 'bg-[url(/bg.jpg)] bg-center bg-cover' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img className="w-32" src="/logo.svg" alt="" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink to="/" className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold': 'text-white uppercase font-bold'}>Home</NavLink>
                        <NavLink to="/favoritos" className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold': 'text-white uppercase font-bold'}>Favoritos</NavLink>                        
                    </nav>
                </div>
                {isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 shadow space-y-6 rounded-lg">
                        <div className="space-y-4">
                            <label 
                            htmlFor="ingredient" 
                            className="block text-white uppercase font-extrabold text-lg">Nombre o Ingredientes
                            </label>  
                            <input 
                            id="ingredient"
                            type="text"
                            name="ingredient"
                            className="w-full p-2 mt-2 rounded-lg focus:outline-none bg-white"
                            placeholder="Nombre o Ingredientes"
                            />
                        </div>
                        <div className="space-y-4">
                            <label 
                            htmlFor="ingredient" 
                            className="block text-white uppercase font-extrabold text-lg">
                               Categoria
                            </label>  
                            <select 
                            id="ingredient"
                            name="ingredient"
                            className="w-full p-3  rounded-lg focus:outline-non bg-white"
                            > <option value="">-- Selecione --</option></select>
                        </div>
                        <input 
                        type="submit" 
                        value="Buscar"
                        className="cursor-pointer text-white py-3 px-2 rounded-lg bg-orange-800 hover:bg-orange-900 font-extrabold w-full uppercase"

                        />
                    </form>
                )}
            </div>
        </header>
    
    
    </>  

)}
