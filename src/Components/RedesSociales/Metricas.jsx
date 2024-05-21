import React from 'react';
import Medidor from './Medidor';
import SeguidoresRed from './SeguidoresRed';
import SegmentacionGenero from './SegmentacionGenero';
import SegmentacionEdad from './SegmentacionEdad';

const Metricas = () => {
    return (
        <div>
            <div id='metricas' className='flex flex-col gap-4 mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full mt-7'>
                <label className='text-2xl font-semibold -mb-3'>Métricas</label>
                <label className='text-xl font-light'>Explora el impacto de los Contenidos de Bernardo Polo Andrade</label>
                <label className=' text-gray-500 font-extralight text-sm'>¡Descubre las métricas que revelan el alcance y la influencia de los contenidos creados por Bernardo Polo Andrade! Sumérgete en los datos recopilados y conoce el impacto que su presencia genera en la audiencia</label>
                <Medidor></Medidor>
                <div className='flex gap-8'>
                    <SeguidoresRed 
                        red={"INSTAGRAM"}
                        color={"#db5781"}
                        icono={"./images/instagram_icon.png"}
                        seguidores={"136 K"}
                    />
                     <SeguidoresRed 
                        red={"FACEBOOK"}
                        color={"#3e8ba4"}
                        icono={"./images/facebook_icon.png"}
                        seguidores={"29 K"}
                    />
                     <SeguidoresRed 
                        red={"TIK TOK"}
                        color={"#60605f"}
                        icono={"./images/tiktok_icon.png"}
                        seguidores={"19,2 K"}
                    />
                     <SeguidoresRed 
                        red={"YOUTUBE"}
                        color={"#c4302b"}
                        icono={"./images/youtube_icon.png"}
                        seguidores={"734"}
                    />
                </div>
                <div className='flex gap-3s'>
                    <SegmentacionGenero/>
                    <SegmentacionEdad/>
                </div>
            </div>
        </div>
    );
};

export default Metricas;