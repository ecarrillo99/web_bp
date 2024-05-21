import React from 'react';
import Entradas from './Entradas';

const Blog = () => {
    return (
        <div id='blog' className='flex flex-col gap-6 mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full mt-7'>
            <label className='text-2xl font-semibold -mb-3'>Blog</label>
            <Entradas></Entradas>
        </div>
    );
};

export default Blog;