import React from 'react';
import doctor from '../../images/doctor.png'
import appointment from '../../images/appointment.png';
const Makeappointment = () => {
    return (
        <section 
        style={{
            background: `url(${appointment})`
        }}
        className='flex justify-center items-center mb-28'
        >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-left'>
                <h5 className='text-lg font-bold text-secondary'>Appointment</h5>
                <h3 className='text-3xl my-3 text-white'>Make an appointment Today</h3>
                <p className='py-12 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less</p>
                <button class="btn btn-secondary text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Appointment</button>
            </div>
        </section>
    );
};

export default Makeappointment;