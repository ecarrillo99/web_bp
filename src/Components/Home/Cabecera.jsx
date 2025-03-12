import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cabecera = () => {
    const navigate = useNavigate();

    const navigateToSection = (section) => {
        navigate('/sobre-mi', { state: { scrollTo: section } });
    };

    return (
        <div className='flex flex-col md:flex-row mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full mt-7'>
            <div className='flex flex-col w-1/2 items-center justify-center'>
                <div>
                    <img className='h-36' src='./images/logo_vertical.png' alt="Logo Vertical"/>
                </div>
                <div className='h-10'/>
                <label className='text-2xl font-light text-gray-700'>Hacker del Turismo</label>
                <label className='text-2xl font-light text-gray-700'>Emprendedor disruptivo</label>
                <label className='text-2xl font-light text-gray-700'>Bloguero</label>
                <div className='h-10'/>
                <p className='text-justify text-sm text-gray-600'>Bernardo Polo Andrade empresario cuencano de 53 años. Hombre visionario, con más de 26 años de experiencia en la promoción de la hotelería, turismo y negociación en el Ecuador y Latinoamérica.</p>
                <div
                    className='flex mt-3 items-center w-full cursor-pointer'
                    onClick={() => navigateToSection('logros')}
                >
                    <img className='h-10' src='./images/galeria_icon.png' alt="Galería"/>
                    <label className='cursor-pointer'>Fotografías memorables</label>
                </div>
                <div
                    className='flex mt-3 items-center w-full cursor-pointer'
                    onClick={() => navigateToSection('galeria')}
                >
                    <img className='h-10' src='./images/entrevistas_icon.png' alt="Entrevistas"/>
                    <label className='cursor-pointer'>Entrevistas y conversaciones destacadas</label>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-1/2'>
                <img className='h-[370px]' src='./images/foto_inicio.png' alt="Foto de inicio"/>
                <label className='text-xs max-w-[400px] mt-4 text-gray-500 text-center'>"Se cuenta una historia, que debe ser interesante, atractiva y que perdure con los años."</label>
            </div>
        </div>
    );
};

export default Cabecera;
