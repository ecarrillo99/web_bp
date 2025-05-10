import React, { Suspense, lazy } from 'react';

const Medidor = lazy(() => import('./Medidor'));
const SeguidoresRed = lazy(() => import('./SeguidoresRed'));
const SegmentacionGenero = lazy(() => import('./SegmentacionGenero'));
const SegmentacionEdad = lazy(() => import('./SegmentacionEdad'));
const SegmentacionGeografica = lazy(() => import('./SegmentacionGeografica'));

const MedidorFallback = () => (
  <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
);

const SeguidoresRedFallback = () => (
  <div className="w-full h-32 bg-gray-200 rounded-lg animate-pulse"></div>
);

const SegmentacionFallback = () => (
  <div className="w-full h-80 bg-gray-200 rounded-lg animate-pulse"></div>
);

const Metricas = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg">
            <div id='metricas' className='flex flex-col gap-6 mx-auto max-w-6xl py-8 sm:px-6 lg:px-8 w-full'>
                <div className="text-center mb-2">
                    <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005F6B] to-[#96c121]'>Métricas</h2>
                    <h3 className='text-xl font-medium mt-2'>Explora el impacto de los Contenidos de Bernardo Polo Andrade</h3>
                    <p className='text-gray-600 font-light text-sm mt-2 max-w-3xl mx-auto'>
                        ¡Descubre las métricas que revelan el alcance y la influencia de los contenidos creados por Bernardo Polo Andrade!
                        Sumérgete en los datos recopilados y conoce el impacto que su presencia genera en la audiencia.
                    </p>
                </div>

                <Suspense fallback={<MedidorFallback />}>
                    <Medidor />
                </Suspense>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                    {[
                        {
                            red: "INST/FANPAGE",
                            color: "#db5781",
                            icono: "./images/instagram_icon.png",
                            seguidores: "140 K"
                        },
                        {
                            red: "FK/FANPAGE",
                            color: "#3e8ba4",
                            icono: "./images/facebook_icon.png",
                            seguidores: "34 K"
                        },
                        {
                            red: "TIK TOK",
                            color: "#60605f",
                            icono: "./images/tiktok_icon.png",
                            seguidores: "25,8 K"
                        },
                        {
                            red: "YOUTUBE",
                            color: "#e6231c",
                            icono: "./images/youtube_icon.png",
                            seguidores: "1,88 k"
                        },
                        {
                            red: "INST/PERSONAL",
                            color: "#e33f72",
                            icono: "./images/instagram_icon.png",
                            seguidores: "46.3 K"
                        },
                        {
                            red: "FK/PERSONAL",
                            color: "#35758a",
                            icono: "./images/facebook_icon.png",
                            seguidores: "6.6 K"
                        }
                    ].map((props, index) => (
                        <Suspense key={index} fallback={<SeguidoresRedFallback />}>
                            <SeguidoresRed
                                red={props.red}
                                color={props.color}
                                icono={props.icono}
                                seguidores={props.seguidores}
                            />
                        </Suspense>
                    ))}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-2'>
                    <Suspense fallback={<SegmentacionFallback />}>
                        <SegmentacionGenero />
                    </Suspense>
                    <Suspense fallback={<SegmentacionFallback />}>
                        <SegmentacionEdad />
                    </Suspense>
                </div>

                <div className='mt-2'>
                    <Suspense fallback={<SegmentacionFallback />}>
                        <SegmentacionGeografica />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Metricas;