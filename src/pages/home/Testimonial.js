import React from 'react';
import sideImage from '../../images/quote.svg';
import people1 from '../../images/people1.png';
import people2 from '../../images/people2.png';
import people3 from '../../images/people3.png';
import Review from './Review';



const Testimonial = () => {
    const patientsSays = [
        {
            _id:1,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1
        },
        {
            _id:2,
            name: 'Sara Yarn',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people2
        },
        {
            _id:3,
            name: 'Malkova Katu',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people3
        }
    
    ];
    return (
        <section>
            <div className='flex justify-between'>
                <div className='ml-12'>
                    <h4 className='text-lg font-bold text-secondary text-left'>Testimonial</h4>
                    <h3 className='text-3xl my-3 text-black'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='w-28 lg:w-40 mr-12' src={sideImage} alt="" />
                </div>
            </div>
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                {
                    patientsSays.map(review=> <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;