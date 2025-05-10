import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cabecera = () => {
    const navigate = useNavigate();
    
    const navigateToSection = (section) => {
        navigate('/sobre-mi', { state: { scrollTo: section } });
    };
    
    return (
        <div className="cabecera-container flex flex-col md:flex-row w-full gap-6 p-4">
            <div className="left-column md:w-1/2 w-full space-y-4">
                <div className="profile-info">
                    <h1 className="text-2xl md:text-3xl font-bold">Hacker del Turismo</h1>
                    <h2 className="text-xl md:text-2xl">Emprendedor disruptivo</h2>
                    <h2 className="text-xl md:text-2xl">Bloguero</h2>
                </div>
                
                <p className="text-base md:text-lg">
                    Bernardo Polo Andrade empresario cuencano de 53 años. Hombre visionario, 
                    con más de 26 años de experiencia en la promoción de la hotelería, 
                    turismo y negociación en el Ecuador y Latinoamérica.
                </p>
                
                <button 
                    className="btn btn-primary text-base md:text-lg hover:bg-blue-600"
                    onClick={() => navigateToSection('logros')}
                >
                    Fotografías memorables
                </button>
                
                <button 
                    className="btn btn-secondary text-base md:text-lg hover:bg-gray-600"
                    onClick={() => navigateToSection('galeria')}
                >
                    Entrevistas y conversaciones destacadas
                </button>
            </div>
            
            <div className="right-column md:w-1/2 w-full flex items-center justify-center">
                <blockquote className="text-xl md:text-2xl italic text-center">
                    "Se cuenta una historia, que debe ser interesante, atractiva y que perdure con los años."
                </blockquote>
            </div>
        </div>
    );
};

export default Cabecera;