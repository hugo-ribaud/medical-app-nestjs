import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  appointmentTime: string;
}

const AppointmentList = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  // delete appointment
  const deleteAppointment = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/appointments/${id}`, {
        method: 'DELETE',
      });
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.id !== id)
      );
    } catch (error) {
      console.error('Failed to delete appointment:', error);
    }
  };

  const editAppointment = (id: number) => {
    // Redirect to an edit page or open a modal with the form pre-filled with appointment data
    navigate(`/edit-appointment/${id}`);
  };

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
              className='border-b border-primary p-3 justify-between flex items-center'
            >
              <span className='text-secondary'>{appointment.patientName}</span>{' '}
              - {appointment.doctorName} on the{' '}
              {new Date(appointment.appointmentTime).toLocaleString()}
              <div>
                <button
                  onClick={() => editAppointment(appointment.id)}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
                >
                  ✎
                </button>
                <button
                  onClick={() => deleteAppointment(appointment.id)}
                  className='bg-red-500 hover:bg-red-700  font-bold py-2 px-4 rounded'
                >
                  X
                </button>
              </div>
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
