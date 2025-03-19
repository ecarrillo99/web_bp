import React from 'react';

const Footer = () => {
    return (
        <div className='relative bg-gradient-to-b from-[#00182b] to-[#002d4d] pt-8 pb-6'>
            <div className="absolute top-0 left-0 w-full overflow-hidden">
                <svg className="relative block w-full h-10" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white opacity-10"></path>
                </svg>
            </div>

            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-white mb-2">Bernardo Polo Andrade</h2>
                    <p className="text-blue-300 text-sm italic">Inspirando a través de mis experiencias</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 text-white'>
                    <div className='space-y-6'>
                        <div>
                            <h3 className='font-semibold text-lg mb-4 border-b border-blue-500 pb-2'>Navegación</h3>
                            <ul className='space-y-2 grid grid-cols-1 md:grid-cols-2 gap-0'>
                                <li className='hover:text-blue-300 transition-colors duration-300'>
                                    <a href="#" className='text-sm flex items-center'>
                                        <span className="icon-[heroicons--home-solid] w-4 h-4 mr-2"></span>
                                        Inicio
                                    </a>
                                </li>
                                <li className='hover:text-blue-300 transition-colors duration-300'>
                                    <a href="/#/sobre-mi" className='text-sm flex items-center'>
                                        <span className="icon-[heroicons--user-solid] w-4 h-4 mr-2"></span>
                                        Sobre mí
                                    </a>
                                </li>
                                <li className='hover:text-blue-300 transition-colors duration-300'>
                                    <a href="/#/redes-sociales" className='text-sm flex items-center'>
                                        <span className="icon-[heroicons--chart-bar-solid] w-4 h-4 mr-2"></span>
                                        Redes Sociales
                                    </a>
                                </li>
                                <li className='hover:text-blue-300 transition-colors duration-300'>
                                    <a href="/#/proyectos" className='text-sm flex items-center'>
                                        <span className="icon-[heroicons--briefcase-solid] w-4 h-4 mr-2"></span>
                                        Proyectos
                                    </a>
                                </li>
                                <li className='hover:text-blue-300 transition-colors duration-300'>
                                    <a href="/#/contacto" className='text-sm flex items-center'>
                                        <span className="icon-[heroicons--chat-bubble-left-right-solid] w-4 h-4 mr-2"></span>
                                        Contacto
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div>
                            <h3 className='font-semibold text-lg mb-4 border-b border-blue-500 pb-2'>Sígueme</h3>
                            <div className='grid grid-cols-3 gap-4'>
                                <div className='relative rounded-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-1'>

                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700"></div>

                                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white bg-opacity-20 z-10"></div>

                                    <div className="relative z-2 flex flex-col items-center justify-center p-3">
                                        <span className="icon-[mdi--facebook] h-6 w-6 text-white"></span>
                                        <span className="text-xs mt-1 text-white">Facebook</span>
                                    </div>

                                    <a href="https://www.facebook.com/bernardopolopolito" className="absolute top-0 left-0 w-1/2 h-full z-20 hover:bg-blue-800 hover:bg-opacity-50 transition-colors duration-300"></a>
                                    <a href="https://www.facebook.com/@bernardo.polo.94" className="absolute top-0 right-0 w-1/2 h-full z-20 hover:bg-blue-800 hover:bg-opacity-50 transition-colors duration-300"></a>
                                </div>

                                <div className='relative rounded-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-1'>

                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-600"></div>

                                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white bg-opacity-20 z-10"></div>

                                    <div className="relative z-2 flex flex-col items-center justify-center p-3">
                                        <span className="icon-[mage--instagram-circle] h-6 w-6 text-white"></span>
                                        <span className="text-xs mt-1 text-white">Instagram</span>
                                    </div>

                                    <a href="https://www.instagram.com/bernardopolopolito" className="absolute top-0 left-0 w-1/2 h-full z-20 hover:bg-purple-700 hover:bg-opacity-50 transition-colors duration-300"></a>
                                    <a href="https://www.instagram.com/bernardopoloa/" className="absolute top-0 right-0 w-1/2 h-full z-20 hover:bg-pink-500 hover:bg-opacity-50 transition-colors duration-300"></a>
                                </div>

                                <a href="https://x.com/bernardopolo10" className='flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-600 p-3 rounded-lg hover:from-gray-700 hover:to-gray-500 transition-all duration-300 transform hover:-translate-y-1'>
                                    <span className="icon-[mage--x] h-6 w-6"></span>
                                    <span className="text-xs mt-1">X</span>
                                </a>
                                <a href="https://www.tiktok.com/@bernardopolopolito" className='flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black p-3 rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:-translate-y-1'>
                                    <span className="icon-[mage--tiktok-circle] h-6 w-6"></span>
                                    <span className="text-xs mt-1">TikTok</span>
                                </a>
                                <a href="https://youtube.com/@bernardopolopolito" className='flex flex-col items-center justify-center bg-gradient-to-br from-red-800 to-red-600 p-3 rounded-lg hover:from-red-700 hover:to-red-500 transition-all duration-300 transform hover:-translate-y-1'>
                                    <span className="icon-[entypo-social--youtube-with-circle] h-6 w-6"></span>
                                    <span className="text-xs mt-1">YouTube</span>
                                </a>
                                <a href="https://www.linkedin.com/in/bernardo-polo-polito-70560250" className='flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 p-3 rounded-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1'>
                                    <span className="icon-[entypo-social--linkedin-with-circle] h-6 w-6"></span>
                                    <span className="text-xs mt-1">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-900 my-8 opacity-30"></div>

                <div className="flex flex-col sm:flex-row justify-between items-center text-white">
                    <p className="text-xs opacity-70 mb-2 sm:mb-0">
                        Copyright © {new Date().getFullYear()} · Bernardo Polo Andrade · Todos los derechos reservados
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-xs opacity-70 hover:opacity-100 transition-opacity duration-300">Política de Privacidad</a>
                        <a href="#" className="text-xs opacity-70 hover:opacity-100 transition-opacity duration-300">Términos y Condiciones</a>
                        <a href="#" className="text-xs opacity-70 hover:opacity-100 transition-opacity duration-300">Contacto</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
