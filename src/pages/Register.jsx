import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Taskify</h1>
        <h2>Create a new account</h2>
        <p className="signin-link">
          Or <a href="#">sign in to your existing account</a>
        </p>

        <form className="register-form">
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
