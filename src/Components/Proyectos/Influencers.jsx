import React from 'react';
import ProyectoSection from './ProyectoSection';
import imgP from '../../imagenes/Influencers/img_29.png'
import imgP1 from '../../imagenes/Influencers/img_5.png'
import imgP2 from '../../imagenes/Influencers/img.png'
import imgP3 from '../../imagenes/Influencers/img_6.png'
import imgP4 from '../../imagenes/Influencers/img_7.png'
import imgP5 from '../../imagenes/Influencers/img_3.png'
import imgP6 from '../../imagenes/Influencers/img_4.png'
import imgP7 from '../../imagenes/Influencers/img_8.png'
import imgP8 from '../../imagenes/Influencers/img_9.png'
import imgP9 from '../../imagenes/Influencers/img_10.png'
import imgP10 from '../../imagenes/Influencers/img_11.png'
import imgP11 from '../../imagenes/Influencers/img_12.png'
import imgP12 from '../../imagenes/Influencers/img_13.png'
import imgP13 from '../../imagenes/Influencers/img_14.png'
import imgP14 from '../../imagenes/Influencers/img_15.png'
import imgP15 from '../../imagenes/Influencers/img_16.png'
import imgP16 from '../../imagenes/Influencers/img_17.png'
import imgP17 from '../../imagenes/Influencers/img_20.png'
import imgP18 from '../../imagenes/Influencers/img_19.png'
import imgP19 from '../../imagenes/Influencers/img_21.png'

