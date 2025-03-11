import React, { useState, useEffect } from 'react';
import Destacado from './Destacado';
import imgP from '../../imagenes/instas.png';

const Contenido = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [visiblePosts, setVisiblePosts] = useState([]);

    const allPosts = [
        {
            id: 1,
            fecha: "08 de junio de 2022",
            iconoRed: <span className="icon-[ri--facebook-fill] h-6 w-6 text-[#3b5998]"></span>,
            colorRed: "#3b5998",
            linkPost: "https://www.facebook.com/watch/?v=691013228632325",
            linkPerfil: "https://www.facebook.com/bernardopolopolito",
            imagePost: "./images/destacado_facebook.jpeg",
            mensajePost: "Familia del Presidente LASSO - Los mejores BOLLOS de Guayaquil | Los Clásicos GYE ✅#Turismo #BernardoPolo #Huecas #NicolasMuñoz #NicoBell Guillermo Lasso TeleamazonasEcuavisa@guillermo Villalobos",
            platform: "facebook"
        },
        {
            id: 2,
            fecha: "28 de octubre de 2024",
            iconoRed: <span className="icon-[mdi--instagram] h-6 w-6 text-[#dd2a7b]"></span>,
            colorRed: "#dd2a7b",
            linkPost: "https://www.instagram.com/p/CkRuvyDJHdE/",
            linkPerfil: "https://www.instagram.com/bernardopolopolito/",
            imagePost: "./images/destacado_instagram.jpg",
            mensajePost: "No es de la forma que pensaban 😅 #bernardopolo #hotelesfullvacations #clubvisita #disneyconcierge #fenancaptour #yovendoazuay #yovendoguayaquil #Ecuador #Turismo #cangrejos #comida #food #mariscos #churute #guayaquil",
            platform: "instagram"
        },
        {
            id: 3,
            fecha: "03 de enero de 2024",
            iconoRed: <span className="icon-[mingcute--tiktok-fill] h-6 w-6 text-black"></span>,
            colorRed: "#000000",
            linkPost: "https://www.tiktok.com/@bernardopolopolito/video/7320014550873410822?_r=1&_t=8mNf0KeOx1R",
            linkPerfil: "https://www.tiktok.com/@bernardopolopolito",
            imagePost: "./images/destacado_tiktok.jpeg",
            mensajePost: "Explorando la CASA EMBRUJADA de Cuenca..misterios PARANORMALES🧟‍🦇 @clau_ullauri @abigailjaramillo003 @phojg #cuenca #ecuador #visitaecuador #viral #Ecuador #PoliTo #visitaecuador #bernardopolo #emprendedoresdeexito #VISITANOS #viral #virals #tour #TERROR #CASAEMBRUJADA #EMBRUJADA #PARANORMAL",
            platform: "tiktok"
        },
        {
            id: 4,
            fecha: "05 de marzo de 2024",
            iconoRed: <span className="icon-[mdi--youtube] h-6 w-6 text-[#c4302b]"></span>,
            colorRed: "#c4302b",
            linkPost: "https://www.youtube.com/watch?v=AyV6vy9NyMI&t=552s",
            linkPerfil: "https://www.youtube.com/@bernardopolopolito",
            imagePost: "./images/destacado_youtube.jpeg",
            mensajePost: "De empleada domestica a EMPRESARIA 😱👏🔝 #elsalado #ecuador #azuay #cuenca #visitaecuador #viral #Ecuador #PoliTo #visitaecuador #bernardopolo #emprendedoresdeexito #VISITANOS #viral #virals #tour #PolitoRecomienda #ElPadrinoPolito #elpolitoteinvita  #morcho #estadosunidos #empoderamiento #empresaria  #mujeres",
            platform: "youtube"
        },
        {
            id: 5,
            fecha: "03 de mayo de 2024",
            iconoRed: <span className="icon-[akar-icons--linkedinv2-fill] h-6 w-6 text-[#0e76a8]"></span>,
            colorRed: "#0e76a8",
            linkPost: "https://es.linkedin.com/posts/bernardo-polo-polito-70560250_acabando-con-los-saya-jeans-en-la-feria-libre-activity-7192293823203475456-mEFB?trk=public_profile",
            linkPerfil: "https://www.linkedin.com/in/bernardo-polo-polito-70560250",
            imagePost: "./images/destacado_linkedin.jpg",
            mensajePost: "Acabando con los SAYA-JEANS en la Feria Libre 👖🤣 PayPhone #cuenca #ferialibre#visitaecuador #PoliTo #visitaecuador #bernardopolo #emprendedoresdeexito #PolitoRecomienda #fashion #jeans #moda",
            platform: "linkedin"
        },
        {
            id: 6,
            fecha: "01 de mayo de 2024",
            iconoRed: <span className="icon-[ph--x-logo-bold] h-6 w-6 text-black"></span>,
            colorRed: "#000000",
            linkPost: "https://twitter.com/bernardopolo10/status/1785801895300259930?s=46&t=Gc-sy8GhHrdeEtlmQlStbQ",
            linkPerfil: "https://twitter.com/bernardopolo10",
            imagePost: "./images/destacado_x.jpg",
            mensajePost: "Mis SEGUIDORES me dejan CHIRO por regalarles LANGOSTINOS del Abogado tírate un paso 🥲🦐 Dolger Velasquez PayPhone #dolgervelasquez#cuenca #cangrejoscuenca#ecuador #visitaecuador #PoliTo #visitaecuador #emprendedoresdeexito #VISITANOS #PolitoRecomienda #ElPadrinoPolito #politoteinvita #cangrejo #abogadotirateunpaso",
            platform: "twitter"
        },
        {
            id: 7,
            fecha: "06 de marzo de 2025",
            iconoRed: <span className="icon-[mdi--instagram] h-6 w-6 text-[#dd2a7b]"></span>,
            colorRed: "#dd2a7b",
            linkPost: "https://www.instagram.com/reel/DFoCU7uJ71F/",
            linkPerfil: "https://www.instagram.com/bernardopoloa/",
            imagePost: imgP,
            mensajePost: "Descubriendo nuevos lugares en Ecuador 🇪🇨 ¡Acompáñame en esta aventura! #Ecuador #Travel #BernardoPolo #Turismo #AventuraEcuador #VisitaEcuador #NuevoContenido #Instagram #Reels #Viajes #Descubriendo",
            platform: "instagram"
        }
    ];

    useEffect(() => {
        if (activeTab === 'all') {
            setVisiblePosts(allPosts);
        } else {
            setVisiblePosts(allPosts.filter(post => post.platform === activeTab));
        }
    }, [activeTab]);

    const platforms = [
        { id: 'all', name: 'Todo', icon: <span className="icon-[heroicons--squares-2x2] h-5 w-5"></span> },
        { id: 'instagram', name: 'Instagram', icon: <span className="icon-[mdi--instagram] h-5 w-5 text-[#dd2a7b]"></span> },
        { id: 'facebook', name: 'Facebook', icon: <span className="icon-[ri--facebook-fill] h-5 w-5 text-[#3b5998]"></span> },
        { id: 'tiktok', name: 'TikTok', icon: <span className="icon-[mingcute--tiktok-fill] h-5 w-5"></span> },
        { id: 'youtube', name: 'YouTube', icon: <span className="icon-[mdi--youtube] h-5 w-5 text-[#c4302b]"></span> },
        { id: 'linkedin', name: 'LinkedIn', icon: <span className="icon-[akar-icons--linkedinv2-fill] h-5 w-5 text-[#0e76a8]"></span> },
        { id: 'twitter', name: 'Twitter', icon: <span className="icon-[ph--x-logo-bold] h-5 w-5"></span> }
    ];

    return (
        <div className="bg-gray-50 py-8" id="contenido">
            <div id='explora' className='flex flex-col gap-6 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full'>
                <div className="mb-6">
                    <h2 className='text-2xl font-semibold'>Explora mi contenido</h2>
                    <p className='text-gray-500 text-sm'>
                        ¡Descubre mi esencia en cada publicación! Sumérgete en el universo digital
                        que he creado para ti. ¡Bienvenido a mi selección de contenido!
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {platforms.map(platform => (
                        <button
                            key={platform.id}
                            onClick={() => setActiveTab(platform.id)}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm ${
                                activeTab === platform.id
                                    ? 'bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {platform.icon}
                            <span>{platform.name}</span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {visiblePosts.map(post => (
                        <Destacado
                            key={post.id}
                            fecha={post.fecha}
                            iconoRed={post.iconoRed}
                            colorRed={post.colorRed}
                            linkPost={post.linkPost}
                            linkPerfil={post.linkPerfil}
                            imagePost={post.imagePost}
                            mensajePost={post.mensajePost}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contenido;
