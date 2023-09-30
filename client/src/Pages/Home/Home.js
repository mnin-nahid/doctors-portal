import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import OurServices from './OurServices';
import StayConnected from './StayConnected';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <OurServices />
            <MakeAppointment />
            <Testimonial />
            <StayConnected />
            <Footer />
        </div>
    );
};

export default Home;