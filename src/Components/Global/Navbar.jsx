import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Navbar = ({ activo }) => {
    const [subSobremi, setSubSobreMi] = useState(false)
    const [subSocial, setSubSocial] = useState(false)
    const [subProyectos, setSubProyectos] = useState(false)
    const rutas = [
        "/",
        "/sobre-mi",
        "/redes-sociales",
        "/proyectos",
        "/contacto"
    ]
    const navigation = useNavigate()

    const hanldeClick = (id) => {
        if (activo != id) {
            navigation(rutas[id]);
        }
    }

    const handleC = () => {
        navigation("/")
    }

    const handleSectionClick = (route, section) => {
        navigation(`${route}`, { state: { scrollTo: section } });
    }

    return (
        <div className='fixed top-0 left-0 right-0 z-50 flex bg-[#92B509] h-16 items-center shadow-md'>
            <div className='flex flex-col md:flex-row mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full'>
                <img src='./images/logo_horizontal.png' onClick={handleC} className="cursor-pointer" />
                <div className='flex gap-10 justify-end w-full font-bold text-lg'>
                    <div className={`${activo == 0 ? " text-white" : ""} border border-transparent rounded-full px-3 cursor-pointer`} onClick={() => hanldeClick(0)}>Inicio</div>
                    <div onMouseEnter={() => setSubSobreMi(true)} onMouseLeave={() => setSubSobreMi(false)} className={`${activo == 1 ? " text-white" : ""} border border-transparent rounded-full px-3 cursor-pointer`} onClick={() => hanldeClick(1)}>Sobre Mí
                        {
                            subSobremi ?
                                <div className='absolute -ml-9 pt-2'>
                                    <div className='bg-[#6e8b00] text-gray-500 font-light text-xs flex flex-col gap-1 px-2 py-2 rounded-xl'>
                                        <div onClick={() => handleSectionClick("/sobre-mi", "introduccion")} className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200 cursor-pointer'>
                                            <span className="icon-[fluent--document-person-16-regular]"></span>
                                            <label className='cursor-pointer'>Biografía</label>
                                        </div>
                                        <div onClick={() => handleSectionClick("/sobre-mi", "logros")} className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200 cursor-pointer'>
                                            <span className="icon-[solar--cup-star-linear]"></span>
                                            <label className='cursor-pointer'>Logros</label>
                                        </div>
                                        <div onClick={() => handleSectionClick("/sobre-mi", "galeria")} className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200 cursor-pointer'>
                                            <span className="icon-[solar--gallery-round-line-duotone]"></span>
                                            <label className='cursor-pointer'>Galeria</label>
                                        </div>
                                        <div onClick={() => handleSectionClick("/sobre-mi", "blog")} className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200 cursor-pointer'>
                                            <span className="icon-[carbon--blog]"></span>
                                            <label className='cursor-pointer'>Blog</label>
                                        </div>
                                    </div>
                                </div>
                                : <></>
                        }
                    </div>
                    <div onMouseEnter={() => setSubSocial(true)} onMouseLeave={() => setSubSocial(false)} className={`${activo == 2 ? " text-white" : ""} border border-transparent rounded-full px-3 cursor-pointer`} onClick={() => hanldeClick(2)}>Redes Sociales
                        {
                            subSocial ?
                                <div className='absolute -ml-1.5 pt-2'>
                                    <div className='bg-[#6e8b00] text-gray-500 font-light text-xs flex flex-col gap-1 px-2 py-2 rounded-xl'>
                                        <div onClick={() => handleSectionClick("/redes-sociales", "contenido")} className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200 cursor-pointer'>
                                            <span className="icon-[material-symbols--search-insights-rounded]"></span>
                                            <label className='cursor-pointer'>Explora</label>
                                        </div>
                                        <div onClick={() => handleSectionClick("/redes-sociales", "metricas")} className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200 cursor-pointer'>
                                            <span className="icon-[nimbus--stats]"></span>
                                            <label className='cursor-pointer'>Metricas</label>
                                        </div>
                                    </div>
                                </div>
                                : <></>
                        }
                    </div>
                    <div onMouseEnter={() => setSubProyectos(true)} onMouseLeave={() => setSubProyectos(false)} className={`${activo == 3 ? " text-white" : ""} border border-transparent rounded-full px-3 cursor-pointer`} onClick={() => hanldeClick(3)}>Proyectos
                        {
                            subProyectos ?
                                <div className='absolute -ml-1.5 pt-2'>
                                    <div className='bg-[#6e8b00] text-gray-500 font-light text-xs flex flex-col gap-1 px-2 py-2 rounded-xl'>
                                        <div onClick={() => handleSectionClick("/proyectos", "Social")} className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200 cursor-pointer'>
                                            <span className="icon-[material-symbols--search-insights-rounded]"></span>
                                            <label className='cursor-pointer'>Impacto Social</label>
                                        </div>
                                        <div onClick={() => handleSectionClick("/proyectos", "Influencers")} className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200 cursor-pointer'>
                                            <span className="icon-[nimbus--stats]"></span>
                                            <label className='cursor-pointer'>Influencers</label>
                                        </div>
                                    </div>
                                </div>
                                : <></>
                        }
                    </div>
                    <div className={`${activo == 4 ? " text-white" : ""} border border-transparent rounded-full px-3 cursor-pointer`} onClick={() => hanldeClick(4)}>Contacto</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
