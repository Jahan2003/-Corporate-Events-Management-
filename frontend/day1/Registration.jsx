import { useState } from 'react';
import '../assets/css/login.css';
import eyeIcon from '../assets/images/eyeIcon.svg';
import reg from "../assets/images/reg.jpg";
import { TypeAnimation } from 'react-type-animation';
import { Link, useNavigate } from 'react-router-dom';
function Registration() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    const validationErrors = { ...errors };
  
    // Clear existing errors for the field being updated
    validationErrors[name] = undefined;
  
    // Validate email format if email field is being updated
    if (name === 'email' && value.trim() !== '') {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      if (!isValidEmail) {
        validationErrors.email = 'Invalid email format';
      }
    }
  
    // Validate mobile number format if mobile field is being updated
    if (name === 'mobile' && value.trim() !== '') {
      const isValidMobile = /^\d{10}$/.test(value.trim());
      if (!isValidMobile) {
        validationErrors.mobile = 'Invalid mobile number';
      }
    }
  
    // Validate password strength if password field is being updated
    if (name === 'password' && value.trim() !== '') {
      const isStrongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value.trim());
      if (!isStrongPassword) {
        validationErrors.password = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      }
    }
  
    // Validate confirm password format if confirm password field is being updated
    if (name === 'confirmPassword' && value.trim() !== '') {
      // Add your confirm password validation logic here
    }
  
    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }

    if (!formData.mobile.trim()) {
      validationErrors.mobile = 'Mobile number is required';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }
    if(!formData.confirmPassword.trim()){
        validationErrors.confirmPassword='Confirm Passoword is required';
    }else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic can go here
      console.log('Form submitted:', formData);
      navigate("/login");
    }
  };

  return (
    <div id="parent">
      <div id="login-outer-box">
        <div id="form-box">
          <h2 id="login-head">Sign Up</h2>
          <p id="signIn">Enter your details to register</p>
          <form onSubmit={handleSubmit}>
            <div className="email-field">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="mobile-field">
              <label>Mobile Number</label>
              <input 
                type="tel" 
                name="mobile" 
                value={formData.mobile} 
                onChange={handleInputChange} 
              />
              {errors.mobile && <p className="error">{errors.mobile}</p>}
            </div>
            <div className="password-field">
              <label>Password</label>
              <div className="password-input">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  value={formData.password} 
                  onChange={handleInputChange} 
                />
                <img 
                  src={eyeIcon} 
                  alt="toggle password visibility" 
                  className="eye-icon" 
                  onClick={() => setShowPassword(!showPassword)} 
                />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="confirm-password-field">
              <label>Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleInputChange} 
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            <button type="submit" id="submit">Register</button>
          </form>
          <p id="sign-up-login">Already have an account? <Link to="/login"><span>Login</span></Link>  </p>
        </div>
        <div id="image-box">
          <img src={reg} alt="" />
          <div id="background"></div>
          <div id="text-on-image">
            <TypeAnimation 
              id="text" 
              sequence={[`From Vision to Reality,\nYour Perfect Event Partner`,5000,""]}
              speed={10}
              style={{ whiteSpace: 'pre-line',color:"white",fontSize:"38px"}}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
