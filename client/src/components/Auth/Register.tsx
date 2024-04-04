import React, { useState } from 'react';

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Registration failed');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          value={userData.password}
          onChange={handleChange}
          required
        />
        {/* Other input fields */}
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