const Influencers = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <h1 className='text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005F6B] to-[#96c121]'>Programa de Influencers</h1>
                <h2 className="text-xl sm:text-2xl mb-4">Embajadores digitales del Ecuador</h2>
                <p className="text-base sm:text-lg mb-8 mx-auto">
                    Con Visita Ecuador, queremos que los influencers viajen por todo nuestro hermoso Ecuador para
                    activar el turismo
                    y mejorar la economía del país. A través de su alcance y autenticidad, estos creadores de contenido
                    pueden mostrar la riqueza cultural, natural y gastronómica de nuestras regiones, generando un
                    impacto
                    positivo en las comunidades locales y atrayendo visitantes tanto nacionales como internacionales.
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                <ProyectoSection
                    titulo="Creadores/Networking"
                    proyectos={[
                        {
                            imagen: imgP14,
                            enlace: "https://www.tiktok.com/@visitaecuadorinfl/video/7359324228736421125",
                            mensaje: "Nos complace anunciar un magnifico convenio entre Visitaecuador.com y Jardín Azuayo, que beneficiará a nuestra comunidad y a sus socios 🤩",
                            ubicacion: "Cuenca, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/cultura2",
                            mensaje: "Artesanías ecuatorianas: el arte en cada detalle",
                            ubicacion: "Tungurahua, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/cultura3",
                            mensaje: "Comunidades indígenas: guardianes de la sabiduría ancestral",
                            ubicacion: "Pastaza, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "./images/proyecto_imagen01.png",
                            mensaje: "Bailes tradicionales de las regiones ecuatorianas",
                            ubicacion: "Imbabura, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/cultura2",
                            mensaje: "Tejidos ancestrales: técnicas y simbolismos",
                            ubicacion: "Tungurahua, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/cultura3",
                            mensaje: "Lenguas originarias y su preservación cultural",
                            ubicacion: "Pastaza, Ecuador"
                        }
                    ]}
                />

                <ProyectoSection
                    titulo="Rutas Turísticas"
                    proyectos={[
                        {
                            imagen: imgP17,
                            enlace: "https://www.tiktok.com/@visitaecuadorinfl/video/7320313444085828870?is_from_webapp=1&web_id=7478707606246213126",
                            mensaje: "Paco el Morlaco pedaleo 300 km en su bici hecha con más de 450 botellas PET hacia lo más alto…. EL CHIMBORAZO 🚵🏻🗻",
                            ubicacion: "Chimborazo, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/rutas2",
                            mensaje: "Playas escondidas de la costa pacífica",
                            ubicacion: "Santa Elena, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://www.instagram.com/reel/DDF-zB9xz8d/",
                            mensaje: "La ruta de los volcanes: aventura en los Andes",
                            ubicacion: "Chimborazo, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/rutas1",
                            mensaje: "Expediciones en la selva: flora y fauna únicas",
                            ubicacion: "Napo, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/rutas2",
                            mensaje: "Surf y aventura en la costa ecuatoriana",
                            ubicacion: "Santa Elena, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://www.instagram.com/reel/DDF-zB9xz8d/",
                            mensaje: "Trekking en las alturas: paisajes andinos",
                            ubicacion: "Chimborazo, Ecuador"
                        }
                    ]}
                />

                <ProyectoSection
                    titulo="Gastronomía Local"
                    proyectos={[
                        {
                            imagen: imgP9,
                            enlace: "https://www.tiktok.com/@visitaecuadorinfl/video/7327353822030892294?_r=1&_t=ZM-8uxEcSeIWu5",
                            mensaje: "Víctor León estuvo por el Mercado 27 de Febrero deleitando su paladar con un delicioso hornado, gracias a Visita Ecuador Influencers.",
                            ubicacion: "Cuenca, Ecuador"
                        },
                        {
                            imagen: imgP10,
                            enlace: "https://www.tiktok.com/@visitaecuador.com/video/7406461590242905349?_r=1&_t=ZM-8uxHX2S4Y5d",
                            mensaje: "Las 3 botellas son tuyas mira cómo retirarlas 🍾 \n" +
                                " Hoy vinimos a la Cava San Miguel y mira lo que pasó 😏  #bernardopolo  #polito  #visitaecuador  ",
                            ubicacion: "Los Ríos, Ecuador"
                        },
                        {
                            imagen: imgP13,
                            enlace: "https://www.tiktok.com/@bernardopolopolito/video/7442068121470405943",
                            mensaje: "Ver este video te hará querer probar estos ceviches ahora!🍋🍤 La sazón de Maury Garnica 😋 ",
                            ubicacion: "Esmeraldas, Ecuador"
                        },
                        {
                            imagen: imgP18,
                            enlace: "https://www.tiktok.com/@museodelagastronomia/video/7484722918811798791?_r=1&_t=ZM-8uxMDLuQCRj",
                            mensaje: "Por 0,45 centavos una picadita en @CasaYangoe  😋🤯❤️ Pueden comprar el Azuay Turístico en el Museo y en todas las empresas participantes 🇪🇨",
                            ubicacion: "Azuay, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/gastro2",
                            mensaje: "Bebidas tradicionales y sus historias",
                            ubicacion: "Los Ríos, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/gastro3",
                            mensaje: "Cocinando con familias de pescadores",
                            ubicacion: "Esmeraldas, Ecuador"
                        }
                    ]}
                />

                <ProyectoSection
                    titulo="Cultura y Tradiciones"
                    proyectos={[
                        {
                            imagen: imgP12,
                            enlace: "https://www.tiktok.com/@visitaecuadorinfl/video/7320668120027385093?is_from_webapp=1&web_id=7478707606246213126",
                            mensaje: "¿Sabías que? Paco el Morlaco conoció al diseñador en común que tienen el Papa, la Reina Sofía y Salma Hayek… 🧶 ",
                            ubicacion: "Gualaceo, Ecuador"
                        },
                        {
                            imagen: imgP16,
                            enlace: "https://www.instagram.com/p/C1uwTfxJhT5/",
                            mensaje: "¿Tenías idea de qué? Con VisitaEcuador.com puedes entrar a lugares no antes explorados como es la Casa de las Cruces donde existe mucho misterio en saber ",
                            ubicacion: "Tungurahua, Ecuador"
                        },
                        {
                            imagen: imgP17,
                            enlace: "https://www.tiktok.com/@visitaecuadorinfl/video/7320313444085828870?is_from_webapp=1&web_id=7478707606246213126",
                            mensaje: "Paco el Morlaco pedaleo 300 km en su bici hecha con más de 450 botellas PET hacia lo más alto…. EL CHIMBORAZO 🚵🏻🗻",
                            ubicacion: "Chimborazo, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "./images/proyecto_imagen01.png",
                            mensaje: "Bailes tradicionales de las regiones ecuatorianas",
                            ubicacion: "Imbabura, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/cultura2",
                            mensaje: "Tejidos ancestrales: técnicas y simbolismos",
                            ubicacion: "Tungurahua, Ecuador"
                        },
                        {
                            imagen: "./images/proyecto_imagen01.png",
                            enlace: "https://ejemplo.com/cultura3",
                            mensaje: "Lenguas originarias y su preservación cultural",
                            ubicacion: "Pastaza, Ecuador"
                        }
                    ]}
                />

                <ProyectoSection
                    titulo="Hoteles"
                    proyectos={[
                        {
                            imagen: imgP,
                            enlace: "https://www.tiktok.com/@jorgeanibalcassis/video/7386770049886932229?_r=1&_d=secCgYIASAHKAESPgo8FxFM7H9eTNlvanfQ8V8fWjN6sNdUC9tGXMOuJfupV%2B1ZBr9NNyPOFR52xvfOEPK%2BmfxcrFsGlztg3PdfGgA%3D&u_code=dd5eafk33deb56&share_item_id=7386770049886932229&timestamp=1725891763&share_app_id=1233",
                            mensaje: "Deben aprovechar que con mi código, les dan 2 años de suscripción por el pago de 1 !!! \n" +
                                " Pilassssss \n" +
                                "   #laquinta  #visitaecuador  ",
                            ubicacion: "Quito, Ecuador"
                        },
                        {
                            imagen: imgP1,
                            enlace: "https://www.tiktok.com/@kamiramona/video/7375240984218586374?_r=1&_t=ZM-8ux7qc5v6r1",
                            mensaje: "Ya conoces Lojaaa? Acá un tip de hospedaje #hoteles #loja  @visitaecuador.com @Payphone 🛣️💰🙌🏼",
                            ubicacion: "Loja, Ecuador"
                        },
                        {
                            imagen: imgP3,
                            enlace: "https://www.tiktok.com/@brescianilucho/video/7450263771488128262?_r=1&_t=ZM-8ux82x97bk7",
                            mensaje: "Hospedate como millonario gracias a “VisitaEcuador.com” ",
                            ubicacion: "El Oro, Ecuador"
                        },
                        {
                            imagen: imgP2,
                            enlace: "https://www.tiktok.com/@kamiramona/video/7389314739437899014?_r=1&_t=ZM-8ux7vsQOcNj",
                            mensaje: "Este es un increíble hospedaje en Vilcabamba, Loja, Ecuador #hoteles  #loja  #ecuador @visitaecuador.com ",
                            ubicacion: "Loja, Ecuador"
                        },
                        {
                            imagen: imgP4,
                            enlace: "https://www.tiktok.com/@mateo_canizares_/video/7390182689049005317?_r=1&_t=ZM-8ux87TW0vrh",
                            mensaje: "1000/10 🫶  @visitaecuador.com  @bernardopolopolito  #fyp  #ecuador  #quito  #viajes  #travel ",
                            ubicacion: "Tungurahua, Ecuador"
                        },
                        {
                            imagen: imgP5,
                            enlace: "https://www.tiktok.com/@pacoelmorlaco99/video/7404279169149947142?_r=1&_t=ZM-8ux8NsGxAmL",
                            mensaje: "hoy fui a @Playa Paraíso  y me ahorre un monton utilizando @visitaecuador.com  #villamil  #playa  #hotel   ",
                            ubicacion: "Pastaza, Ecuador"
                        },
                        {
                            imagen: imgP6,
                            enlace: "https://www.instagram.com/reel/DE_SjZcsByi/",
                            mensaje: "Sinceramente el Hotel @trypbywyndhamguayaquil me encantó, súper recomendado @visitaecuadorcom @visitaecuadorinfluencer ",
                            ubicacion: "Pastaza, Ecuador"
                        },
                        {
                            imagen: imgP7,
                            enlace: "https://www.instagram.com/p/C2P083pOw3q/",
                            mensaje: "@sopletee_ se hospedo en el @trypbywyndhamguayaquil donde durante su estadía disfruto  ¡Todo gracias a su suscripción de VisitaEcuador.com!",
                            ubicacion: "Guayaquil, Ecuador"
                        },
                        {
                            imagen: imgP8,
                            enlace: "https://www.tiktok.com/@kamiramona/video/7361224495941553414",
                            mensaje: "Nueva forma para viajar desbloqueada ✈️✨ @visitaecuador.com",
                            ubicacion: "Quito, Ecuador"
                        },
                        {
                            imagen: imgP11,
                            enlace: "https://www.tiktok.com/@visitaecuadorinfl/video/7394500130772094214?is_from_webapp=1&web_id=7478707606246213126",
                            mensaje: "Alexa Rodas se hospedo en el Hotel River Garden gracias a su suscripción de VisitaEcuador.com. ",
                            ubicacion: "Quito, Ecuador"
                        },
                        {
                            imagen: imgP15 ,
                            enlace: "https://www.instagram.com/reel/DBM4TdnplER/",
                            mensaje: "Blogsito cumpleañero🥰🥳 empezamos bonito los 26❤️ gracias a @visitaecuadorcom",
                            ubicacion: "Guayaquil, Ecuador"
                        },
                        {
                            imagen: imgP19 ,
                            enlace: "https://www.instagram.com/p/C9SX-UpJGgL/",
                            mensaje: "Amandooooo 🐚🏝️🌞 gracias a @visitaecuadorcom",
                            ubicacion: "Guayaquil, Ecuador"
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default Influencers;
