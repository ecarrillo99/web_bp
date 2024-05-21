import { DonutChart, Legend } from '@tremor/react';
import React from 'react';



const SegmentacionGenero = () => {
    const segmentos = [
        {
            name: 'Hombre',
            percent: 58.78,
        },
        {
            name: 'Mujer',
            percent: 38.48,
        },
        {
            name: 'Desconocido',
            percent: 2.74,
        },
    ]
    
    const valueFormatter = (number) => `${Intl.NumberFormat('us').format(number).toString()} %`;

    return (
        <div className='flex flex-col gap-6 w-1/2 p-10 items-center'>
            <label className='font-semibold text-xl'>Distribución por Género</label>
            <div className="flex flex-col items-center justify-center ">
                <DonutChart 
                    data={segmentos} 
                    category="percent" 
                    index="name" 
                    valueFormatter={valueFormatter} 
                    showAnimation={true}
                    colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']} 
                    className="w-40" />        
                <Legend 
                    categories ={segmentos.map((segmento, index) => (
                        <div className='w-56 flex justify-between'>
                            <label>{segmento.name}</label>
                            <label>{segmento.percent} %</label>
                        </div>
                      ))}
                    colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                    className="w-64 " />      
                </div>
        </div>
    );
};

export default SegmentacionGenero;