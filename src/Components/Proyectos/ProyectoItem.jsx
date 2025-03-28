import React from 'react';

const ProyectoItem = ({ imagen, enlace, mensaje, ubicacion }) => {
    const handleClick = () => {
        window.open(enlace, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="h-full">
            <div className="flex flex-col rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105 h-full bg-white">
                <div className="relative">
                    <img
                        src={imagen}
                        alt={mensaje}
                        className="h-56 sm:h-56 md:h-64 lg:h-96 w-full object-cover cursor-pointer"
                        onClick={handleClick}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
                        }}
                    />
                </div>
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                    <p className="text-base sm:text-lg font-medium mb-3 line-clamp-3">{mensaje}</p>
                    <div className="flex items-center mt-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <p className="text-xs sm:text-sm text-gray-600">{ubicacion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProyectoItem;
