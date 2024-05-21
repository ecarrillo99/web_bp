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

const Entrevistas = () => {
    return (
        <div id="entrevistas" className='flex flex-col gap-1 '>
                <label className='text-xl font-light'>Impacto en Medios, Digitales y Convencionales</label>
                <label className=' text-gray-500 font-extralight text-sm'>¡Explora las diversas entrevistas y coberturas mediáticas que destacan la trayectoria de Bernardo Polo Andrade! Desde programas de televisión hasta revistas digitales, descubre cómo su influencia trasciende fronteras y medios.</label>
                <div >
                    <Slider {...settings} >
                        <div >
                            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <iframe width="250" height="150" src="https://www.youtube.com/embed/fMpNCZXooRU?si=f_FN1clm_CZkNVU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <iframe width="250" height="150" src="https://www.youtube.com/embed/Hsegd4XgN3g?si=McSgS-mtRbkfePdb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <iframe width="250" height="150" src="https://www.youtube.com/embed/RWEb-4M60JY?si=I_YDJ3wECQRtp1N4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col  p-3 m-2 items-center justify-center rounded-sm gap-1">
                                <iframe width="250" height="150" src="https://www.youtube.com/embed/CVOxhBNdYbU?si=L0eWColQokhqZlqa?fs=1" webkitallowfullscreen mozallowfullscreen title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
    );
};

export default Entrevistas;