import React, { useEffect, useState } from 'react';
import Config from '../../Config/config';

const Destacado = ({ fecha, linkPost, imagePost, mensajePost, linkPerfil, iconoRed, colorRed }) => {

    return (
        <div className='w-1/3 flex flex-col'>
            <div className='flex justify-between items-center'>
                <img className='h-16 w-16 rounded-full border-4 border-[#96c121]' src={"./images/avatar.jpg"} />
                <div className='flex flex-col justify-center'>
                    <label className='text-sm font-semibold'>Bernardo Polo Polito</label>
                    <label className='text-xs'>{fecha}</label>
                </div>
                {
                    iconoRed
                }
            </div>
            <div className='mt-5'>
                <img onClick={() => { window.open(linkPost) }} className='h-[250px] w-full object-cover rounded-lg cursor-pointer' src={imagePost} />
            </div>
            <div className='mt-4'>
                <p className='text-xs line-clamp-3 text-gray-500 font-extralight'>
                    {mensajePost}
                </p>
            </div>
            <div className='flex w-full justify-center items-center mt-6'>
                <button className={`bg-[${colorRed}] text-white px-16 py-1 rounded-md`} onClick={() => { window.open(linkPerfil) }}>
                    SEGUIR
                </button>
            </div>
        </div>
    );
};

export default Destacado;


