import React from 'react';
import Navbar from '../Components/Global/Navbar';
import Footer from '../Components/Global/Footer';
import ContactoForm from '../Components/Contacto/ContactoForm';

const Contacto = () => {
    return (
        <div>
            <Navbar activo={4}/>
            <ContactoForm/>
            <Footer/>
        </div>
    );
};

export default Contacto;