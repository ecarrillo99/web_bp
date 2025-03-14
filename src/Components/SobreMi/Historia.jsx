import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Slider from "react-slick";
import Logo from "../../imagenes/logo_verde.png";
import { motion, AnimatePresence } from "framer-motion";

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

const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                dots: true,
            },
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 3,
                dots: true,
            },
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                dots: true,
            },
        },
    ]
};

const achievementsData = {
    2000: {
        type: "video",
        videoId: "P2t4zP4ugPo",
        description: "En el año 2000 bajo el nombre de Ecuaventura.com, la ministra Rocío Vásquez lo oficializó como el Portal Oficial de Turismo del Ecuador (2000-2004), estableciendo un precedente en la digitalización del sector turístico en el país.",
        lab: "Nombramiento como el Portal Oficial de Turismo del Ecuador.",
        icon: "icon-[material-symbols--travel-explore-rounded]"
    },
    2006: {
        type: "icon",
        image: Logo,
        description: "En diciembre de 2006, durante la gestión de la ministra María Isabel Salvador, Ecuaventura.com cambia su nombre a VistaEcuador.com, reflejando un enfoque más amplio para promover el país a nivel internacional. Este cambio no solo representó un cambio de nombre, sino una transformación en la manera en que Ecuador se proyectaba al mundo.",
        lab: "Una historia más sobre nuestra marca impactando al mundo.",
        icon: "icon-[material-symbols--branding-watermark]"
    },
    2007: {
        image: "https://www.visitaecuador.com/ve/img/contenido/informacion/hall/ministerio-turismo_02.jpg",
        description: "En 2007, El Portal Visita Ecuador recibe un reconocimiento por fomentar el turismo en Ecuador. Este reconocimiento dado al Ing. Bernardo Polo consolidó su trayectoria como pionero turístico, habiendo contribuido significativamente al desarrollo del turismo en Ecuador.",
        lab: "Reconoce al Pionero en Turismo de nuestro Ecuador.",
        icon: "icon-[material-symbols--award-star-rounded]"
    },
    2009: {
        image: "https://www.visitaecuador.com/ve/img/contenido/informacion/hall/municipio-chordeleg-org.jpg",
        description: "En 2009, El Ing. Bernardo Polo una vez más demuestra su presencia en el país al recibir un reconocimiento por una vez más lograr fomentar el turismo en nuestro país, este reconocimiento dado por el alcalde de Chordeleg el Dr. Flavio Barros Reinoso.",
        lab: "Reconocimiento de la alcaldía de Chordeleg.",
        icon: "icon-[material-symbols--location-city]"
    },
    2017: {
        type: "video1",
        videoId: "QaL6cG4LCNU",
        description: "En 2017, En su búsqueda constante de innovación, VistaEcuador.com desarrolló la primera APP de reservas hoteleras en Ecuador, permitiendo a los usuarios acceder a descuentos y realizar reservas directas desde sus dispositivos móviles. Esta tecnología fue tan exitosa que sirvió de inspiración para Disney Concierge, una aplicación utilizada en los parques de Disney para gestionar la experiencia de los visitantes.",
        lab: "Conoce mi app, y disfruta de viajar con VistaEcuador.",
        icon: "icon-[material-symbols--smartphone]"
    },
    2018: {
        image: "https://www.visitaecuador.com/ve/img/contenido/informacion/hall/mmecuador-org.jpg",
        description: "En 2018, Vista Ecuador fue reconocida como una empresa triple A por mucho mejor ecuador quien hoy es la garantía y el respaldo de las empresas Ecuatorianas, así demostrando una vez más la calidad que tiene VistaEcuador.",
        lab: "Reconocimiento como empresa Triple A.",
        icon: "icon-[material-symbols--verified]"
    }
};

const YearCard = ({ year, data, isSelected, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`flex flex-col p-4 m-2 items-center justify-center rounded-lg cursor-pointer shadow-md transition-all duration-300 h-32 ${
                isSelected
                    ? 'bg-[#96C121] text-white'
                    : 'bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800'
            }`}
        >
            <span className={`${data.icon} text-2xl mb-2`}></span>
            <div className="font-bold text-xl mb-1">{year}</div>
            <div className="text-xs text-center font-medium line-clamp-2">{data.lab}</div>
        </motion.div>
    );
};

const Historia = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [timelineYears] = useState(Object.keys(achievementsData));

    const openModal = (year) => {
        setSelectedYear(year);
    };

    const closeModal = () => {
        setSelectedYear(null);
    };

    const renderModalContent = (year) => {
        const achievement = achievementsData[year];
        if (achievement.type === "video" || achievement.type === "video1") {
            return (
                <div className="w-full h-full">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${achievement.videoId}?autoplay=1`}
                        title={`Logro ${year}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        }
        if (achievement.type === "icon") {
            return (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <img
                        src={achievement.image}
                        alt={`Logro ${year}`}
                        className="max-w-full max-h-full object-contain p-6"
                    />
                </div>
            );
        }

        return (
            <div className="w-full h-full">
                <img
                    src={achievement.image}
                    alt={`Logro ${year}`}
                    className="w-full h-full object-cover"
                />
            </div>
        );
    };

    return (
        <div id="logros" className="flex flex-col gap-4 relative bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm">
            <div className="text-center mb-4">
                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005F6B] to-[#96c121]'>Trayectoria y Excelencia</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Sumérgete en la historia de Bernardo Polo, desde sus comienzos hasta los hitos más significativos
                    de su carrera. Esta cronología destaca su compromiso con la innovación y excelencia en el turismo
                    ecuatoriano.
                </p>
            </div>

            <div className="relative">
                <div className="overflow-hidden rounded-xl">
                    <Slider {...settings}>
                        {timelineYears.map((year) => (
                            <YearCard
                                key={year}
                                year={year}
                                data={achievementsData[year]}
                                isSelected={selectedYear === year}
                                onClick={() => openModal(year)}
                            />
                        ))}
                    </Slider>
                </div>

                <div className="absolute -bottom-3 left-0 w-full flex justify-center">
                    <div className="h-1 bg-gradient-to-r from-transparent via-[#005F6B] to-transparent w-3/4"></div>
                </div>
            </div>

            <AnimatePresence>
                {selectedYear && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="bg-white max-w-5xl w-full grid md:grid-cols-2 rounded-xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="h-96 md:h-auto">
                                {renderModalContent(selectedYear)}
                            </div>
                            <div className="p-8 flex flex-col justify-center relative">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                                >
                                    <span className="icon-[material-symbols--close] text-2xl"></span>
                                </button>

                                <div className="flex items-center mb-4">
                                    <span className={`${achievementsData[selectedYear].icon} text-3xl text-[#96C121] mr-3`}></span>
                                    <h2 className="text-3xl font-bold text-[#96C121]">{selectedYear}</h2>
                                </div>

                                <h3 className="text-xl font-medium mb-4 text-gray-800">
                                    {achievementsData[selectedYear].lab}
                                </h3>

                                <p className="text-gray-700 leading-relaxed">
                                    {achievementsData[selectedYear].description}
                                </p>

                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <div className="flex items-center text-sm text-[#005F6B]">
                                        <span className="icon-[material-symbols--history] mr-2"></span>
                                        <span>Parte de nuestra historia</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Historia;
