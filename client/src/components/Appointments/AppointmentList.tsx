import React, { useEffect, useState } from 'react';

interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  appointmentTime: string;
}

const AppointmentList = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:3000/appointments');
        const data = await response.json();
        console.log(data);
        setAppointments(data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <div>Loading appointments...</div>;
  }

  return (
    <div>
      <h2 className='text-3xl font-bold underline text-center text-primary'>
        Scheduled Appointments
      </h2>
      <ul className='mt-5 border border-primary rounded'>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <li
              key={appointment.id}
              className='border-b border-primary p-3'
            >
              <span className='text-secondary'>{appointment.patientName}</span>{' '}
              - {appointment.doctorName} on the{' '}
              {new Date(appointment.appointmentTime).toLocaleString()}
            </li>
          ))
        ) : (
          <li className='p-3 text-center'>No appointments found</li>
        )}
      </ul>
    </div>
  );
};

export default AppointmentList;
