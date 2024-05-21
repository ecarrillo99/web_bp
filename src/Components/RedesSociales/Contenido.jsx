import React from 'react';
import Destacado from './Destacado';

const Contenido = () => {
    return (
        <div>
            <div id='explora' className='flex flex-col gap-6 mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full mt-7'>
                <label className='text-2xl font-semibold -mb-3'>Explora mi contenido</label>
                <label className=' text-gray-500 font-extralight text-sm'>¡Descubre mi esencia en cada publicación!. Sumérgete en el universo digital que he creado para ti.<br></br>¡Bienvenido a mi selección de contenido!</label>
                <div className='flex gap-14'>
                    <Destacado
                        fecha={"08 de junio de 2022"}
                        iconoRed={<span className="icon-[ri--facebook-fill] h-10 w-10 text-[#3b5998]"></span>}
                        colorRed={"#3b5998"}
                        linkPost={"https://www.facebook.com/watch/?v=691013228632325"}
                        linkPerfil={"https://www.facebook.com/bernardopolopolito"}
                        imagePost={"./images/destacado_facebook.jpeg"}
                        mensajePost={"Familia del Presidente LASSO - Los mejores BOLLOS de Guayaquil | Los Clásicos GYE ✅#Turismo #BernardoPolo #Huecas #NicolasMuñoz #NicoBell Guillermo Lasso TeleamazonasEcuavisa@guillermo Villalobos"}
                    />
                    <Destacado
                        fecha={"28 de octubre de 2024"}
                        iconoRed={<span className="icon-[mdi--instagram] h-10 w-10 text-[#dd2a7b]"></span>}
                        colorRed={"#dd2a7b"}
                        linkPost={"https://www.instagram.com/p/CkRuvyDJHdE/"}
                        linkPerfil={"https://www.instagram.com/bernardopolopolito/"}
                        imagePost={"./images/destacado_instagram.jpg"}
                        mensajePost={"No es de la forma que pensaban 😅 #bernardopolo #hotelesfullvacations #clubvisita #disneyconcierge #fenancaptour #yovendoazuay #yovendoguayaquil #Ecuador #Turismo #cangrejos #comida #food #mariscos #churute #guayaquil"}
                    />
                    <Destacado
                        fecha={"03 de enero de 2024"}
                        iconoRed={<span className="icon-[mingcute--tiktok-fill] h-10 w-10 text-black"></span>}
                        colorRed={"#000000"}
                        linkPost={"https://www.tiktok.com/@bernardopolopolito/video/7320014550873410822?_r=1&_t=8mNf0KeOx1R"}
                        linkPerfil={"https://www.tiktok.com/@bernardopolopolito"}
                        imagePost={"./images/destacado_tiktok.jpeg"}
                        mensajePost={"Explorando la CASA EMBRUJADA de Cuenca..misterios PARANORMALES🧟‍🦇 @clau_ullauri @abigailjaramillo003 @phojg #cuenca #ecuador #visitaecuador #viral #Ecuador #PoliTo #visitaecuador #bernardopolo #emprendedoresdeexito #VISITANOS #viral #virals #tour #TERROR #CASAEMBRUJADA #EMBRUJADA #PARANORMAL "}
                    />
                </div>
                <div className='flex gap-14 mt-20'>
                    <Destacado
                        fecha={"05 de marzo de 2024"}
                        iconoRed={<span className="icon-[mdi--youtube] h-10 w-10 text-[#c4302b]"></span>}
                        colorRed={"#c4302b"}
                        linkPost={"https://www.youtube.com/watch?v=AyV6vy9NyMI&t=552s"}
                        linkPerfil={"https://www.youtube.com/@bernardopolopolito"}
                        imagePost={"./images/destacado_youtube.jpeg"}
                        mensajePost={"De empleada domestica a EMPRESARIA 😱👏🔝 #elsalado #ecuador #azuay #cuenca #visitaecuador #viral #Ecuador #PoliTo #visitaecuador #bernardopolo #emprendedoresdeexito #VISITANOS #viral #virals #tour #PolitoRecomienda #ElPadrinoPolito #elpolitoteinvita  #morcho #estadosunidos #empoderamiento #empresaria  #mujeres"}
                    />
                    <Destacado
                        fecha={"03 de mayo de 2024"}
                        iconoRed={<span className="icon-[akar-icons--linkedinv2-fill] h-9 w-9 text-[#0e76a8]"></span>}
                        colorRed={"#0e76a8"}
                        linkPost={"https://es.linkedin.com/posts/bernardo-polo-polito-70560250_acabando-con-los-saya-jeans-en-la-feria-libre-activity-7192293823203475456-mEFB?trk=public_profile"}
                        linkPerfil={"https://www.linkedin.com/in/bernardo-polo-polito-70560250"}
                        imagePost={"./images/destacado_linkedin.jpg"}
                        mensajePost={"Acabando con los SAYA-JEANS en la Feria Libre 👖🤣 PayPhone #cuenca #ferialibre#visitaecuador #PoliTo #visitaecuador #bernardopolo #emprendedoresdeexito #PolitoRecomienda #fashion #jeans #moda"}
                    />
                    <Destacado
                        fecha={"01 de mayo de 2024"}
                        iconoRed={<span className="icon-[ph--x-logo-bold] h-10 w-10 text-black"></span>}
                        colorRed={"#000000"}
                        linkPost={"https://twitter.com/bernardopolo10/status/1785801895300259930?s=46&t=Gc-sy8GhHrdeEtlmQlStbQ"}
                        linkPerfil={"https://twitter.com/bernardopolo10"}
                        imagePost={"./images/destacado_x.jpg"}
                        mensajePost={"Mis SEGUIDORES me dejan CHIRO por regalarles LANGOSTINOS del Abogado tírate un paso 🥲🦐 Dolger Velasquez PayPhone #dolgervelasquez#cuenca #cangrejoscuenca#ecuador #visitaecuador #PoliTo #visitaecuador #emprendedoresdeexito #VISITANOS #PolitoRecomienda #ElPadrinoPolito #politoteinvita #cangrejo #abogadotirateunpaso"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contenido;

