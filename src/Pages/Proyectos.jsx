import React from 'react';
import Navbar from '../Components/Global/Navbar';
import Footer from '../Components/Global/Footer';
import ImpactoSocial from '../Components/Proyectos/ImpactoSocial';

const Proyectos = () => {
    return (
        <div>
            <Navbar activo={3}/>
            <ImpactoSocial/>
            <Footer/>
        </div>
    );
};

export default Proyectos;