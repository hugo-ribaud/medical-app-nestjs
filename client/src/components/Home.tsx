import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:pt-24'>
        <Link to='/book-appointment'>
          <div className='flex flex-col items-center justify-center h-40 w-60 bg-primary rounded-lg shadow-md hover:bg-primary-light transition-colors duration-300'>
            <p className='text-xl font-semibold text-white'>Book Appointment</p>
          </div>
        </Link>
        <Link to='/appointments'>
          <div className='flex flex-col items-center justify-center h-40 w-60 bg-secondary rounded-lg shadow-md hover:bg-secondary-light transition-colors duration-300'>
            <p className='text-xl font-semibold text-white'>
              List Appointments
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
