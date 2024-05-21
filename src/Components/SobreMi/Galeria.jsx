import React from 'react';
import Entrevistas from './Entrevistas';
import Fotografias from './Fotografias';

const Galeria = () => {
    return (
        <div className='flex flex-col gap-6 mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full mt-7'>
            <label className='text-2xl font-semibold -mb-3'>Galería</label>
            <Entrevistas></Entrevistas>
            <Fotografias></Fotografias>
        </div>
    );
};

export default Galeria;