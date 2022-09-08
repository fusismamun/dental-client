import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase_init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {

    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');


                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data);
                });
        }
    }, [user])

    return (
        <div>
            <h2 className='text-2xl'>My Appointment: {appointments.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{a.patientName}</td>
                                <td>{a.treatmentName}</td>
                                <td>{a.slot}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to ={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(a.price && a.paid) && <span className='text-success'>Paid</span>}
                                    </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;