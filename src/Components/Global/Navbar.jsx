import React, { act, useState } from 'react';
import { useNavigate } from 'react-router';

const Navbar = ({ activo }) => {
    const [subSobremi, setSubSobreMi] = useState(false)
    const [subSocial, setSubSocial] = useState(false)
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
    return (
        <div className='flex bg-[#92B509] h-16 items-center'>
            <div className='flex flex-col md:flex-row mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full'>
                <img src='./images/logo_horizontal.png' />
                <div className='flex gap-10 justify-end w-full font-bold text-lg'>
                    <div className={`${activo == 0 ? "bg-[#6e8b00] text-white" : ""} border border-transparent  rounded-full px-3 cursor-pointer`} onClick={() => hanldeClick(0)}>Inicio</div>
                    <div onMouseEnter={() => setSubSobreMi(true)} onMouseLeave={() => setSubSobreMi(false)} className={`${activo == 1 ? "bg-[#6e8b00] text-white" : ""} border border-transparent  rounded-full px-3 cursor-pointer`} onClick={() => hanldeClick(1)}>Sobre Mí
                        {
                            subSobremi ?
                                <div className='absolute -ml-9 pt-2'>
                                    <div className='bg-[#6e8b00] text-gray-500 font-light text-xs flex flex-col gap-1 px-2 py-2 rounded-xl'>
                                        <a href='/sobre-mi#biografia' className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200'>
                                            <span className="icon-[fluent--document-person-16-regular]"></span>
                                            <label className='cursor-pointer'>Biografía</label>
                                        </a>
                                        <a href='/sobre-mi#logros' className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200'>
                                            <span className="icon-[solar--cup-star-linear]"></span>
                                            <label className='cursor-pointer'>Logros</label>
                                        </a>
                                        <a href='/sobre-mi#reconocimientos' className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200'>
                                            <span className="icon-[ph--medal-light]"></span>
                                            <label className='cursor-pointer'>Reconocimientos</label>
                                        </a>
                                        <a href='/sobre-mi#entrevistas' className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200'>
                                            <span className="icon-[ph--chats-light]"></span>
                                            <label className='cursor-pointer'>Entrevistas</label>
                                        </a>
                                        <a href='/sobre-mi#galeria' className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200'>
                                            <span className="icon-[solar--gallery-round-line-duotone]"></span>
                                            <label className='cursor-pointer'>Galeria</label>
                                        </a>
                                        <a href='/sobre-mi#blog' className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200'>
                                            <span className="icon-[carbon--blog]"></span>
                                            <label className='cursor-pointer'>Blog</label>
                                        </a>
                                    </div>
                                </div>
                                : <></>
                        }
                    </div>
                    <div onMouseEnter={() => setSubSocial(true)} onMouseLeave={() => setSubSocial(false)}  className={`${activo == 2 ? "bg-[#6e8b00] text-white" : ""} border border-transparent  rounded-full px-3 cursor-pointer`} onClick={() => hanldeClick(2)}>Redes Sociales
                    {
                            subSocial ?
                                <div className='absolute -ml-1.5  pt-2'>
                                    <div className='bg-[#6e8b00] text-gray-500 font-light text-xs flex flex-col gap-1 px-2 py-2 rounded-xl'>
                                        <a href='/redes-sociales#explora' className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200'>
                                            <span className="icon-[material-symbols--search-insights-rounded]"></span>
                                            <label className='cursor-pointer'>Explora</label>
                                        </a>
                                        <a href='/redes-sociales#metricas' className='bg-white flex gap-1 items-center w-32 py-1 rounded-full px-2 hover:bg-gray-200'>
                                            <span className="icon-[nimbus--stats]"></span>
                                            <label className='cursor-pointer'>Metricas</label>
                                        </a>
                                    </div>
                                </div>
                                : <></>
                        }
                    </div>
                    <div className={`${activo == 3 ? "bg-[#6e8b00] text-white" : ""} border border-transparent  rounded-full px-3 cursor-pointer`} onClick={() => hanldeClick(3)}>Proyectos</div>
                    <div className={`${activo == 4 ? "bg-[#6e8b00] text-white" : ""} border border-transparent  rounded-full px-3 cursor-pointer`} onClick={() => hanldeClick(4)}>Contacto</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;