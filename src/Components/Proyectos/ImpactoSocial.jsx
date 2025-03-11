import React from 'react';
import ProyectoSection from './ProyectoSection'; // Componente actualizado con carrusel
import imgP from '../../imagenes/instas.png'
import imgP1 from '../../imagenes/img_1.png'
import imgP2 from '../../imagenes/img.png'
import imgP3 from '../../imagenes/img_2.png'
import imgP4 from '../../imagenes/img_3.png'
import imgP5 from '../../imagenes/img_4.png'
import imgP6 from '../../imagenes/img_5.png'
import imgP7 from '../../imagenes/img_6.png'
import imgP8 from '../../imagenes/img_7.png'
import imgP9 from '../../imagenes/img_8.png'
import imgP10 from '../../imagenes/img_9.png'
import imgP11 from '../../imagenes/img_10.png'

const ImpactoSocial = () => {
    return (
        <div className="mx-auto px-4 py-12" style={{ maxWidth: 'calc(100% - 440px)' }}>
            <div className="text-center mb-12">
                <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005F6B] to-[#96c121]'>Proyecto de Impacto Social</h1>
                <h2 className="text-2xl mb-4">Trascendiendo números: el alma de nuestra comunidad digital</h2>
                <p className="text-lg mb-8 mx-auto">
                    En "Impactos Sociales", vamos más allá de las métricas. Cada interacción, comentario y gesto es una
                    semilla de conexión genuina.
                    En la comunidad de Bernardo Polo, el valor reside en el impacto humano, no en los números.
                    ¡Únete a nosotros y sé parte de algo significativo!
                </p>
            </div>

            <ProyectoSection
                titulo="Emprendedores"
                proyectos={[
                    {
                        imagen: imgP,
                        enlace: "https://www.instagram.com/reel/DFoCU7uJ71F/",
                        mensaje: "Transformando ideas en soluciones para la comunidad",
                        ubicacion: "Quito, Ecuador"
                    },
                    {
                        imagen: imgP1,
                        enlace: "https://www.instagram.com/reel/DFEPsKIJByR/",
                        mensaje: "Innovación con propósito para el desarrollo local",
                        ubicacion: "Guayaquil, Ecuador"
                    },
                    {
                        imagen: imgP2,
                        enlace: "https://ejemplo.com/emprendedores3",
                        mensaje: "Creando oportunidades para los jóvenes talentos",
                        ubicacion: "Cuenca, Ecuador"
                    },
                    // Duplicados para tener 6 proyectos
                    {
                        imagen: imgP,
                        enlace: "https://www.instagram.com/reel/DFoCU7uJ71F/",
                        mensaje: "Iniciativas comunitarias con impacto social",
                        ubicacion: "Quito, Ecuador"
                    },
                    {
                        imagen: imgP1,
                        enlace: "https://www.instagram.com/reel/DFEPsKIJByR/",
                        mensaje: "Startups que transforman la economía local",
                        ubicacion: "Guayaquil, Ecuador"
                    },
                    {
                        imagen: imgP2,
                        enlace: "https://ejemplo.com/emprendedores3",
                        mensaje: "Proyectos sostenibles para el futuro del Ecuador",
                        ubicacion: "Cuenca, Ecuador"
                    }
                ]}
            />

            <ProyectoSection
                titulo="La Sazón De"
                proyectos={[
                    {
                        imagen: imgP3,
                        enlace: "https://www.instagram.com/reel/DGEWygVp6QK/",
                        mensaje: "Sabores auténticos que rescatan nuestra identidad",
                        ubicacion: "Manabí, Ecuador"
                    },
                    {
                        imagen: imgP4,
                        enlace: "https://www.instagram.com/reel/DFya9PmJMlo/",
                        mensaje: "Gastronomía que une tradiciones y corazones",
                        ubicacion: "Esmeraldas, Ecuador"
                    },
                    {
                        imagen: imgP5,
                        enlace: "https://www.instagram.com/reel/DFYpUzyJkZz/",
                        mensaje: "Del campo a la mesa, sabor y sostenibilidad",
                        ubicacion: "Loja, Ecuador"
                    },
                    // Duplicados para tener 6 proyectos
                    {
                        imagen: imgP3,
                        enlace: "https://www.instagram.com/reel/DGEWygVp6QK/",
                        mensaje: "Recetas ancestrales en manos contemporáneas",
                        ubicacion: "Manabí, Ecuador"
                    },
                    {
                        imagen: imgP4,
                        enlace: "https://www.instagram.com/reel/DFya9PmJMlo/",
                        mensaje: "Cocineros locales que preservan nuestra cultura",
                        ubicacion: "Esmeraldas, Ecuador"
                    },
                    {
                        imagen: imgP5,
                        enlace: "https://www.instagram.com/reel/DFYpUzyJkZz/",
                        mensaje: "Fusión de sabores: la nueva cocina ecuatoriana",
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
                        mensaje: "La esencia de nuestros barrios en cada historia",
                        ubicacion: "Ambato, Ecuador"
                    },
                    {
                        imagen: imgP7,
                        enlace: "https://www.instagram.com/reel/DF_VABfpAyN/",
                        mensaje: "Cultura callejera, identidad y resistencia",
                        ubicacion: "Santo Domingo, Ecuador"
                    },
                    {
                        imagen: imgP8,
                        enlace: "https://www.instagram.com/reel/DFd0MD4JJls/",
                        mensaje: "Transformando espacios públicos en lugares de encuentro",
                        ubicacion: "Machala, Ecuador"
                    },
                    // Duplicados para tener 6 proyectos
                    {
                        imagen: imgP6,
                        enlace: "https://www.instagram.com/reel/DG3RJf6poaC/",
                        mensaje: "Relatos urbanos que construyen comunidad",
                        ubicacion: "Ambato, Ecuador"
                    },
                    {
                        imagen: imgP7,
                        enlace: "https://www.instagram.com/reel/DF_VABfpAyN/",
                        mensaje: "Arte urbano que da voz a los barrios",
                        ubicacion: "Santo Domingo, Ecuador"
                    },
                    {
                        imagen: imgP8,
                        enlace: "https://www.instagram.com/reel/DFd0MD4JJls/",
                        mensaje: "Juventud y cultura local en los espacios urbanos",
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
                        mensaje: "Preservando nuestras tradiciones para el futuro",
                        ubicacion: "Riobamba, Ecuador"
                    },
                    {
                        imagen: imgP10,
                        enlace: "https://www.instagram.com/reel/C1p-RV9J22h/",
                        mensaje: "El valor de lo artesanal en un mundo digital",
                        ubicacion: "Ibarra, Ecuador"
                    },
                    {
                        imagen: imgP11,
                        enlace: "https://www.instagram.com/reel/CkRuvyDJHdE/",
                        mensaje: "Raíces culturales que inspiran nuevas generaciones",
                        ubicacion: "Otavalo, Ecuador"
                    },
                    // Duplicados para tener 6 proyectos
                    {
                        imagen: imgP9,
                        enlace: "https://www.instagram.com/reel/C0nE-7bx15F/",
                        mensaje: "Tradiciones ecuatorianas que perduran en el tiempo",
                        ubicacion: "Riobamba, Ecuador"
                    },
                    {
                        imagen: imgP10,
                        enlace: "https://www.instagram.com/reel/C1p-RV9J22h/",
                        mensaje: "Oficios tradicionales en la era contemporánea",
                        ubicacion: "Ibarra, Ecuador"
                    },
                    {
                        imagen: imgP11,
                        enlace: "https://www.instagram.com/reel/CkRuvyDJHdE/",
                        mensaje: "Festividades ancestrales que unen a las comunidades",
                        ubicacion: "Otavalo, Ecuador"
                    }
                ]}
            />

            <ProyectoSection
                titulo="El Sueño De"
                proyectos={[
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/sueno1",
                        mensaje: "Construyendo futuros brillantes a través de la educación",
                        ubicacion: "Tena, Ecuador"
                    },
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/sueno2",
                        mensaje: "Talentos emergentes con visión de cambio",
                        ubicacion: "Manta, Ecuador"
                    },
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/sueno3",
                        mensaje: "Sembrando esperanza en cada rincón del Ecuador",
                        ubicacion: "Galápagos, Ecuador"
                    },
                    // Duplicados para tener 6 proyectos
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/sueno1",
                        mensaje: "Jóvenes líderes transformando su entorno",
                        ubicacion: "Tena, Ecuador"
                    },
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/sueno2",
                        mensaje: "Sueños que se transforman en oportunidades",
                        ubicacion: "Manta, Ecuador"
                    },
                    {
                        imagen: "./images/proyecto_imagen01.png",
                        enlace: "https://ejemplo.com/sueno3",
                        mensaje: "Innovación social desde las comunidades",
                        ubicacion: "Galápagos, Ecuador"
                    }
                ]}
            />
        </div>
    );
};

export default ImpactoSocial;
