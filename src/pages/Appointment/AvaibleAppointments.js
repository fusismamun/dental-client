import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import BookingModal from '../../BookingModal';
import Loading from '../Shared/Loading';
import Servicess from './Servicess';

const AvaibleAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl text-secondary font-bold'><span className='text-black'>Available Appointments on</span> : {format(date, 'PP')}</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-clos-3 gap-5">
                {
                    services.map(service => <Servicess
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Servicess>)
                }
            </div>
            {
                treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvaibleAppointments;