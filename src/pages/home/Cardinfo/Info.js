import React from 'react';
import Cardinfo from './Cardinfo';
import clock from '../../../images/clock.svg';
import location from '../../../images/marker.svg';
import phone from '../../../images/phone.svg';

const Info = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 px-8 mb-12">
            < Cardinfo bgClass="bg-gradient-to-r from-secondary to-primary" cartTitle="Opening Hours" cardDetails="every day 10 clock" img={clock}></Cardinfo>
            < Cardinfo bgClass="bg-accent " cartTitle="Visit our location" cardDetails="Dhaka Bangladesh" img={location}></Cardinfo>
            < Cardinfo bgClass="bg-gradient-to-r from-secondary to-primary" cartTitle="Contact us" cardDetails="016980-76223" img={phone}></Cardinfo>
        </div>
    );
};

export default Info;