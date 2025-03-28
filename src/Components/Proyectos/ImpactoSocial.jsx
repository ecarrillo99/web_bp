import React from 'react';
import ProyectoSection from './ProyectoSection';
import imgP from '../../imagenes/Social/instas.png'
import imgP1 from '../../imagenes/Social/img_1.png'
import imgP2 from '../../imagenes/Social/img.png'
import imgP3 from '../../imagenes/Social/img_2.png'
import imgP4 from '../../imagenes/Social/img_3.png'
import imgP5 from '../../imagenes/Social/img_4.png'
import imgP6 from '../../imagenes/Social/img_5.png'
import imgP7 from '../../imagenes/Social/img_6.png'
import imgP8 from '../../imagenes/Social/img_7.png'
import imgP9 from '../../imagenes/Social/img_8.png'
import imgP10 from '../../imagenes/Social/img_9.png'
import imgP11 from '../../imagenes/Social/img_10.png'
import imgP12 from '../../imagenes/Social/img_11.png'
import imgP13 from '../../imagenes/Social/img_12.png'
import imgP14 from '../../imagenes/Social/img_13.png'
import imgP15 from '../../imagenes/Social/img_14.png'
import imgP16 from '../../imagenes/Social/img_15.png'
import imgP17 from '../../imagenes/Social/img_16.png'
import imgP18 from '../../imagenes/Social/img_17.png'
import imgP19 from '../../imagenes/Social/img_18.png'
import imgP20 from '../../imagenes/Social/img_19.png'
import imgP21 from '../../imagenes/Social/img_25.png'
import imgP22 from '../../imagenes/Social/img_26.png'
import imgP23 from '../../imagenes/Social/img_27.png'

