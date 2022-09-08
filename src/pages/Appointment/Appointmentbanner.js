import React from 'react';
import chair from '../../images/chair.png';
import headerbg from '../../images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';




const Appointmentbanner = ({date, setDate}) => {
    
    return (
        <div class="hero min-h-screen" style={{
            background: `url(${headerbg})`
        }}>
            <div class="hero-content flex-col lg:flex-row-reverse text-left">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Appointmentbanner;