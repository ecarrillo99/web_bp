import React, { useEffect, useState, useCallback, memo } from 'react';
import { influencersData, socialIconMap } from './creadores/creators-data';
import { getVisibleInfluencers, getResponsiveDisplayCount } from './creadores/creators-utils';

const SocialLink = memo(({ link }) => {
    const platformInfo = socialIconMap[link.platform.toLowerCase()] || socialIconMap['default'];
    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                rounded-full
                w-10 h-10
                flex items-center justify-center
                ${platformInfo.color}
                text-white
                hover:scale-110
                transition-all
                shadow-lg
            `}
        >
            <span className={`${platformInfo.icon} w-8 h-8`}></span>
        </a>
    );
});

const InfluencerCard = memo(({ influencer, onClick }) => (
    <div
        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
        onClick={() => onClick(influencer)}
    >
        <div className="relative">
            <img
                src={influencer.imageUrl}
                alt={influencer.name}
                className="w-full h-64 object-cover"
                loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                <h3 className="text-xl font-bold">{influencer.name}</h3>
                <p className="text-sm opacity-80">{influencer.role.split('\n')[0]}</p>
            </div>
        </div>
    </div>
));

const VideoThumbnail = memo(({ video }) => (
    <a
        href={video.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:bg-gray-200 rounded-lg transition-colors"
    >
        <div className="relative overflow-hidden rounded-lg">
            <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-64 mb-5 object-cover transform hover:scale-110 transition-transform"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-2xl">▶️</span>
            </div>
        </div>
    </a>
));

const CreatorsNetworking = () => {
    const [selectedInfluencer, setSelectedInfluencer] = useState(null);
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
    const [displayCount, setDisplayCount] = useState(4);
    const [activeModalTab, setActiveModalTab] = useState('biography');

    const modalTabs = [
        { id: 'biography', label: 'Biografía' },
        { id: 'socialMedia', label: 'Redes Sociales' },
        { id: 'videos', label: 'Videos' }
    ];

    const handlePrevious = useCallback(() => {
        setCurrentCarouselIndex((prevIndex) =>
            prevIndex === 0 ? influencersData.length - 1 : prevIndex - 1
        );
    }, []);

    const handleNext = useCallback(() => {
        setCurrentCarouselIndex((prevIndex) =>
            prevIndex === influencersData.length - 1 ? 0 : prevIndex + 1
        );
    }, []);

    const openModal = useCallback((influencer) => {
        setSelectedInfluencer(influencer);
        setActiveModalTab('biography');
    }, []);

    const closeModal = useCallback(() => {
        setSelectedInfluencer(null);
    }, []);


    useEffect(() => {
        const handleResize = () => {
            setDisplayCount(getResponsiveDisplayCount());
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && selectedInfluencer) {
                closeModal();
            }

        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedInfluencer, closeModal]);

    const renderModalContent = () => {
        switch (activeModalTab) {
            case 'biography':
                return (
                    <div className="mb-6 border-l-4 border-[#96c121] pl-4">
                        <p className="text-gray-700 italic text-xl">
                            "{selectedInfluencer.bio}"
                        </p>
                    </div>
                );
            case 'socialMedia':
                return (
                    <div className="flex justify-center space-x-6 mb-6">
                        {selectedInfluencer.socialLinks.map((link) => (
                            <SocialLink key={link.platform} link={link} />
                        ))}
                    </div>
                );
            case 'videos':
                return selectedInfluencer.videos ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedInfluencer.videos.map((video) => (
                            <VideoThumbnail key={video.id} video={video} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No hay videos disponibles</p>
                );
            default:
                return null;
        }
    };


    return (
        <div className="w-full py-8 -mb-60 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#005F6B] to-[#96c121] mb-4 uppercase">
                        Creadores/Networking
                    </h2>
                </div>

                <div className="flex items-center justify-center space-x-4 mb-12">
                    <button
                        onClick={handlePrevious}
                        aria-label="Previous Influencers"
                        className="rounded-full bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white p-1 hover:opacity-80 transition-all  h-8 w-8"
                    >
                        <span className="icon-[material-symbols--arrow-back-ios-new] h-6 w-6"></span>
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {getVisibleInfluencers(influencersData, currentCarouselIndex, displayCount).map((influencer) => (
                            <InfluencerCard
                                key={influencer.id}
                                influencer={influencer}
                                onClick={openModal}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        aria-label="Next Influencers"
                        className="rounded-full bg-gradient-to-r from-[#96c121] to-[#005F6B] text-white p-1 hover:opacity-80 transition-all h-8 w-8"
                    >
                        <span className="icon-[material-symbols--arrow-forward-ios] h-6 w-6"></span>
                    </button>
                </div>

                {selectedInfluencer && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="influencer-modal-title"
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
                        onClick={closeModal}
                    >
                        <div
                            className="bg-white rounded-2xl w-full max-w-3xl mx-auto overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02] max-h-[95vh] flex flex-col relative"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <div className="relative h-[300px] flex-shrink-0">
                                <img
                                    src={selectedInfluencer.imageUrl}
                                    alt={selectedInfluencer.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                                    <h2 id="influencer-modal-title" className="text-4xl font-bold mb-2">
                                        {selectedInfluencer.name}
                                    </h2>
                                    <p className="text-lg opacity-80">{selectedInfluencer.role}</p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    aria-label="Close Modal"
                                    className="absolute top-4 right-4 bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-40 transition-all"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="flex justify-center border-b border-gray-200">
                                {modalTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveModalTab(tab.id)}
                                        className={`
                                        px-4 py-2 
                                        text-sm font-medium 
                                        transition-colors duration-300
                                        ${activeModalTab === tab.id
                                            ? 'border-b-2 border-[#96c121] text-[#96c121]'
                                            : 'text-gray-500 hover:text-gray-700'}
                                    `}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8 overflow-y-auto flex-grow">
                                {renderModalContent()}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatorsNetworking;
