import { DonutChart, Legend } from '@tremor/react';
import React, { useState, useEffect } from 'react';

const SegmentacionDashboard = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Datos de género
    const datosGenero = [
        {
            name: 'Hombre',
            percent: 58.78,
            icon: "👨",
        },
        {
            name: 'Mujer',
            percent: 38.48,
            icon: "👩",
        },
        {
            name: 'Desconocido',
            percent: 2.74,
            icon: "❓",
        },
    ];

    // Datos de ciudades
    const datosCiudades = [
        {
            name: 'Cuenca',
            percent: 32.5,
            icon: "🏙️",
        },
        {
            name: 'Guayaquil',
            percent: 18.3,
            icon: "🌆",
        },
        {
            name: 'Manabi',
            percent: 15.7,
            icon: "🌃",
        },
        {
            name: 'Quito',
            percent: 10.2,
            icon: "🏛️",
        },
        {
            name: 'Loja',
            percent: 23.3,
            icon: "🌐",
        },
    ];

    const colorMapGenero = {
        'Hombre': '#3b82f6',
        'Mujer': '#ec4899',
        'Desconocido': '#9ca3af'
    };

    const colorMapCiudades = {
        'Cuenca': '#0ea5e9',
        'Guayaquil': '#10b981',
        'Manabi': '#8b5cf6',
        'Quito': '#f59e0b',
        'Loja': '#6b7280'
    };

    const valueFormatter = (number) => `${Intl.NumberFormat('es-MX').format(number).toString()} %`;

    // Componente reutilizable para cada sección de donut
    const DonutSection = ({ title, data, colorMap, totalLabel }) => (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg mb-6">
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                    {title}
                </h3>

                <div className={`flex flex-col md:flex-row items-center justify-between gap-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-full md:w-1/2 max-w-xs mx-auto">
                        <DonutChart
                            data={data}
                            category="percent"
                            index="name"
                            valueFormatter={valueFormatter}
                            showAnimation={true}
                            colors={['blue','emerald', 'purple', 'amber', 'gray' ]}
                            className="h-48"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        {data.map((item, index) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                                style={{
                                    animation: `fadeInUp ${0.3 + index * 0.1}s ease-out forwards`
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-sm"
                                         style={{ backgroundColor: colorMap[item.name] }}></div>
                                    <span className="mr-1">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                </div>
                                <div className="text-lg font-semibold" style={{ color: colorMap[item.name] }}>
                                    {item.percent}%
                                </div>
                            </div>
                        ))}

                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>{totalLabel}:</span>
                                <span className="font-medium">247.188K personas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <DonutSection
                title="Distribución por Género"
                data={datosGenero}
                colorMap={colorMapGenero}
                totalLabel="Total analizados"
            />

            <DonutSection
                title="Distribución por Ciudad"
                data={datosCiudades}
                colorMap={colorMapCiudades}
                totalLabel="Total ubicación"
            />
        </div>
    );
};

export default SegmentacionDashboard;
