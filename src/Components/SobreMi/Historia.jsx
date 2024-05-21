import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";

const CustomNextArrow = (props) => {
    return (
      <div
        className="-mr-3  absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer rounded-full bg-gray-100 text-greenVE-600 text-lg h-6 w-6 flex items-center justify-center pl-1"
        onClick={props.onClick}
        style={{ filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5))' }}>
        <span className="icon-[material-symbols--arrow-forward-ios] h-3 w-3"></span>
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    return (
      <div
        className="-ml-3 z-10  absolute top-1/2 transform -translate-y-1/2 left-0 cursor-pointer rounded-full bg-gray-100 text-greenVE-600 text-lg pr-1 h-6 w-6 flex items-center justify-center"
        onClick={props.onClick}
        style={{ filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5))' }}>
        <span className="icon-[material-symbols--arrow-back-ios-new] text-black h-3 w-3"></span>
      </div>
    );
  };

const settings = {
  dots: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 4000,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      },
    },]
};

const Historia = () => {
    return (
        <div id="logros" className='flex flex-col gap-1 '>
                <label className='text-xl font-light'>Reseña de los Momentos Clave en la Trayectoria de Bernardo Polo</label>
                <label className=' text-gray-500 font-extralight text-sm'>Sumérgete en la historia de Bernardo Polo, desde sus comienzos hasta los hitos más significativos de su carrera. Esta cronología te llevará a travez de los momentos que han modelado su camino hacia el éxito, destacando su compromiso y perseverancia.</label>
                <div >
                    <Slider {...settings} >
                        <div >
                            <div className="flex flex-col bg-gray-200 p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <label className="font-semibold text-sm">1997</label>
                                <label className="text-[10px]">Pionero en la instalación de redes de internet inalámbrico en el Ecuador.</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col bg-gray-200 p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <label className="font-semibold text-sm">1998</label>
                                <label className="text-[10px]">Pionero en la instalación de redes de internet inalámbrico en el Ecuador.</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col bg-gray-200 p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <label className="font-semibold text-sm">2000</label>
                                <label className="text-[10px]">Pionero en la instalación de redes de internet inalámbrico en el Ecuador.</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col bg-gray-200 p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <label className="font-semibold text-sm">2006</label>
                                <label className="text-[10px]">Pionero en la instalación de redes de internet inalámbrico en el Ecuador.</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col bg-gray-200 p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <label className="font-semibold text-sm">2015</label>
                                <label className="text-[10px]">Pionero en la instalación de redes de internet inalámbrico en el Ecuador.</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col bg-gray-200 p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <label className="font-semibold text-sm">2018</label>
                                <label className="text-[10px]">Pionero en la instalación de redes de internet inalámbrico en el Ecuador.</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col bg-gray-200 p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <label className="font-semibold text-sm">2019</label>
                                <label className="text-[10px]">Pionero en la instalación de redes de internet inalámbrico en el Ecuador.</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col bg-gray-200 p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <label className="font-semibold text-sm">2020</label>
                                <label className="text-[10px]">Pionero en la instalación de redes de internet inalámbrico en el Ecuador.</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col bg-gray-200 p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <label className="font-semibold text-sm">2021</label>
                                <label className="text-[10px]">Pionero en la instalación de redes de internet inalámbrico en el Ecuador.</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col bg-gray-200 p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <label className="font-semibold text-sm">2022</label>
                                <label className="text-[10px]">Pionero en la instalación de redes de internet inalámbrico en el Ecuador.</label>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
    );
};

export default Historia;