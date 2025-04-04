import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import imgP from "../../imagenes/img_28.png"
import imgP1 from "../../imagenes/the bizz 2012.png"
import imgP2 from "../../imagenes/galardon.png"
import imgP3 from "../../imagenes/turismo ecuador 2008.png"
import imgP4 from "../../imagenes/diario lideres.png"
import imgP5 from "../../imagenes/sabe2008.png"
import imgP6 from "../../imagenes/sabe2009.png"
import imgP7 from "../../imagenes/afiliado.png"
import imgP8 from "../../imagenes/fuckup.png"

const ReconocimientoModal = ({ isOpen, onClose, reconocimiento, reconocimientosData, onNavigate }) => {

    const modalContentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (reconocimiento) {
            const index = reconocimientosData.findIndex(r => r.id === reconocimiento.id);
            setCurrentIndex(index);
        }
    }, [reconocimiento, reconocimientosData]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && modalContentRef.current && !modalContentRef.current.contains(event.target)) {
                onClose();
            }
        };


        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }


        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);


    if (!isOpen || !reconocimiento) return null;

    const modalSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <ModalNextArrow />,
        prevArrow: <ModalPrevArrow />,
    };


    const handleNavigation = (direction) => {
        const newIndex = direction === 'next'
            ? (currentIndex + 1) % reconocimientosData.length
            : (currentIndex - 1 + reconocimientosData.length) % reconocimientosData.length;

        onNavigate(reconocimientosData[newIndex]);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: reconocimiento.titulo,
                text: reconocimiento.historia,
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(`${reconocimiento.titulo}\n\n${reconocimiento.historia}\n\n${window.location.href}`)
                .then(() => alert('Copiado al portapapeles'))
                .catch(err => console.error('Error sharing:', err));
        }
    };

    const handlePrint = () => {
        const printContent = `
            <html>
                <head>
                    <title>${reconocimiento.titulo}</title>
                    <style>
                        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; }
                        h1 { color: #005F6B; }
                        img { max-width: 100%; height: auto; }
                    </style>
                </head>
                <body>
                    <h1>${reconocimiento.titulo}</h1>
                    <p><strong>Fecha:</strong> ${reconocimiento.fecha}</p>
                    <p><strong>Lugar:</strong> ${reconocimiento.lugar}</p>
                    <h2>Historia</h2>
                    <p>${reconocimiento.historia}</p>
                    <img src="${reconocimiento.imagenes[0]}" alt="${reconocimiento.titulo}">
                </body>
            </html>
        `;

        const printWindow = window.open('', '', 'width=600,height=600');
        printWindow.document.open();
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div ref={modalContentRef} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">

                <div className="absolute top-1/2 left-4 z-50 transform -translate-y-1/2 ">
                    <button
                        onClick={() => handleNavigation('prev')}
                        className="bg-white/50 hover:bg-white/75 text-white p-1 rounded-full shadow-lg hover:opacity-80 transition-opacity h-8 w-8"
                    >
                        <span className="icon-[material-symbols--arrow-back-ios-new]  text-[#005F6B] h-6 w-6"></span>
                    </button>
                </div>
                <div className="absolute top-1/2 right-4 z-50 transform -translate-y-1/2 ">
                    <button
                        onClick={() => handleNavigation('next')}
                        className="bg-white/50 hover:bg-white/75 text-white p-1 rounded-full shadow-lg hover:opacity-80 transition-opacity h-8 w-8"
                    >
                        <span className="icon-[material-symbols--arrow-forward-ios]  text-[#005F6B] h-6 w-6"></span>
                    </button>
                </div>

                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-xl font-semibold text-gray-800">{reconocimiento.titulo}</h3>
                    <div className="flex items-center space-x-4">

                        <button
                            onClick={handleShare}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            title="Compartir"
                        >
                            <span className="icon-[material-symbols--share] h-6 w-6"></span>
                        </button>


                        <button
                            onClick={handlePrint}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            title="Imprimir"
                        >
                            <span className="icon-[material-symbols--print] h-6 w-6"></span>
                        </button>

                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            title="Cerrar"
                        >
                            <span className="icon-[material-symbols--close] h-6 w-6"></span>
                        </button>
                    </div>
                </div>

                <div className="p-4">
                    <div className="relative">
                        <Slider {...modalSettings}>
                            {reconocimiento.imagenes.map((img, idx) => (
                                <div key={idx} className="px-2">
                                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                                        <img
                                            src={img}
                                            alt={`${reconocimiento.titulo} - imagen ${idx + 1}`}
                                            className="w-full h-[50vh] object-contain mx-auto"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="mt-6 text-gray-700">
                        <h4 className="text-lg font-medium mb-2">Historia</h4>
                        <p className="leading-relaxed">{reconocimiento.historia}</p>

                        <div className="mt-4">
                            <h4 className="text-lg font-medium mb-2">Fecha y Lugar</h4>
                            <p>{reconocimiento.fecha} - {reconocimiento.lugar}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ModalNextArrow = (props) => {
    return (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer rounded-full bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white h-8 w-8 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            onClick={props.onClick}
        >
            <span className="icon-[material-symbols--arrow-forward-ios] h-5 w-5"></span>
        </div>
    );
};

const ModalPrevArrow = (props) => {
    return (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 left-3 z-10 cursor-pointer rounded-full bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white h-8 w-8 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            onClick={props.onClick}
        >
            <span className="icon-[material-symbols--arrow-back-ios-new] h-5 w-5"></span>
        </div>
    );
};

const CustomNextArrow = (props) => {
    return (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer rounded-full bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white h-8 w-8 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            onClick={props.onClick}
            style={{filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5))' }}>
            <span className="icon-[material-symbols--arrow-forward-ios] h-4 w-4"></span>
        </div>
    );
};

const CustomPrevArrow = (props) => {
    return (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 left-3 z-10 cursor-pointer rounded-full bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white h-8 w-8 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            onClick={props.onClick}
            style={{ filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5))' }}>
            <span className="icon-[material-symbols--arrow-back-ios-new] h-4 w-4"></span>
        </div>
    );
};

const Reconocimientos = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedReconocimiento, setSelectedReconocimiento] = useState(null);

    const reconocimientosData = [
        {
            id: 1,
            icono: "./images/sanantonio-icon.png",
            titulo: "Reconocimiento San Antonio",
            imagenes: ["https://traveler.marriott.com/es/wp-content/uploads/sites/2/2019/05/GI_200440484-001_SanAntonio_Riverwalk.jpg", "https://digital.ihg.com/is/image/ihg/intercontinental-san-antonio-9528480000-2x1", "https://res.cloudinary.com/simpleview/image/upload/v1706826303/clients/sanantoniotx/River_Walk_Daytime_VSA_Real_True_2022_5551229a-7671-432f-9f31-72e7e4e4bb7d.jpg"],
            historia: "En 2018, Bernardo Polo recibió el prestigioso reconocimiento de San Antonio por su destacada contribución al desarrollo turístico sostenible. Este galardón reconoce su visión innovadora y compromiso con la preservación cultural mientras promueve el crecimiento económico de la región.",
            fecha: "Abril 2018",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 2,
            icono: "./images/prefectura-icon.png",
            titulo: "Medalla de Honor - Prefectura Regional",
            imagenes: ["https://lh5.googleusercontent.com/p/AF1QipNqXwjOJZDXtq4n43YYNFGgLdX3xP17TXcWXF_a=w675-h390-n-k-no", "https://lh5.googleusercontent.com/p/AF1QipO5SfLw8ysB6_x8AR5rPsYYuDdh6PZJyi707K9e=w675-h390-n-k-no", "https://lh5.googleusercontent.com/p/AF1QipOE8Pa9Kz27qnWYLSjLoA2AtjrnqLDUNkBoU4II=w675-h390-n-k-no"],
            historia: "La Prefectura Regional otorgó a Bernardo Polo la Medalla de Honor por su liderazgo excepcional en el desarrollo de iniciativas que han transformado la industria turística local y generado oportunidades de empleo para cientos de familias en la región.",
            fecha: "Noviembre 2020",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 3,
            icono: "./images/infotour-icon.png",
            titulo: "Premio Infotour a la Excelencia",
            imagenes: ["https://infoturlatam.com/wp-content/uploads/2024/01/fitur-ecuador-1.jpg", "https://infoturlatam.com/wp-content/uploads/2023/02/ecuador-cuenca.jpg"],
            historia: "El Premio Infotour a la Excelencia fue otorgado a Bernardo Polo en reconocimiento a sus innovadores programas de promoción turística que han posicionado a Venezuela como un destino de clase mundial, implementando estrategias digitales pioneras en el sector.",
            fecha: "Julio 2019",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 4,
            icono: "./images/world-icon.png",
            titulo: "Reconocimiento Internacional de Turismo",
            imagenes: ["https://gk.city/wp-content/uploads/2024/03/ministro-turismo-niels-olsen.webp", "https://imagenes.primicias.ec/files/image_480_270/uploads/2024/05/26/6653484cf40a3.jpeg", "https://www.turismo.gob.ec/wp-content/uploads/2025/01/ROTATIVO-campan%CC%83a%20nacional%2013%2001%202025.png"],
            historia: "La Organización Mundial de Turismo reconoció a Bernardo Polo por su visión global y enfoque colaborativo que ha fortalecido las relaciones internacionales y ha atraído inversiones significativas al sector turístico venezolano.",
            fecha: "Septiembre 2021",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 5,
            icono: "./images/mintur-icon.png",
            titulo: "Condecoración Ministerio de Turismo",
            imagenes: ["https://www.visitaecuador.com/ve/img/contenido/informacion/hall/ministerio-turismo_02.jpg", "https://www.turismo.gob.ec/wp-content/uploads/2019/10/cuenca-tw22.jpg", "https://imagenes.primicias.ec/files/image_480_270/uploads/2024/05/26/6653484cf40a3.jpeg"],
            historia: "El Ministerio de Turismo otorgó a Bernardo Polo su más alta condecoración por su contribución extraordinaria al desarrollo de políticas públicas que han revitalizado destinos históricos y creado nuevas rutas turísticas de gran impacto cultural y económico.",
            fecha: "Semptiembre del 2007",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 6,
            icono: "./images/chordeleg-icon.png",
            titulo: "Llave de la Ciudad de Chordeleg",
            imagenes: ["https://lh5.googleusercontent.com/p/AF1QipMh7qqspV48tCfQHftbVYCY4V4Y1q7nJwnO4Nda=w540-h312-n-k-no", "https://lh5.googleusercontent.com/p/AF1QipP_SivlPesJ50XWFEpXOC1hUwg3pMXlhjyvKH62=w540-h312-n-k-no", "https://lh5.googleusercontent.com/p/AF1QipONnIFwmSRkOcqnF7hAs0dLL_NSipxHxASwcLrC=w540-h312-n-k-no"],
            historia: "La ciudad de Chordeleg entregó a Bernardo Polo la Llave de la Ciudad, el máximo honor otorgado a un ciudadano, por su dedicación a la promoción de la artesanía local y el desarrollo de programas de capacitación que han preservado técnicas tradicionales mientras abren nuevos mercados internacionales.",
            fecha: "Mayo 2023",
            lugar: "Chordeleg, Ecuador"
        },
        {
            id: 7,
            icono: imgP,
            titulo: "Certificado Empresarial - Mucho Mejor",
            imagenes: ["https://traveler.marriott.com/es/wp-content/uploads/sites/2/2019/05/GI_200440484-001_SanAntonio_Riverwalk.jpg", "https://digital.ihg.com/is/image/ihg/intercontinental-san-antonio-9528480000-2x1", "https://res.cloudinary.com/simpleview/image/upload/v1706826303/clients/sanantoniotx/River_Walk_Daytime_VSA_Real_True_2022_5551229a-7671-432f-9f31-72e7e4e4bb7d.jpg"],
            historia: "En 2018, Bernardo Polo recibió el prestigioso reconocimiento de San Antonio por su destacada contribución al desarrollo turístico sostenible. Este galardón reconoce su visión innovadora y compromiso con la preservación cultural mientras promueve el crecimiento económico de la región.",
            fecha: "Abril 2018",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 8,
            icono: imgP1,
            titulo: "World Business Leader",
            imagenes: ["https://lh5.googleusercontent.com/p/AF1QipNqXwjOJZDXtq4n43YYNFGgLdX3xP17TXcWXF_a=w675-h390-n-k-no", "https://lh5.googleusercontent.com/p/AF1QipO5SfLw8ysB6_x8AR5rPsYYuDdh6PZJyi707K9e=w675-h390-n-k-no", "https://lh5.googleusercontent.com/p/AF1QipOE8Pa9Kz27qnWYLSjLoA2AtjrnqLDUNkBoU4II=w675-h390-n-k-no"],
            historia: "La Prefectura Regional otorgó a Bernardo Polo la Medalla de Honor por su liderazgo excepcional en el desarrollo de iniciativas que han transformado la industria turística local y generado oportunidades de empleo para cientos de familias en la región.",
            fecha: "Noviembre 2012",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 9,
            icono: imgP2,
            titulo: "Galardon--EcuaEmpresas",
            imagenes: ["https://infoturlatam.com/wp-content/uploads/2024/01/fitur-ecuador-1.jpg", "https://infoturlatam.com/wp-content/uploads/2023/02/ecuador-cuenca.jpg"],
            historia: "El Premio Infotour a la Excelencia fue otorgado a Bernardo Polo en reconocimiento a sus innovadores programas de promoción turística que han posicionado a Venezuela como un destino de clase mundial, implementando estrategias digitales pioneras en el sector.",
            fecha: "Septiembre 2017",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 10,
            icono: imgP3,
            titulo: "Expositor--VI feria",
            imagenes: ["https://gk.city/wp-content/uploads/2024/03/ministro-turismo-niels-olsen.webp", "https://imagenes.primicias.ec/files/image_480_270/uploads/2024/05/26/6653484cf40a3.jpeg", "https://www.turismo.gob.ec/wp-content/uploads/2025/01/ROTATIVO-campan%CC%83a%20nacional%2013%2001%202025.png"],
            historia: "La Organización Mundial de Turismo reconoció a Bernardo Polo por su visión global y enfoque colaborativo que ha fortalecido las relaciones internacionales y ha atraído inversiones significativas al sector turístico venezolano.",
            fecha: "Junio 2008",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 11,
            icono: imgP4,
            titulo: "Condecoración Ministerio de Turismo",
            imagenes: ["https://www.visitaecuador.com/ve/img/contenido/informacion/hall/ministerio-turismo_02.jpg", "https://www.turismo.gob.ec/wp-content/uploads/2019/10/cuenca-tw22.jpg", "https://imagenes.primicias.ec/files/image_480_270/uploads/2024/05/26/6653484cf40a3.jpeg"],
            historia: "El Ministerio de Turismo otorgó a Bernardo Polo su más alta condecoración por su contribución extraordinaria al desarrollo de políticas públicas que han revitalizado destinos históricos y creado nuevas rutas turísticas de gran impacto cultural y económico.",
            fecha: "Semptiembre del 2007",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 12,
            icono: imgP5,
            titulo: "Sabe--Auspiciante",
            imagenes: ["https://lh5.googleusercontent.com/p/AF1QipMh7qqspV48tCfQHftbVYCY4V4Y1q7nJwnO4Nda=w540-h312-n-k-no", "https://lh5.googleusercontent.com/p/AF1QipP_SivlPesJ50XWFEpXOC1hUwg3pMXlhjyvKH62=w540-h312-n-k-no", "https://lh5.googleusercontent.com/p/AF1QipONnIFwmSRkOcqnF7hAs0dLL_NSipxHxASwcLrC=w540-h312-n-k-no"],
            historia: "La ciudad de Chordeleg entregó a Bernardo Polo la Llave de la Ciudad, el máximo honor otorgado a un ciudadano, por su dedicación a la promoción de la artesanía local y el desarrollo de programas de capacitación que han preservado técnicas tradicionales mientras abren nuevos mercados internacionales.",
            fecha: "Octubre 2008",
            lugar: "Chordeleg, Ecuador"
        },
        {
            id: 13,
            icono: imgP6,
            titulo: "Sabe--Auspiciante",
            imagenes: ["https://traveler.marriott.com/es/wp-content/uploads/sites/2/2019/05/GI_200440484-001_SanAntonio_Riverwalk.jpg", "https://digital.ihg.com/is/image/ihg/intercontinental-san-antonio-9528480000-2x1", "https://res.cloudinary.com/simpleview/image/upload/v1706826303/clients/sanantoniotx/River_Walk_Daytime_VSA_Real_True_2022_5551229a-7671-432f-9f31-72e7e4e4bb7d.jpg"],
            historia: "En 2018, Bernardo Polo recibió el prestigioso reconocimiento de San Antonio por su destacada contribución al desarrollo turístico sostenible. Este galardón reconoce su visión innovadora y compromiso con la preservación cultural mientras promueve el crecimiento económico de la región.",
            fecha: "Octubre 2009",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 14,
            icono: imgP7,
            titulo: "Certifacado--Camara del Comercio",
            imagenes: ["https://lh5.googleusercontent.com/p/AF1QipNqXwjOJZDXtq4n43YYNFGgLdX3xP17TXcWXF_a=w675-h390-n-k-no", "https://lh5.googleusercontent.com/p/AF1QipO5SfLw8ysB6_x8AR5rPsYYuDdh6PZJyi707K9e=w675-h390-n-k-no", "https://lh5.googleusercontent.com/p/AF1QipOE8Pa9Kz27qnWYLSjLoA2AtjrnqLDUNkBoU4II=w675-h390-n-k-no"],
            historia: "La Prefectura Regional otorgó a Bernardo Polo la Medalla de Honor por su liderazgo excepcional en el desarrollo de iniciativas que han transformado la industria turística local y generado oportunidades de empleo para cientos de familias en la región.",
            fecha: "Mayo 1994",
            lugar: "Cuenca, Ecuador"
        },
        {
            id: 15,
            icono: imgP8,
            titulo: "Fuckup",
            imagenes: ["https://infoturlatam.com/wp-content/uploads/2024/01/fitur-ecuador-1.jpg", "https://infoturlatam.com/wp-content/uploads/2023/02/ecuador-cuenca.jpg"],
            historia: "El Premio Infotour a la Excelencia fue otorgado a Bernardo Polo en reconocimiento a sus innovadores programas de promoción turística que han posicionado a Venezuela como un destino de clase mundial, implementando estrategias digitales pioneras en el sector.",
            fecha: "Julio 2019",
            lugar: "Cuenca, Ecuador"
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 6,
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
            },
        ]
    };

    const openModal = (reconocimiento) => {
        setSelectedReconocimiento(reconocimiento);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);

        setTimeout(() => {
            setSelectedReconocimiento(null);
        }, 300);
    };
    const navigateModal = (newReconocimiento) => {
        setSelectedReconocimiento(newReconocimiento);
    };

    return (
        <div id="reconocimientos" className="flex flex-col gap-3 py-8">
            <h2 className="text-2xl font-semibold -mb-3 text-gray-800 flex justify-start">Distinciones & Reconocimientos</h2>
            <div className="text-center mb-6 mt-4">
                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005F6B] to-[#96c121]'>Trayectoria
                    y Excelencia</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Explora los múltiples reconocimientos que han sido otorgados a Bernardo Polo a lo largo de su
                    destacada carrera.
                    Estos honores reflejan su dedicación, liderazgo y contribuciones a la sociedad y el mundo
                    empresarial.
                </p>
            </div>

            <div className="relative px-8">
                <Slider {...settings}>
                    {reconocimientosData.map((reconocimiento) => (
                        <div key={reconocimiento.id} className="px-2">
                            <div
                                className="flex flex-col p-4 m-2 items-center justify-center rounded-lg gap-2 hover:bg-gray-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-md"
                                onClick={() => openModal(reconocimiento)}
                            >
                                <div
                                    className="overflow-hidden rounded-lg w-28 h-28 flex items-center justify-center bg-white p-2 shadow-sm">
                                    <img
                                        src={reconocimiento.icono}
                                        alt={reconocimiento.titulo}
                                        className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-xs font-medium text-gray-700 text-center mt-2 h-14 line-clamp-2">
                                    {reconocimiento.titulo}
                                </h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <p className="text-center text-sm text-gray-400 mt-4">
                Haz clic en cualquier reconocimiento para ver más detalles y su historia
            </p>

            <ReconocimientoModal
                isOpen={modalOpen}
                onClose={closeModal}
                reconocimiento={selectedReconocimiento}
                reconocimientosData={reconocimientosData}
                onNavigate={navigateModal}
            />
        </div>
    );
};

export default Reconocimientos;