const ImpactoSocial = () => {
    return (
        <div className="w-full mx-auto px-4 py-8 sm:py-12 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
                <h1 className='text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005F6B] to-[#96c121]'>Proyecto
                    de Impacto Social</h1>
                <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4">Trascendiendo números: el alma de nuestra comunidad
                    digital</h2>
                <p className="text-base sm:text-lg mb-6 sm:mb-8 mx-auto max-w-3xl">
                    En "Impactos Sociales", vamos más allá de las métricas. Cada interacción, comentario y gesto es una
                    semilla de conexión genuina.
                    En la comunidad de Bernardo Polo, el valor reside en el impacto humano, no en los números.
                    ¡Únete a nosotros y sé parte de algo significativo!
                </p>
            </div>
            <div className="max-w-6xl mx-auto">
                <ProyectoSection
                    titulo="Emprendedores"
                    proyectos={[
                        {
                            imagen: imgP,
                            enlace: "https://www.instagram.com/reel/DFoCU7uJ71F/",
                            mensaje: "PONLE TÚ SELLO PERSONAL !! Así crean tu estilo único en Zombie Kater",
                            ubicacion: "Cuenca, Ecuador"
                        },
                        {
                            imagen: imgP1,
                            enlace: "https://www.instagram.com/reel/DFEPsKIJByR/",
                            mensaje: "¡TODO CON MIEL! Productos Naturales hechos con mucho pero mucho AMOR.",
                            ubicacion: "Cuenca, Ecuador"
                        },
                        {
                            imagen: imgP2,
                            enlace: "https://www.instagram.com/reel/DDF-zB9xz8d/",
                            mensaje: "Morochos del fantasma, sabor paranormal! 👻🥤",
                            ubicacion: "Cuenca, Ecuador"
                        },
                        {
                            imagen: imgP21,
                            enlace: "https://www.instagram.com/reel/DDIilJvphKf/",
                            mensaje: "Nos pegamos un platanazo en Guayaquil",
                            ubicacion: "Guayaquil, Ecuador"
                        },
                        {
                            imagen: imgP23,
                            enlace: "https://www.instagram.com/reel/DBuJt6mJZjs/",
                            mensaje: "El jugueteo del Garañón en fiestas de Cuenca ❤️💛",
                            ubicacion: "Cuenca, Ecuador"
                        },
                        {
                            imagen: imgP22,
                            enlace: "https://www.instagram.com/reel/DEgHsrkJCQ3/",
                            mensaje: "ALERTA DE DULCE!! Mochi-licioso 😋",
                            ubicacion: "Cuenca, Ecuador"
                        },
                    ]}
                />

                <ProyectoSection
                    titulo="La Sazón De"
                    proyectos={[
                        {
                            imagen: imgP3,
                            enlace: "https://www.instagram.com/reel/DGEWygVp6QK/",
                            mensaje: "Si te gusta la pieza ya sabes donde es! 😉🌭 #HotDogsDeDonMaño #BernardoPolo",
                            ubicacion: "Manabí, Ecuador"
                        },
                        {
                            imagen: imgP4,
                            enlace: "https://www.instagram.com/reel/DFya9PmJMlo/",
                            mensaje: "Güecaquil: Un restaurante costeño bacán con el puro sabor ecuatoriano. 🇪🇨🦞🍤 #BernardoPolo #VisitaEcuador",
                            ubicacion: "Esmeraldas, Ecuador"
                        },
                        {
                            imagen: imgP5,
                            enlace: "https://www.instagram.com/reel/DFYpUzyJkZz/",
                            mensaje: "Nos pegamos unos cueritos en el mercado 😋🤤: La sazón de Estefania Vintimilla #BernardoPolo #VisitaEcuador",
                            ubicacion: "Loja, Ecuador"
                        },
                        {
                            imagen: imgP12,
                            enlace: "https://www.instagram.com/reel/DFOVzHTJloo/",
                            mensaje: "No creerás lo buenas que están éstas fresas con crema!😍🍓 Si eres amante del dulce tienes que ver este video",
                            ubicacion: "Manabí, Ecuador"
                        },
                        {
                            imagen: imgP13,
                            enlace: "https://www.instagram.com/reel/DDP9aRWJWTQ/",
                            mensaje: "Una salchipapa hecha con mucho pero mucho AMORRR!\n" +
                                "\n" +
                                "#bernardopolo #visitaecuador",
                            ubicacion: "Esmeraldas, Ecuador"
                        },
                        {
                            imagen: imgP14,
                            enlace: "https://www.instagram.com/reel/DBrqxP9p1rF/",
                            mensaje: "Preparamos un levanta m*3rto$ !!😱 La Sazón de Oss Ventura.\n" +
                                "\n" +
                                "#bernardopolo #visitaecuador ",
                            ubicacion: "Loja, Ecuador"
                        }
                    ]}
                />

                <ProyectoSection
                    titulo="Longo de Barrio"
                    proyectos={[
                        {
                            imagen: imgP6,
                            enlace: "https://www.instagram.com/reel/DG3RJf6poaC/",
                            mensaje: "Polito Longo de Barrio (Parte 1) #BernardoPolo #BarrioLaGloria",
                            ubicacion: "Ambato, Ecuador"
                        },
                        {
                            imagen: imgP7,
                            enlace: "https://www.instagram.com/reel/DF_VABfpAyN/",
                            mensaje: "Así se ve un cojudo pidiendo comida para llevar !! 🤪 #BernardoPolo #VisitaEcuador #McMary #food ",
                            ubicacion: "Santo Domingo, Ecuador"
                        },
                        {
                            imagen: imgP8,
                            enlace: "https://www.instagram.com/reel/DFd0MD4JJls/",
                            mensaje: "Aquí vuelves a ser un niño!! Una experiencia única la que vivimos en BLOW YOUR MIND. #BernardoPolo #VisitaEcuador",
                            ubicacion: "Machala, Ecuador"
                        },
                        {
                            imagen: imgP15,
                            enlace: "https://www.instagram.com/reel/DE3PTbnpw55/",
                            mensaje: "En ésta cafetería puedes crear tu obra de arte con café en mano TE VA A ENCANTAR !! 😍👩🏻‍🎨☕️🎨 #bernardopolo #visitaecuador ",
                            ubicacion: "Ambato, Ecuador"
                        },
                        {
                            imagen: imgP16,
                            enlace: "https://www.instagram.com/reel/DEyLIrJJhN_/",
                            mensaje: "Una Chococafetería espectacular, ubicada en el corazón de Cuenca 🍫☕️ #bernardopolo #visitaecuado",
                            ubicacion: "Santo Domingo, Ecuador"
                        },
                        {
                            imagen: imgP17,
                            enlace: "https://www.instagram.com/reel/DDiXLpjJgJV/",
                            mensaje: "Mc Mary modo navidad 🎄 🤶 #bernardopolo #visitaecuador #McMary",
                            ubicacion: "Machala, Ecuador"
                        }
                    ]}
                />

                <ProyectoSection
                    titulo="Los Clásicos"
                    proyectos={[
                        {
                            imagen: imgP9,
                            enlace: "https://www.instagram.com/reel/C0nE-7bx15F/",
                            mensaje: "Me pasó lo mismo que la Luisito!….netflix? #luisitocomunica #dientes #netflix",
                            ubicacion: "Cuenca, Ecuador"
                        },
                        {
                            imagen: imgP10,
                            enlace: "https://www.instagram.com/reel/C1p-RV9J22h/",
                            mensaje: "Explorando la CASA EMBRUJADA de Cuenca..misterios PARANORMALES🧟‍🦇",
                            ubicacion: "Cuenca, Ecuador"
                        },
                        {
                            imagen: imgP11,
                            enlace: "https://www.instagram.com/reel/CkRuvyDJHdE/",
                            mensaje: "No es de la forma que pensaban 😅\n" +
                                "\n" +
                                "#bernardopolo #hotelesfullvacations #clubvisita #disneyconcierge",
                            ubicacion: "Otavalo, Ecuador"
                        },
                        {
                            imagen: imgP18,
                            enlace: "https://www.instagram.com/reel/DDvGVb2JaG5/",
                            mensaje: "Bumblebee llegó a Visita Ecuador!!\n" +
                                "\n" +
                                "#bernardopolo #vistaecuador #polito #Bumblebee",
                            ubicacion: "Riobamba, Ecuador"
                        },
                        {
                            imagen: imgP19,
                            enlace: "https://www.instagram.com/reel/DAFGkBSpsXJ/",
                            mensaje: "🤪Pachito te lo lava 🫧\n" +
                                "Por solo $7 te lo deja reluciente no importa si es 4x4 o deportivo #bernardopolo ",
                            ubicacion: "Ibarra, Ecuador"
                        },
                        {
                            imagen: imgP20,
                            enlace: "https://www.instagram.com/reel/C_wMrSyp-Qp/",
                            mensaje: "Festividades ancestrales que unen a las comunidades",
                            ubicacion: "Otavalo, Ecuador"
                        }
                    ]}
                />
                <ProyectoSection
                    titulo="Toma mi Mano 🤝"
                    proyectos={[
                        {
                            imagen: imgP9,
                            enlace: "https://www.instagram.com/reel/C0nE-7bx15F/",
                            mensaje: "Me pasó lo mismo que la Luisito!….netflix? #luisitocomunica #dientes #netflix",
                            ubicacion: "Cuenca, Ecuador"
                        },
                        {
                            imagen: imgP10,
                            enlace: "https://www.instagram.com/reel/C1p-RV9J22h/",
                            mensaje: "Explorando la CASA EMBRUJADA de Cuenca..misterios PARANORMALES🧟‍🦇",
                            ubicacion: "Cuenca, Ecuador"
                        },
                        {
                            imagen: imgP11,
                            enlace: "https://www.instagram.com/reel/CkRuvyDJHdE/",
                            mensaje: "No es de la forma que pensaban 😅\n" +
                                "\n" +
                                "#bernardopolo #hotelesfullvacations #clubvisita #disneyconcierge",
                            ubicacion: "Otavalo, Ecuador"
                        },
                        {
                            imagen: imgP18,
                            enlace: "https://www.instagram.com/reel/DDvGVb2JaG5/",
                            mensaje: "Bumblebee llegó a Visita Ecuador!!\n" +
                                "\n" +
                                "#bernardopolo #vistaecuador #polito #Bumblebee",
                            ubicacion: "Riobamba, Ecuador"
                        },
                        {
                            imagen: imgP19,
                            enlace: "https://www.instagram.com/reel/DAFGkBSpsXJ/",
                            mensaje: "🤪Pachito te lo lava 🫧\n" +
                                "Por solo $7 te lo deja reluciente no importa si es 4x4 o deportivo #bernardopolo ",
                            ubicacion: "Ibarra, Ecuador"
                        },
                        {
                            imagen: imgP20,
                            enlace: "https://www.instagram.com/reel/C_wMrSyp-Qp/",
                            mensaje: "Festividades ancestrales que unen a las comunidades",
                            ubicacion: "Otavalo, Ecuador"
                        }
                    ]}
                />


            </div>
        </div>
    );
};

export default ImpactoSocial;
