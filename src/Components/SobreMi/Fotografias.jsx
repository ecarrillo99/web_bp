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
  slidesToShow: 4,
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

const Fotografias = () => {
  return (
    <div id="galeria" className='flex flex-col gap-1 '>
      <label className='text-xl font-light'>Bernardo Polo Andrade en Acción</label>
      <label className=' text-gray-500 font-extralight text-sm'>Sumérgete en la vida de Bernardo Polo Andrade a través de una exclusiva galería fotográfica. Desde eventos públicos hasta encuentros con admiradores y entrevistas en medios, estas imágenes capturan la esencia y el dinamismo de su impactante presencia en la escena empresarial y social.</label>
      <div >
        <Slider {...settings} >
          <div >
            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-sm gap-1">
              <img src="./images/foto01.png" />
            </div>
          </div>
          <div>
            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-sm gap-1">
              <img src="./images/foto02.png" />
            </div>
          </div>
          <div>
            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-sm gap-1">
              <img src="./images/foto03.png" />
            </div>
          </div>
          <div>
            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-sm gap-1">
              <img src="./images/foto04.png" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Fotografias;