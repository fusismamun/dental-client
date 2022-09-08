import React from 'react';
import { Link } from 'react-router-dom';
import footerbg from '../../../images/footer.png';

const Footer = () => {

    return (
        <footer className="p-10" style={{
            background: `url(${footerbg})`,
            backgroundSize: 'cover'
        }}>
            <div class="divider"></div>
            <div className='footer '>

                <div>
                    <span class="footer-title">Services</span>
                    <Link to="/home">Emergency Checkup</Link>
                    <Link to="/home">Monthly Checkup</Link>
                    <Link to="/home">Weekly Checkup</Link>
                    <Link to="/home">Deep Checkup</Link>
                </div>
                <div>
                    <span class="footer-title">ORAL HEALTH</span>
                    <Link to="/home">Fluoride Treatment</Link>
                    <Link to="/home">Cavity Filling</Link>
                    <Link to="/home">Teath Whitening</Link>
                </div>
                <div>
                    <span class="footer-title">OUR ADDRESS</span>
                    <p>Dhaka Bangladesh</p>
                </div>
            </div>
            <div className='mt-8'>
                <p>Copyright © 2022 - All right reserved by Fusis Fahal</p>
            </div>
        </footer>

    );
};

export default Footer;