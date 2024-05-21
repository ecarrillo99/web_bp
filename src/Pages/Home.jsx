import React from 'react';
import Navbar from '../Components/Global/Navbar';
import Cabecera from '../Components/Home/Cabecera';
import FooterHome from '../Components/Home/FooterHome';

const Home = () => {
    return (
        <div>
            <Navbar activo={0}/>
            <Cabecera/>
            <FooterHome/>
        </div>
    );
};

export default Home;