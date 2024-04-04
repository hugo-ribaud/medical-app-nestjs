import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AppointmentFormState {
  patientName: string;
  doctorName: string;
  appointmentTime: string;
}

const initialFormState: AppointmentFormState = {
  patientName: '',
  doctorName: '',
  appointmentTime: '',
};

const AppointmentForm = () => {
  const [formData, setFormData] =
    useState<AppointmentFormState>(initialFormState);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Appointment scheduled successfully');
      } else {
        console.error('Failed to schedule appointment');
      }
    } catch (error) {
      console.error('Failed to schedule appointment:', error);
    }
    setShowConfirmation(true);
    setFormData(initialFormState);
    setTimeout(() => {
      setShowConfirmation(false);
      navigate('/appointments');
    }, 2000);
  };

  return (
    <div className='max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md'>
      {showConfirmation && (
        <div
          className='p-4 mb-4 text-sm text-green-600 bg-green-100 rounded-lg'
          role='alert'
        >
          Appointment successfully scheduled!
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className='space-y-4'
      >
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
            placeholder='Patient Name'
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
            placeholder='Doctor Name'
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
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
