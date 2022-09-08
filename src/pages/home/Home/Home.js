import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Cardinfo/Info';
import Contactus from '../Contactus';
import Dentalcare from '../Dentalcare';
import Makeappointment from '../Makeappointment';
import Sevvice from '../Sevvice';
import Testimonial from '../Testimonial';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Info></Info>
            <Sevvice></Sevvice>
            <Dentalcare></Dentalcare>
            <Makeappointment></Makeappointment>
            <Testimonial></Testimonial>
            <Contactus></Contactus>
            
        </div>
    );
};

export default Home;