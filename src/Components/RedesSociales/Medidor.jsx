import React, { useEffect, useState } from 'react';

const Medidor = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setAnimate(true);
    }, []);

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-700 tracking-wider">SEGUIDORES TOTALES</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        + 12.4% este mes
                    </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex items-end gap-2">
                        <div className="relative">
                            <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005F6B] to-[#96c121]">
                                247,188 K
                            </span>
                            <div className="absolute -top-4 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full text-gray-800 transform rotate-12">
                                ¡Récord!
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="icon-[ph--arrow-up] h-8 w-8 text-green-500"></span>
                            <span className="text-sm font-semibold text-green-500">+56.27K</span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <p className="text-xs text-gray-500 mb-2">Distribución por plataforma</p>
                        <div className="flex h-12 rounded-lg overflow-hidden shadow-inner">
                            <div
                                className="bg-[#db5781] flex items-center justify-center text-white font-semibold text-sm transition-all duration-1000"
                                style={{width: animate ? '50%' : '0%'}}
                            >
                                56.64%
                            </div>
                            <div
                                className="bg-[#e33f72] flex items-center justify-center text-white font-semibold text-sm transition-all duration-1000 delay-200"
                                style={{width: animate ? '25%' : '0%'}}
                            >
                                18.73%
                            </div>
                            <div
                                className="bg-[#3e8ba4] flex items-center justify-center text-white font-semibold text-sm transition-all duration-1000 delay-100"
                                style={{width: animate ? '15%' : '0%'}}
                            >
                                13.75%
                            </div>
                            <div
                                className="bg-[#60605f] flex items-center justify-center text-white font-semibold text-sm transition-all duration-1000 delay-200"
                                style={{width: animate ? '13%' : '0%'}}
                            >
                                10.44%
                            </div>
                            <div
                                className="bg-[#e6231c] flex items-center justify-center text-white font-semibold text-sm transition-all duration-1000 delay-200"
                                style={{width: animate ? '7%' : '0%'}}
                            >
                                0.76%
                            </div>

                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                            <div>Inst/FanPage</div>
                            <div>Inst/Personal</div>
                            <div>Facebook</div>
                            <div>TikTok</div>
                            <div>Youtube</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medidor;
