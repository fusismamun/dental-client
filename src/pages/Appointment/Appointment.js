import React, { useState } from 'react';
import Appointmentbanner from './Appointmentbanner';
import AvaibleAppointments from './AvaibleAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>

            <Appointmentbanner date={date} setDate={setDate}></Appointmentbanner>
            <AvaibleAppointments date={date}></AvaibleAppointments>

        </div>
    );
};

export default Appointment;