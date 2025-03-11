import React from 'react';
import ProyectoSection from './ProyectoSection';

const Influencers = () => {
    return (
        <div className="mx-auto px-4 py-12" style={{ maxWidth: 'calc(100% - 440px)' }}>
            <div className="text-center mb-12">
                <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005F6B] to-[#96c121]'>Programa de Influencers</h1>
                <h2 className="text-2xl mb-4">Embajadores digitales del Ecuador</h2>
                <p className="text-lg mb-8 mx-auto">
                    Con Visita Ecuador, queremos que los influencers viajen por todo nuestro hermoso Ecuador para
                    activar el turismo
                    y mejorar la economía del país. A través de su alcance y autenticidad, estos creadores de contenido
                    pueden mostrar la riqueza cultural, natural y gastronómica de nuestras regiones, generando un
                    impacto
                    positivo en las comunidades locales y atrayendo visitantes tanto nacionales como internacionales.
                </p>
            </div>

            <ProyectoSection
                titulo="Creadores/Networking"
                proyectos={[
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "./images/proyecto_imagen01.png",
                        mensaje: "Fiestas populares: color, música y tradición",
                        ubicacion: "Imbabura, Ecuador"
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
                    // Duplicados para tener 6 proyectos
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
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/rutas1",
                        mensaje: "Descubre la magia de la Amazonía ecuatoriana",
                        ubicacion: "Napo, Ecuador"
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
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/gastro1",
                        mensaje: "Sabores ancestrales que cuentan historias",
                        ubicacion: "Azuay, Ecuador"
                    },
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/gastro2",
                        mensaje: "Del cacao al chocolate: la ruta del sabor",
                        ubicacion: "Los Ríos, Ecuador"
                    },
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/gastro3",
                        mensaje: "Mariscos frescos: del mar a tu mesa",
                        ubicacion: "Esmeraldas, Ecuador"
                    },
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/gastro1",
                        mensaje: "Platos típicos de la sierra ecuatoriana",
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
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "./images/proyecto_imagen01.png",
                        mensaje: "Fiestas populares: color, música y tradición",
                        ubicacion: "Imbabura, Ecuador"
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
                titulo="Cultura y Tradiciones"
                proyectos={[
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "./images/proyecto_imagen01.png",
                        mensaje: "Fiestas populares: color, música y tradición",
                        ubicacion: "Imbabura, Ecuador"
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
            titulo="Hoteles"
            proyectos={[
                {
                    imagen: "./images/proyecto_imagen01.png",
                    enlace: "./images/proyecto_imagen01.png",
                    mensaje: "Fiestas populares: color, música y tradición",
                    ubicacion: "Imbabura, Ecuador"
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
        </div>
    );
};

export default Influencers;
