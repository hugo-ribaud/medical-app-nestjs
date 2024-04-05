import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface AppointmentFormState {
  patientName: string;
  doctorName: string;
  appointmentTime: string;
}

const EditAppointment = () => {
  const [formData, setFormData] = useState<AppointmentFormState>({
    patientName: '',
    doctorName: '',
    appointmentTime: '',
  });
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/appointments/${id}`
        );
        if (!response.ok) {
          throw new Error('Appointment could not be fetched.');
        }
        const data = await response.json();
        setFormData({
          patientName: data.patientName,
          doctorName: data.doctorName,
          appointmentTime: data.appointmentTime,
        });
      } catch (error) {
        console.error('Fetch error:', error);
        // Handle fetch error (e.g., redirect to error page or display message)
      }
    };

    fetchAppointment();
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/appointments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Update failed.');
      }
      navigate('/appointments');
    } catch (error) {
      console.error('Update error:', error);
      // Handle update error (e.g., show error message)
    }
  };

  return (
    <div className='max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-lg font-semibold text-gray-700'>Edit Appointment</h2>
      <form
        onSubmit={handleSubmit}
        className='space-y-4'
      >
        {/* Form fields */}
        <div>
          <label
            htmlFor='patientName'
            className='block text-sm font-medium text-gray-700'
          >
            Patient Name
          </label>
          <input
            type='text'
            name='patientName'
            id='patientName'
            value={formData.patientName}
            onChange={handleChange}
            required
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
          />
        </div>
        <div>
          <label
            htmlFor='doctorName'
            className='block text-sm font-medium text-gray-700'
          >
            Doctor Name
          </label>
          <input
            type='text'
            name='doctorName'
            id='doctorName'
            value={formData.doctorName}
            onChange={handleChange}
            required
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
          />
        </div>
        <div>
          <label
            htmlFor='appointmentTime'
            className='block text-sm font-medium text-gray-700'
          >
            Appointment Time
          </label>
          <input
            type='datetime-local'
            name='appointmentTime'
            id='appointmentTime'
            value={formData.appointmentTime}
            onChange={handleChange}
            required
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
          />
        </div>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
        >
          Update Appointment
        </button>
      </form>
    </div>
  );
};

export default EditAppointment;
