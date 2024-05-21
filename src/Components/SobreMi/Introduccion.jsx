import React from 'react';

const Introduccion = () => {
    return (
        <div id='biografia' className='flex flex-col md:flex-row mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full mt-7'>
            <div className='w-1/2'>
                <img src='./images/sobre-mi.png'></img>
            </div>
            <div className='w-1/2 flex flex-col gap-2 justify-center'>
                <label className='text-2xl font-semibold'>Sobre Mí</label>
                <label className='text-2xl font-bold italic text-[#769842]'>"Se cuenta una historia, que debe ser interesante, atractiva y que perdure con los años."</label>
                <p className='text-justify'>Bernardo Polo Andrade empresario cuencano de 53 años. Hombre visionario, con más de 26 años de experiencia en la promoción de la hotelería, turismo y negocios en el Ecuador y Latinoamérica.
                    <div className='h-3'/>
                    Reconocido por su habilidad disruptiva para identificar oportunidades innovadoras y sostenibles que busquen promover el turismo en diferentes destinos del Ecuador.
                    <div className='h-3'/>
                    Conocido como el "Hacker del Turismo", al ser creador de contenidos de valor, comprometido con hacer visibles a los emprendimientos para impactar positivamente en la micro-economía del país, y al mismo tiempo, ofrecer información útil y relevante para los turistas que quieren conocer el país de los cuatro mundos.
                </p>
            </div>
        </div>
    );
};

export default Introduccion;