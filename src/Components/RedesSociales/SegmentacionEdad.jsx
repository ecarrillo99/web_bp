import { BarChart } from '@tremor/react';
import React from 'react';

const SegmentacionEdad = () => {
    const segmentos = [
        {
            range: '13-17',
            porcentaje: 0.17,
        },
        {
            range: '18-24',
            porcentaje: 3.22,
        },
        {
            range: '25-34',
            porcentaje: 16.37,
        },
        {
            range: '35-44',
            porcentaje: 31.49,
        },
        {
            range: '45-54',
            porcentaje: 29.3,
        },
        {
            range: '55-64',
            porcentaje: 13.2,
        },
        {
            range: '65+',
            porcentaje: 6.25,
        },
    ]
    
    const valueFormatter = (number) => `${Intl.NumberFormat('us').format(number).toString()} %`;

    return (
        <div className='flex flex-col gap-6 w-1/2 p-10 items-center'>
            <label className='font-semibold text-xl'>Distribución por Edad</label>
            <div className='h-32 mb-3 w-full'>
                <BarChart    
                    className='h-40 w-full'
                    data={segmentos}    
                    showLegend={false}
                    showGridLines={false}
                    showAnimation={true}
                    index="range"    
                    categories={['porcentaje']}    
                    colors={['blue']}    
                    valueFormatter={valueFormatter}    
                />
            </div>
            <div className='flex flex-wrap text-sm text-gray-500'>
                {
                    segmentos.map((item)=>(
                        <div className='w-1/2 flex justify-between px-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='h-3 w-3 bg-blue-500 rounded-sm'/>
                                <label >{item.range} años</label>
                            </div>
                            <label >{item.porcentaje} %</label>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SegmentacionEdad;