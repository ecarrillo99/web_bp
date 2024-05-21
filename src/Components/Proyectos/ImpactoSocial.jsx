import React from 'react';
import ProyectoItem from './ProyectoItem';

const ImpactoSocial = () => {
    return (
        <div className='flex flex-col md:flex-row mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full mt-7'>
            <div className='flex flex-col gap-3'>
                <label className='text-2xl font-semibold -mb-3'>Proyectos de Impacto Social</label>
                <label className='text-xl font-light'>Trascendiendo números: el alma de nuestra comunidad digital</label>
                <label className=' text-gray-500 font-extralight text-sm'>En "Impactos Sociales", vamos más allá de las métricas. Cada interacción, comentario y gesto es una semilla de conexión genuina. En la comunidad de Bernardo Polo, el valor reside en el impacto huano, no en los números. ¡Únete a nosotros y sé parte de algo significativo!</label>
                <div className='flex gap-14'>
                    <ProyectoItem 
                        imagen={"./images/proyecto_imagen01.png"} 
                        enlace={"https://www.facebook.com/bernardopolopolito/videos/1649537292241726/"} 
                        mensaje={"Aumentaron de ventas. Los clientes llegaban con el video para hacer pedidos."}
                        ubicacion={"Rocío, Cuenca - Azuay"}
                    />
                    <ProyectoItem 
                        imagen={"./images/proyecto_imagen02.png"} 
                        enlace={"https://www.facebook.com/bernardopolopolito/videos/281784074210474/"} 
                        mensaje={"Aumentaron de ventas gracias al contenido. Construyeron su casa de cemento."}
                        ubicacion={"Danny, Churute - Guayas"}
                    />
                    <ProyectoItem 
                        imagen={"./images/proyecto_imagen03.png"} 
                        enlace={"https://www.facebook.com/bernardopolopolito/videos/691013228632325"} 
                        mensaje={"Me compraron bollos para llevar a Estados Unidos y vinieron a conocerme. Próximament los bollos del Cartucho en Queens."}
                        ubicacion={"Cartucho, Guayaquil - Guayas"}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImpactoSocial;