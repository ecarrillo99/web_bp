import React, { useState, useEffect, lazy, Suspense } from 'react';

const Destacado = lazy(() => import('./Destacado'));


import imgP from '../../imagenes/Social/instas.png';
import imgP1 from '../../imagenes/Social/img_1.png';
import imgP4 from '../../imagenes/Social/img_3.png';
import imgP7 from '../../imagenes/Social/img_6.png';
import imgP20 from '../../imagenes/img_20.png';
import imgP21 from '../../imagenes/img_21.png';
import imgP22 from '../../imagenes/img_22.png';
import imgP23 from '../../imagenes/img_23.png';
import imgP24 from '../../imagenes/img_24.png';


const LoadingFallback = () => (
  <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
    <span className="text-gray-500">Cargando publicaciones...</span>
  </div>
);

const PlatformPosts = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <Suspense key={post.id} fallback={<LoadingFallback />}>
          <Destacado
            fecha={post.fecha}
            iconoRed={post.iconoRed}
            colorRed={post.colorRed}
            linkPost={post.linkPost}
            linkPerfil={post.linkPerfil}
            imagePost={post.imagePost}
            mensajePost={post.mensajePost}
          />
        </Suspense>
      ))}
    </>
  );
};


const AllPosts = lazy(() => Promise.resolve({ default: PlatformPosts }));
const InstagramPosts = lazy(() => Promise.resolve({ default: PlatformPosts }));
const FacebookPosts = lazy(() => Promise.resolve({ default: PlatformPosts }));
const TikTokPosts = lazy(() => Promise.resolve({ default: PlatformPosts }));
const YouTubePosts = lazy(() => Promise.resolve({ default: PlatformPosts }));
const LinkedInPosts = lazy(() => Promise.resolve({ default: PlatformPosts }));
const TwitterPosts = lazy(() => Promise.resolve({ default: PlatformPosts }));

