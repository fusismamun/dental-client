import React from 'react';
import { format } from 'date-fns';
import auth from './Firebase_init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formateDate = format(date, 'PP');
    const modalHandelar = e => {
        const slot = e.target.slot.value;
        e.preventDefault();
        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: formateDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.success){
                    toast(`Appointment is set, ${formateDate} at ${slot}`);
                }
                else{
                    toast.error(`Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                // To close the modal
                refetch(); 
                setTreatment(null);
            });
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-red-500">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={modalHandelar}>
                        <input type="text" readOnly value={format(date, 'PP')} class="input input-bordered w-full max-w-xs mt-3" />
                        <select name='slot' class="select select-bordered w-full max-w-xs my-2">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs my-2" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs my-2 text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;