import React from 'react';

const ProyectoItem = ({ imagen, enlace, mensaje, ubicacion }) => {
    const handleClick = () => {
        window.open(enlace, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="w-full md:w-full p-4">
            <div className="flex flex-col rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105 h-full">
                <div className="relative">
                    <img
                        src={imagen}
                        alt={mensaje}
                        className="h-80 w-full object-cover cursor-pointer"
                        onClick={handleClick}
                    />
                </div>
                <div className="p-6 bg-white flex-grow flex flex-col justify-between">
                    <p className="text-lg font-medium mb-3">{mensaje}</p>
                    <div className="flex items-center mt-3">
                        <svg className="w-5 h-5 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <p className="text-sm text-gray-600">{ubicacion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProyectoItem;
