import React from 'react';

const Footer = () => {
    return (
        <div className='pb-12 bg-[#00182b] flex flex-col '>
            <div className='flex flex-col md:flex-row mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full text-white gap-20 justify-between'>
                <div className='flex '>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-sm mb-3'>Información</label>
                        <a className='text-xs'>Redes sociales</a>
                        <a className='text-xs'>Sobre mi</a>
                        <a className='text-xs'>Logros</a>
                        <a className='text-xs'>Entrevistas y medios</a>
                        <a className='text-xs'>Galeria</a>
                        <a className='text-xs'>Blog</a>
                    </div>
                </div>
                <div className='flex '>
                    <div className='flex flex-col items-center'>
                        <label className='font-semibold text-sm mb-3'>Únete a nuestra comunidad</label>
                        <div className='flex items-center gap-5'>
                            <span className="icon-[mdi--facebook] h-9 w-9"></span>
                            <span className="icon-[mage--instagram-circle] h-9 w-9"></span>
                            <div className='bg-white rounded-full h-[29px] w-[29px] flex items-center justify-center '>
                                <span className="icon-[mdi--whatsapp] text-[#00182b] h-5 w-5"></span>
                            </div>
                            <span className="icon-[mage--tiktok-circle] h-9 w-9"></span>
                            <span className="icon-[entypo-social--youtube-with-circle] h-8 w-8"></span>
                            <span className="icon-[entypo-social--linkedin-with-circle] h-8 w-8"></span>
                            <div className='bg-white rounded-full h-[29px] w-[29px] flex items-center justify-center '>
                                <span className="icon-[fa6-brands--x-twitter] text-[#00182b] h-5 w-5"></span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            <label className='text-center text-white text-xs w-full'>Copyright © 2024. Bernardo Polo Andrade. Todos los derechos reservados</label>
        </div>
    );
};

export default Footer;