import React from 'react';
import careImage from '../../images/treatment.png'

const Dentalcare = () => {
    return (
        <div class="hero min-h-screen mb-28">
            <div class="hero-content flex-col lg:flex-row text-left">
                <img src={careImage} class="max-w-sm rounded-lg shadow-2xl mx-6" />
                <div className='mx-6'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms!</h1>
                    <p class="py-12">Dentists say that the most important part of tooth care happens at home. Brushing and flossing properly, along with regular dental checkups, can help prevent tooth decay and gum disease.</p>
                    <button class="btn btn-secondary text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Dentalcare;