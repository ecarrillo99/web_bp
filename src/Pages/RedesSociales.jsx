import React from 'react';
import Navbar from '../Components/Global/Navbar';
import Footer from '../Components/Global/Footer';
import Contenido from '../Components/RedesSociales/Contenido';
import Metricas from '../Components/RedesSociales/Metricas';

const RedesSociales = () => {
    return (
        <div>
            <Navbar activo={2}></Navbar>
            <Contenido></Contenido>
            <Metricas></Metricas>
            <Footer></Footer>
        </div>
    );
};

export default RedesSociales;