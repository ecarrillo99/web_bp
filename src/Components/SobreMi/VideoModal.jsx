import React, { useState, useRef } from 'react';
import {
    Share2,
    ChevronLeft,
    ChevronRight,
    X,
    ExternalLink
} from 'lucide-react';

const VideoModal = ({
                        videos,
                        initialIndex,
                        onClose
                    }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isCopied, setIsCopied] = useState(false);
    const videoRef = useRef(null);

    const currentVideo = videos[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % videos.length
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? videos.length - 1 : prevIndex - 1
        );
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(currentVideo.url.replace('embed/', 'watch?v='))
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            });
    };

    const openInYouTube = () => {
        window.open(
            currentVideo.url.replace('embed/', 'watch?v='),
            '_blank'
        );
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black bg-opacity-80 p-4 overflow-hidden"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                className="relative w-full max-w-4xl bg-white rounded-xl
                   shadow-2xl overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10
                     bg-white/20 hover:bg-white/40 rounded-full
                     p-2 text-white transition-all"
                >
                    <X size={24} />
                </button>

                {/* Navigation Buttons */}
                {videos.length > 1 && (
                    <>
                        <button
                            onClick={handlePrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2
                         z-10 bg-white/20 hover:bg-white/40
                         rounded-full p-2 text-white"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2
                         z-10 bg-white/20 hover:bg-white/40
                         rounded-full p-2 text-white"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}

                {/* Video Container */}
                <div className="w-full aspect-video">
                    <iframe
                        ref={videoRef}
                        className="w-full h-full"
                        src={currentVideo.url}
                        title={currentVideo.titulo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* Video Info and Actions */}
                <div className="p-6 bg-white">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">
                            {currentVideo.titulo}
                        </h2>

                        <div className="flex space-x-3">
                            <button
                                onClick={handleCopyLink}
                                className="text-gray-600 hover:text-gray-900
                           transition-colors relative"
                            >
                                <Share2 size={20} />
                                {isCopied && (
                                    <span
                                        className="absolute -top-8 left-1/2 -translate-x-1/2
                               bg-green-500 text-white text-xs px-2 py-1
                               rounded-full"
                                    >
                    Copiado
                  </span>
                                )}
                            </button>

                            <button
                                onClick={openInYouTube}
                                className="text-gray-600 hover:text-gray-900
                           transition-colors"
                            >
                                <ExternalLink size={20} />
                            </button>
                        </div>
                    </div>

                    <p className="text-gray-600">
                        {currentVideo.contenido}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
