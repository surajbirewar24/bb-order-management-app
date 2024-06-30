import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const role = 'employee'  //await login(email, password);
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'employee') {
      navigate('/employee');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
        <div className="login-page flex items-center justify-center min-h-screen ">
        <div className="">
          <div className="login-container">
            <div className="form-container">
              <h2>Welcome Back</h2>
              <p>Be among the first to experience 3D magic! Register for private alpha.</p>
              <form onSubmit={handleLogin}>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john123@domain.com"
                  required
                />
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <div className="forgot-password-container">
                  <a href="#">Forgot password?</a>
                </div>
                <button type="submit" className="login-button">Login</button>
              </form>
            </div>
          </div>
        </div>
     </div>
</div>
    
  );
};

export default LoginPage;
