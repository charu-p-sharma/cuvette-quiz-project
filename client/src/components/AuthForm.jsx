import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';

function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your authentication logic here.
    // If login is successful, navigate to the dashboard.
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <h1>QUIZZIE</h1>
      <div className="toggle-buttons">
        <button 
          className={isSignUp ? 'active' : ''} 
          onClick={() => setIsSignUp(true)}
        >
          Sign Up
        </button>
        <button 
          className={!isSignUp ? 'active' : ''} 
          onClick={() => setIsSignUp(false)}
        >
          Log In
        </button>
      </div>

      {isSignUp ? (
        <div className="sign-up-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Sign-Up</button>
        </div>
      ) : (
        <div className="log-in-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
