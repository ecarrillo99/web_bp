import React, {useEffect, useRef} from 'react';
import Navbar from '../Components/Global/Navbar';
import Footer from '../Components/Global/Footer';
import ImpactoSocial from '../Components/Proyectos/ImpactoSocial';
import ContenidoPrincipal from "../Components/Proyectos/ImpactoSocial";
import Influencers from "../Components/Proyectos/Influencers";
import {useLocation} from "react-router-dom";

const Proyectos = () => {
    const location = useLocation();
    const influencerRef = useRef(null);
    const socialRef = useRef(null);

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const section = location.state.scrollTo;
            setTimeout( () => {
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
        <div>
            <Navbar activo={3}/>
            <div className="pt-16">
                <div ref={socialRef}>
                    <ImpactoSocial/>
                </div>
                <div ref={influencerRef}>
                    <Influencers/>
                </div>
                <Footer/>
            </div>
            </div>
            );
            };

            export default Proyectos;
