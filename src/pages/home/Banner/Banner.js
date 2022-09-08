import React from 'react';
import chair from '../../../images/chair.png';
import headerbg from '../../../images/bg.png';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${headerbg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse text-left">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-left">Your New Smile Starts<br />
                            Here!</h1>
                    <p className="py-8 text-left">Dentists say that the most important part of tooth care happens at home. Brushing and flossing properly, along with regular dental checkups, can help prevent tooth decay and gum disease.</p>
                    <Link to='/appointment'>
                    <button className="btn btn-secondary text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Appointment<FiArrowRight style={{margin: '5px', fontSize: '25px'}}></FiArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;