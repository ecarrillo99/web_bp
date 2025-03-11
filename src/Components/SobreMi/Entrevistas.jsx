import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
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

const VideoCard = ({ embedUrl, title, mediaType }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden rounded-lg transition-all duration-300 transform"
            style={{
                transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-1 rounded-lg shadow-xl">
                <div className="bg-white rounded-md overflow-hidden">
                    <div className="relative">
                        <iframe
                            width="100%"
                            height="180"
                            src={embedUrl}
                            title={title}
                            frameBorder="0"
                            className="rounded-t-md"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <div className="absolute top-2 right-2 bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white text-xs px-2 py-1 rounded-full">
                            {mediaType}
                        </div>
                    </div>
                    <div className="p-3">
                        <h3 className="font-medium text-gray-800 truncate">{title}</h3>
                        <p className="text-xs text-gray-500 mt-1">Medio de comunicación destacado</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Entrevistas = () => {
    const allVideos = [
//TV
        {
            url: "https://www.youtube.com/embed/jXB-9I6uUkw",
            title: "Entrevista en UNSION TV",
            mediaType: "television"
        },
        {
            url: "https://www.youtube.com/embed/scm_aVnTQFs",
            title: "ENTREVISTA EN ETV TELERAMA",
            mediaType: "television"
        },
        {
            url: "https://www.youtube.com/embed/ibvE2scGXiw",
            title: "Entrevista en Ecotel Tv",
            mediaType: "television"
        },
        {
            url: "https://www.youtube.com/embed/CVOxhBNdYbU",
            title: "Entrevista a Bernardo Polo",
            mediaType: "television"
        },

//PRENSA
        {
            url: "https://www.youtube.com/embed/fMpNCZXooRU",
            title: "Inovacion en Tics con Bernardo Polo",
            mediaType: "prensa"
        },
        {
            url: "https://www.youtube.com/embed/1FmgHlOPPWQ",
            title: "Usted podrá preparar sus vacaciones, ajustándose a su economía?",
            mediaType: "prensa"
        },
        {
            url: "https://www.youtube.com/embed/RWEb-4M60JY",
            title: "5 Ejes del Existo",
            mediaType: "prensa"
        },

// DIGITAL
        {
            url: "https://www.youtube.com/embed/RWEb-4M60JY",
            title: "Reportaje en Forbes Digital",
            mediaType: "digital"
        },
        {
            url: "https://www.youtube.com/embed/Hsegd4XgN3g",
            title: "Hoteles",
            mediaType: "digital"
        },

// RADIO
        {
            url: "https://www.facebook.com/plugins/video.php?height=314&width=560&href=https%3A%2F%2Fwww.facebook.com%2Fradiovisioncuenca%2Fvideos%2F419423643086043",
            title: "Diálogo Directo",
            mediaType: "radio"
        },
        {
            url: "https://www.facebook.com/plugins/video.php?height=314&width=560&href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D992034515670026",
            title: "Así se hace la mágia en la Radio!!",
            mediaType: "radio"
        }
    ];

    const [activeFilter, setActiveFilter] = useState("todos");

    const filteredVideos = activeFilter === "todos"
        ? allVideos
        : allVideos.filter(video => video.mediaType === activeFilter);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        dotsClass: "slick-dots custom-dots",
        appendDots: dots => (
            <div>
                <ul className="flex justify-center gap-2 mt-4"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-400 transition-all duration-300"></div>
        ),
    };

    const filterOptions = [
        { id: "todos", label: "Todos", icon: <span className="icon-[heroicons--squares-2x2] h-5 w-5 mr-1"></span> },
        { id: "prensa", label: "Prensa", icon: <span className="icon-[heroicons--newspaper] h-5 w-5 mr-1"></span> },
        { id: "radio", label: "Radio", icon: <span className="icon-[heroicons--radio] h-5 w-5 mr-1"></span> },
        { id: "television", label: "Televisión", icon: <span className="icon-[heroicons--tv] h-5 w-5 mr-1"></span>},
        { id: "digital", label: "Digitales", icon: <span className="icon-[heroicons--device-phone-mobile] h-5 w-5 mr-1"></span> }
    ];

    return (
        <div id="entrevistas" className="relative overflow-hidden py-4 my-4">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-[#ABC467] rounded-xl -z-10"></div>

            <div className="px-6 py-8">
                {/* Header y filtros en flex-row en pantallas medianas y grandes, column en móviles */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
                    {/* Título */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-8 w-1 bg-[#96c121] rounded-full"></div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Impacto en Medios
                            </h2>
                        </div>

                    </div>


                    <div className="flex  gap-2 justify-start md:justify-center">
                        {filterOptions.map(option => (
                            <button
                                key={option.id}
                                onClick={() => setActiveFilter(option.id)}
                                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeFilter === option.id
                                        ? "bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white shadow-md"
                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                {option.icon}
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
                <p className="text-gray-600 text-lg max-w-3xl mb-5 " style={{marginTop:"-20px"}}>
                    Explora las diversas entrevistas y coberturas mediáticas que destacan la trayectoria de Bernardo Polo Andrade. Su influencia trasciende fronteras y medios.
                </p>
                {filteredVideos.length > 0 ? (
                    <div className="px-4">
                        <Slider {...settings}>
                            {filteredVideos.map((video, index) => (
                                <div key={index} className="px-3">
                                    <VideoCard
                                        embedUrl={video.url}
                                        title={video.title}
                                        mediaType={video.mediaType}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-600">No hay entrevistas disponibles en esta categoría.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Entrevistas;