const Contenido = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [isLoaded, setIsLoaded] = useState({
        all: false,
        instagram: false,
        facebook: false,
        tiktok: false,
        youtube: false,
        linkedin: false,
        twitter: false
    });

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
            id: 8,
            fecha: "07 de marzo de 2025",
            iconoRed: <span className="icon-[ri--facebook-fill] h-6 w-6 text-[#3b5998]"></span>,
            colorRed: "#3b5998",
            linkPost: "https://www.facebook.com/bernardopolopolito/videos/972486391672261",
            linkPerfil: "https://www.facebook.com/bernardopolopolito",
            imagePost: imgP20,
            mensajePost: "Peugeot NUNCA MÁS !!\n" +
                "3 Razones por las que jamás volvería a comprar un Peugeot\n" +
                "#BernardoPolo #VisitaEcuador #Peugeot #marca #NuncaMas #autos #falla Bernardo Polo",
            platform: "facebook"
        },
        {
            id: 9,
            fecha: "07 de marzo de 2025",
            iconoRed: <span className="icon-[ri--facebook-fill] h-6 w-6 text-[#3b5998]"></span>,
            colorRed: "#3b5998",
            linkPost: "https://www.facebook.com/bernardopolopolito/videos/1265249671208902",
            linkPerfil: "https://www.facebook.com/bernardopolopolito",
            imagePost: imgP7,
            mensajePost: "Así se ve un cojudo pidiendo comida para llevar !! 🤪 #BernardoPolo #VisitaEcuador #McMary #food #fastfood #hamburgesas #delivery #ComidaParaLlevar #CojudoYContento #DeliveryFail #ComiendoComoCojudo #RisaYComida\n" +
                "#CojudoYHambriento #Cuenca #viral #humor #contenido #Ecuador Mac Mary Cuenca Bernardo Polo",
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
            id: 15,
            fecha: "10 de marzo de 2025",
            iconoRed: <span className="icon-[mdi--instagram] h-6 w-6 text-[#dd2a7b]"></span>,
            colorRed: "#dd2a7b",
            linkPost: "https://www.instagram.com/reel/DHAImayp2an/",
            linkPerfil: "https://www.instagram.com/bernardopolopolito/",
            imagePost: imgP23,
            mensajePost: "Que buen seco por santa. 🐷🐽 #cuenca #ecuador #seco #cuchara #juguito #jugo #extra #puroamor #santo #santa #secos #fyp #parati #foryou #rico #riquisimo #cerdo #chancho #azuay",
            platform: "instagram"
        },
        {
            id: 16,
            fecha: "10 de marzo de 2025",
            iconoRed: <span className="icon-[mdi--instagram] h-6 w-6 text-[#dd2a7b]"></span>,
            colorRed: "#dd2a7b",
            linkPost: "https://www.instagram.com/reel/DE3PTbnpw55/",
            linkPerfil: "https://www.instagram.com/bernardopolopolito/",
            imagePost: imgP24,
            mensajePost: "En ésta cafetería puedes crear tu obra de arte con café en mano TE VA A ENCANTAR !! 😍👩🏻‍🎨☕️🎨 #bernardopolo #visitaecuador #CafeteriaPicaMaria #turismo #arte #huecas #arte #cafe #cuenca",
            platform: "instagram"
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
        },


        
        {
            id: 10,
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
            id: 11,
            fecha: "02 de febrero de 2025",
            iconoRed: <span className="icon-[mingcute--tiktok-fill] h-6 w-6 text-black"></span>,
            colorRed: "#000000",
            linkPost: "https://www.tiktok.com/@bernardopolopolito/video/7468804195064335622",
            linkPerfil: "https://www.tiktok.com/@bernardopolopolito",
            imagePost: imgP4,
            mensajePost: "Güecaquil: Un restaurante costeño bacán con el puro sabor ecuatoriano. 🇪🇨🦞🍤 #BernardoPolo #VisitaEcuador #Güecaquil #food #seafood #ComidaCosteña #Moro #cremosito #ceviche #Ecuatoriano #cuencanas #viral #huecas #PrecioDeCarretilla #Cuenca #Ecuador @Güecaquil",
            platform: "tiktok"
        },
        {
            id: 12,
            fecha: "01 de enero de 2020",
            iconoRed: <span className="icon-[mingcute--tiktok-fill] h-6 w-6 text-black"></span>,
            colorRed: "#000000",
            linkPost: "https://www.tiktok.com/@bernardopolopolito/video/7462123776205966597",
            linkPerfil: "https://www.tiktok.com/@bernardopolopolito",
            imagePost: imgP1,
            mensajePost: "¡TODO CON MIEL! Productos Naturales hechos con mucho pero mucho AMOR. 🐝🍯 #BernardoPolo #VisitaEcuador #Apimel #Turismo #Huecas #Productos #Turron #abejas #miel #Cuenca@Michelle Maldonado",
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
            id: 13,
            fecha: "02 de septiembre de 2022",
            iconoRed: <span className="icon-[mdi--youtube] h-6 w-6 text-[#c4302b]"></span>,
            colorRed: "#c4302b",
            linkPost: "https://www.youtube.com/watch?v=BlUzarq9ZXw",
            linkPerfil: "https://www.youtube.com/@bernardopolopolito",
            imagePost: imgP21,
            mensajePost: "#HackerDelTurismo #EmpresarioDisruptivo #Bloguero\n" +
                "¿quieres saber dónde comer el mejor encebollado de Guayaquil? Mira éste video y entérate junto a Holbach Muñetón, presidente de la Federación de Cámaras de Turismo del Ecuador FENACAPTUR.",
            platform: "youtube"
        },
        {
            id: 14,
            fecha: "19 de junio de 2024",
            iconoRed: <span className="icon-[mdi--youtube] h-6 w-6 text-[#c4302b]"></span>,
            colorRed: "#c4302b",
            linkPost: "https://www.youtube.com/watch?v=xSksCVoN0-c",
            linkPerfil: "https://www.youtube.com/@bernardopolopolito",
            imagePost: imgP22,
            mensajePost: "Las alitas más PICANTES del Cuenca 🥵 / Atención‼️ Video PICANTE y con SORPRESA 😳🤩\n" +
                "\n" +
                "🔋Pilas Pilas Pilasssss, mira todo el video y GANATE 1 de estas deliciosas ordenes de hamburgesas y alitas😋\n" +
                "\n" +
                "Requisitos? Participar, compartir, seguir a Bernardo Polo Polito y Alasas Cuenca 🔝\n" +
                "\n" +
                "#cuenca #alasascuenca #ecuador #politoinvita #Ecuador #PoliTo #alaitas #viral #virals #emprendedoresdeexito #PolitoRecomienda #picante #bebida #restaurante",
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
    ];

    
    const postsByPlatform = {
        all: allPosts,
        instagram: allPosts.filter(post => post.platform === 'instagram'),
        facebook: allPosts.filter(post => post.platform === 'facebook'),
        tiktok: allPosts.filter(post => post.platform === 'tiktok'),
        youtube: allPosts.filter(post => post.platform === 'youtube'),
        linkedin: allPosts.filter(post => post.platform === 'linkedin'),
        twitter: allPosts.filter(post => post.platform === 'twitter')
    };

    
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        
        
        setIsLoaded(prevState => ({
            ...prevState,
            [tabId]: true
        }));
    };

    const platforms = [
        { id: 'all', name: 'Todo', icon: <span className="icon-[heroicons--squares-2x2] h-5 w-5"></span> },
        { id: 'instagram', name: 'Instagram', icon: <span className="icon-[mdi--instagram] h-5 w-5 text-[#dd2a7b]"></span> },
        { id: 'facebook', name: 'Facebook', icon: <span className="icon-[ri--facebook-fill] h-5 w-5 text-[#3b5998]"></span> },
        { id: 'tiktok', name: 'TikTok', icon: <span className="icon-[mingcute--tiktok-fill] h-5 w-5"></span> },
        { id: 'youtube', name: 'YouTube', icon: <span className="icon-[mdi--youtube] h-5 w-5 text-[#c4302b]"></span> },
        { id: 'linkedin', name: 'LinkedIn', icon: <span className="icon-[akar-icons--linkedinv2-fill] h-5 w-5 text-[#0e76a8]"></span> },
        { id: 'twitter', name: 'Twitter', icon: <span className="icon-[ph--x-logo-bold] h-5 w-5"></span> }
    ];

    
    const renderPlatformComponent = () => {
        switch (activeTab) {
            case 'all':
                return isLoaded.all ? <AllPosts posts={postsByPlatform.all} /> : <SectionLoadingFallback />;
            case 'instagram':
                return isLoaded.instagram ? <InstagramPosts posts={postsByPlatform.instagram} /> : <SectionLoadingFallback />;
            case 'facebook':
                return isLoaded.facebook ? <FacebookPosts posts={postsByPlatform.facebook} /> : <SectionLoadingFallback />;
            case 'tiktok':
                return isLoaded.tiktok ? <TikTokPosts posts={postsByPlatform.tiktok} /> : <SectionLoadingFallback />;
            case 'youtube':
                return isLoaded.youtube ? <YouTubePosts posts={postsByPlatform.youtube} /> : <SectionLoadingFallback />;
            case 'linkedin':
                return isLoaded.linkedin ? <LinkedInPosts posts={postsByPlatform.linkedin} /> : <SectionLoadingFallback />;
            case 'twitter':
                return isLoaded.twitter ? <TwitterPosts posts={postsByPlatform.twitter} /> : <SectionLoadingFallback />;
            default:
                return <SectionLoadingFallback />;
        }
    };

    
    const SectionLoadingFallback = () => (
        <div className="col-span-full py-12 text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-green-500 border-r-transparent align-[-0.125em]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Cargando...
                </span>
            </div>
            <p className="mt-4 text-gray-600">Cargando publicaciones...</p>
        </div>
    );

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
                            onClick={() => handleTabChange(platform.id)}
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
                    <Suspense fallback={<SectionLoadingFallback />}>
                        {renderPlatformComponent()}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Contenido;