import React from 'react';

const Medidor = () => {
    return (
        <div className='bg-gray-200 p-5 mx-3 flex flex-col rounded-xl gap-3'>
            <label className='font-semibold text-sm'>SEGUIDORES</label>
            <div className='flex justify-between'>
                <div className='flex gap-1'>
                    <label className='text-4xl font-semibold'>184,2 K</label>
                    <span className="icon-[ph--arrow-up] h-10 w-10 "></span>
                </div>
                <div className='w-1/2 flex text-white font-semibold border-2 border-black h-10'>
                    <div className='w-[72%] bg-[#db5781] flex items-center justify-center'>74%</div>
                    <div className='w-[17%] bg-[#3e8ba4] flex items-center justify-center'>16%</div>
                    <div className='w-[11%] bg-[#60605f] flex items-center justify-center'>10%</div>
                </div>
            </div>
        </div>
    );
};

export default Medidor;