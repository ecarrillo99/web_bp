import React from 'react';

const SeguidoresRed = ({red, seguidores, color, icono}) => {
    return (
        <div className={`w-1/4 flex justify-between items-center bg-[${color}] rounded-xl p-3 text-white`}>
            <div>
                <img className='h-12' src={icono}/>
            </div>
            <div className='flex flex-col items-center justify-center gap-6'>
                <label className='text-xs font-semibold'>{red}</label>
                <label className='text-3xl font-semibold'>{seguidores}</label>
            </div>
            <div>
                <span className="icon-[ph--arrow-up] h-10 w-10"></span>
            </div>
        </div>
    );
};

export default SeguidoresRed;