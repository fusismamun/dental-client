import React from 'react';
import fluoride from '../../images/fluoride.png'
import cavity from '../../images/cavity.png'
import whitening from '../../images/whitening.png'
import Service from './Service';

const Sevvice = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Basically, a cavity is hole in the tooth . This is often often caused by bacteria, which builds up from eating unhealthy food and not caring for your teeth properly.Symptoms typically happen when a cavity is more developed.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Over 10 years of clinical use of teeth whitening products containing 10% carbamide peroxide have not shown any damage to existing fillings. Do teeth whiteners damage a tooths nerve.',
            img: whitening
        }

    ];
    return (
        <div className='my-28'>
            <h4 className='font-bold text-2xl text-secondary'>Our Services</h4>
            <h2 className='text-4xl'>Service We Provide</h2>
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=> <Service
                    key={service._id}
                    service={service}
                    ></Service> )
                }
            </div>
        </div>
    );
};

export default Sevvice;