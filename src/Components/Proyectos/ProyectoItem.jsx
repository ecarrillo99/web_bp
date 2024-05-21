import React from 'react';

const ProyectoItem = ({imagen, enlace, mensaje, ubicacion}) => {
    return (
        <div className='flex flex-col w-1/3 gap-2 justify-center items-center'>
            <div className='h-64 cursor-pointer'>
                <img onClick={()=>{window.open(enlace)}} className='h-64 cursor-pointer' src={imagen}/>
            </div>
            <label className='text-xs font-thin text-center'>"{mensaje}"</label>
            <label className='text-xs font-'>{ubicacion}</label>
        </div>
    );
};

export default ProyectoItem;