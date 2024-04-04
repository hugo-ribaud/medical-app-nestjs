const Footer = () => {
  return (
    <footer className='bg-secondary text-white p-4 mt-8'>
      <div className='container mx-auto text-center'>
        <p>{new Date().getFullYear()} Medical Appointment System</p>
      </div>
    </footer>
  );
};

export default Footer;
