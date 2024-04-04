const Header = () => {
  return (
    <header className='sticky top-0 bg-primary text-white p-4 z-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <a
          href='/'
          className='md:text-3xl'
        >
          Medical Appointment System
        </a>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <a
                href='/appointments'
                className='hover:text-secondary font-bold underline'
              >
                Appointments
              </a>
            </li>
            <li>
              <a
                href='/login'
                className='hover:text-secondary font-bold underline'
              >
                Login
              </a>
            </li>
            <li>
              <a
                href='/register'
                className='hover:text-secondary font-bold underline'
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
