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
  slidesToShow: 3,
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

const Entradas = () => {
    return (
        <div className='flex flex-col gap-1 '>
                <div >
                    <Slider {...settings} >
                        <div >
                            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-lg gap-1 bg-gray-100">
                              <label className="text-sm font-medium">Desmintiendo el mito del cangrejo en Churute</label>
                              <label className="text-xs italic font-light text-center">Hola, hola, hola. Amigos viajeros ¿se han preguntado como se obtiene la pulpa de cangrejo?. Bueno, después de tantos años de cmprarle a mi buena amiga Melva, quien ha vendido pulpa de cangrejos durante más de 30 años en Churute (en la provincia del Guayas). Me pregunté ¿cómo lo hace?</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-lg gap-1 bg-gray-100">
                              <label className="text-sm font-medium">Desmintiendo el mito del cangrejo en Churute</label>
                              <label className="text-xs italic font-light text-center">Hola, hola, hola. Amigos viajeros ¿se han preguntado como se obtiene la pulpa de cangrejo?. Bueno, después de tantos años de cmprarle a mi buena amiga Melva, quien ha vendido pulpa de cangrejos durante más de 30 años en Churute (en la provincia del Guayas). Me pregunté ¿cómo lo hace?</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-lg gap-1 bg-gray-100">
                              <label className="text-sm font-medium">Desmintiendo el mito del cangrejo en Churute</label>
                              <label className="text-xs italic font-light text-center">Hola, hola, hola. Amigos viajeros ¿se han preguntado como se obtiene la pulpa de cangrejo?. Bueno, después de tantos años de cmprarle a mi buena amiga Melva, quien ha vendido pulpa de cangrejos durante más de 30 años en Churute (en la provincia del Guayas). Me pregunté ¿cómo lo hace?</label>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
    );
};

export default Entradas;