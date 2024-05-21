import React from 'react';

const ContactoForm = () => {
    return (
        <div className='bg-gray-300 '>
            <div className='flex flex-col md:flex-row mx-auto max-w-6xl sm:px-6 lg:px-8 w-full gap-16 pt-10'>
                <div className='w-6/12 flex items-end'>
                    <img className='h-[440px] object-contain' src='./images/contacto_image.png' />
                </div>
                <div className='w-6/12 flex flex-col gap-4 item'>
                    <label className='font-semibold text-2xl' >Envía tu mensaje</label>
                    <input className='bg-transparent border-0 border-b focus:outline-none focus:ring-0 focus:border-b-' placeholder='*Nombre'></input>
                    <input className='bg-transparent border-0 border-b focus:outline-none focus:ring-0 focus:border-b-' placeholder='*Email'></input>
                    <input className='bg-transparent border-0 border-b focus:outline-none focus:ring-0 focus:border-b-' placeholder='*Mensaje'></input>
                    <div className='w-full flex justify-end pt-16'>
                        <button className='text-white bg-[#00182b] px-7 py-1 rounded-md font-light'>ENVÍAR MENSAJE</button>
                    </div>
                    <div className='flex flex-col text-gray-600 font-medium pt-8'>
                        <label>Teléfono</label>
                        <label>+593 7 413 4500</label>
                    </div>
                    <div className='flex flex-col text-gray-600 font-medium pt-2 pb-8'>
                        <label>Dirección</label>
                        <label>El Batan 5-13 y Esmeraldas</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactoForm;