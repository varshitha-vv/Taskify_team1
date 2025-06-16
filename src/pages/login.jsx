import React from 'react';
import './Register.css'; // Reuse same styling for consistency

const Login = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Taskify</h1>
        <h2>Sign in to your account</h2>
        <p className="signin-link">
          Or <a href="#">register for a new account</a>
        </p>

        <form className="register-form">
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px',
            fontSize: '0.9rem'
          }}>
            <label>
              <input type="checkbox" style={{ marginRight: '5px' }} />
              Remember me
            </label>
            <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>Forgot your password?</a>
          </div>

          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
