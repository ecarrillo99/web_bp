import React from 'react';
import Navbar from '../Components/Global/Navbar';
import Introduccion from '../Components/SobreMi/Introduccion';
import Logros from '../Components/SobreMi/Logros';
import Galeria from '../Components/SobreMi/Galeria';
import Blog from '../Components/SobreMi/Blog';
import Footer from '../Components/Global/Footer';

const SobreMi = () => {
    return (
        <>
            <Navbar activo={1}></Navbar>
            <Introduccion></Introduccion>
            <Logros></Logros>
            <Galeria></Galeria>
            <Blog></Blog>
            <Footer></Footer>
        </>
    );
};

export default SobreMi;