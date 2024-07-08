import React from 'react';
import Navbar from '../Pages/Shere/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shere/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <Navbar />
            <div className=' mb-36 mt-20 md:mt-0'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;