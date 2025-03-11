import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";

const CustomNextArrow = (props) => {
  return (
      <div
          className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer rounded-full bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white h-8 w-8 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          onClick={props.onClick}>
        <span className="icon-[material-symbols--arrow-forward-ios] h-4 w-4"></span>
      </div>
  );
};

const CustomPrevArrow = (props) => {
  return (
      <div
          className="absolute top-1/2 transform -translate-y-1/2 left-3 z-10 cursor-pointer rounded-full bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white h-8 w-8 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          onClick={props.onClick}>
        <span className="icon-[material-symbols--arrow-back-ios-new] h-4 w-4"></span>
      </div>
  );
};

const ImageModal = ({ src, isOpen, onClose }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const descriptions = {
    "./images/foto01.png": "Bernardo Polo Andrade durante una conferencia empresarial en Ciudad de México, compartiendo su visión sobre liderazgo sostenible y estrategias innovadoras para el crecimiento empresarial en Latinoamérica.",
    "./images/foto02.png": "Entrevista exclusiva con medios locales donde Bernardo habla sobre sus proyectos recientes, futuras iniciativas y su perspectiva sobre los desafíos económicos actuales.",
    "./images/foto03.png": "Bernardo en un evento benéfico, demostrando su compromiso con causas sociales importantes en la comunidad y su filosofía de retribuir a la sociedad a través del emprendimiento consciente.",
    "./images/foto04.png": "Reunión estratégica con emprendedores jóvenes donde comparte consejos basados en su experiencia profesional y mentora a la próxima generación de líderes empresariales.",
  };

  return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
        <div
            ref={modalContentRef}
            className="bg-white rounded-xl max-w-5xl flex flex-col md:flex-row items-stretch overflow-hidden shadow-2xl transform transition-all duration-500 scale-100 animate-modalEnter"
        >
          <div className="w-full md:w-3/6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#96c121]/30 to-[#005F6B]/30 mix-blend-overlay"></div>
            <img src={src} alt="Expanded" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/50 to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          <div className="w-full md:w-2/5 p-8 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-center mb-4">
              <div className="h-8 w-2 bg-gradient-to-b from-[#96c121] to-[#005F6B] rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-[#005F6B]">Bernardo Polo Andrade</h3>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-[#96c121] to-[#005F6B] mb-6 rounded-full"></div>
            <p className="text-gray-700 leading-relaxed mb-6 italic border-l-4 border-[#96c121] pl-4">
              {descriptions[src] || "Imagen de la galería fotográfica de Bernardo Polo Andrade."}
            </p>

          </div>
        </div>
      </div>
  );
};

const Fotografias = () => {
  const [modalImage, setModalImage] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const images = [
    "./images/foto01.png",
    "./images/foto02.png",
    "./images/foto03.png",
    "./images/foto04.png"
  ];

  const descriptions = {
    "./images/foto01.png": "Conferencia empresarial",
    "./images/foto02.png": "Entrevista con medios",
    "./images/foto03.png": "Evento benéfico",
    "./images/foto04.png": "Reunión con emprendedores",
  };

  return (
      <div id="galeria" className="py-8">
        <div className="mb-8 max-w-3xl">
          <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005F6B] to-[#96c121]'>Bernardo Polo Andrade en Accion</h2>
          <div className="h-1 w-24 bg-[#005F6B] mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Sumérgete en la vida de Bernardo Polo Andrade a través de nuestra exclusiva galería fotográfica.
            Estas imágenes capturan la esencia y el dinamismo de su impactante presencia en la escena empresarial y
            social.
          </p>
        </div>

        <div className="relative pb-10">
          <Slider {...settings}>
            {images.map((src, index) => (
                <div key={index} className="px-3 py-2">
                  <div
                      className={`relative overflow-hidden rounded-xl transition-all duration-500 transform ${activeSlide === index ? 'scale-105 shadow-2xl z-10' : 'scale-95 shadow-lg'}`}
                  >
                    <div className="relative group cursor-pointer" onClick={() => openModal(src)}>
                      <img
                          src={src}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                        <h3 className="text-lg font-bold mb-1">{descriptions[src]}</h3>
                        <p className="text-sm opacity-90">Haz clic para ver más detalles</p>
                      </div>
                      <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#005F6B] transition-all duration-300 rounded-xl"></div>
                    </div>
                  </div>
                </div>
            ))}
          </Slider>
        </div>

        <ImageModal
            src={modalImage}
            isOpen={modalImage !== null}
            onClose={closeModal}
        />
      </div>
  );
};

export default Fotografias;
