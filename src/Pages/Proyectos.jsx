import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { useLocation } from "react-router-dom";
import Navbar from '../Components/Global/Navbar';
import Footer from '../Components/Global/Footer';


const ImpactoSocial = lazy(() => import('../Components/Proyectos/ImpactoSocial'));
const Influencers = lazy(() => import("../Components/Proyectos/Influencers"));


const LoadingFallback = () => (
    <div className="w-full flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
    </div>
);

const Proyectos = () => {
    const location = useLocation();
    const influencerRef = useRef(null);
    const socialRef = useRef(null);

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const section = location.state.scrollTo;
            setTimeout(() => {
                if (section === 'Social' && socialRef.current) {
                    const yOffset = -80;
                    const element = socialRef.current;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                } else if (section === 'Influencers' && influencerRef.current) {
                    const yOffset = -80;
                    const element = influencerRef.current;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar activo={3} />
            <main className="flex-grow pt-16">
                <div ref={socialRef} className="w-full">
                    <Suspense fallback={<LoadingFallback />}>
                        <ImpactoSocial />
                    </Suspense>
                </div>
                <div ref={influencerRef} className="w-full">
                    <Suspense fallback={<LoadingFallback />}>
                        <Influencers />
                    </Suspense>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Proyectos;