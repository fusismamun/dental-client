import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LXqmkGsQCqVwFIoCHPPCrprY7yRwivCGssdanejWIodMm1ZiNlhoAQG7MJ4AF0kEgnaj1LX0kKShxdaBFdrg1Ty00MNsuQkX4');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {

        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-secondary'>Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay For:  <span className='text-secondary font-bold'>{appointment.treatmentName}</span></h2>
                    <p><span className='font-bold'>Your appointment </span> <span className='text-orange-800'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: <span className='font-bold'>${appointment.price}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment= {appointment}/>
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;