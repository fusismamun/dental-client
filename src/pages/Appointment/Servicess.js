import React from 'react';

const Servicess = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:mx-w-lg  bg-base-100 shadow-xl ">
            <div className="card-body">
                <h2 className="card-title justify-center font-bold text-secondary text-lg"><span className=' '>{name}</span></h2>
                <p>{
                    slots.length > 0
                    ? <span className='text-sm'>{slots[0]}</span>
                    : <span className='font-semibold text-red-700'> Appointment not available </span>
                }</p>
                <p className='text-sm'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                <label for="booking-modal" 
                disabled={slots.length===0}
                onClick={()=> setTreatment(service)}
                className="btn btn-secondary  text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Servicess;