  import { useState } from 'react';
  import '../assets/css/login.css';
  import eyeIcon from '../assets/images/eyeIcon.svg';
  import workshop from "../assets/images/workshop.jpeg";
  import { TypeAnimation } from 'react-type-animation';
  import { Link, useNavigate } from 'react-router-dom';


  function Login() {
    // const images=[
    //   {login1},
    //   {login2}
    // ];
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const validationErrors = {};

      if (!formData.email.trim()) {
        validationErrors.email = 'Email is required';
      }

      if (!formData.password.trim()) {
        validationErrors.password = 'Password is required';
      }

      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        // Form submission logic can go here
        console.log('Form submitted:', formData);
        if(formData.email=="admin@gmail.com"){
          navigate("/Adashboard");
        }else{
        navigate("/UdashBoard");
        }
      }
    };

    return (
      <div id="parent">
      <div id="login-outer-box">
        <div id="form-box">
        <h2 id="login-head">Welcome</h2>
        <p id="signIn">Enter your Email and password to sign in</p>
        <form onSubmit={handleSubmit}>
          <div className="email-field">
            <label>Email</label>
            <input 
              type="text" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
            />
            {errors.email && <p className="error">{errors.email}</p>}
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
          <button type="submit" id="submit">Sign In</button>
        </form>
          <p id="sign-up-login">Do not have an account?<Link to="/registration"><span> Sign Up</span> </Link></p>
      </div>
      <div id="image-box">
      <img src={workshop} alt="" />
      <div id="background"></div>
      <div id="text-on-image">
        <TypeAnimation id="text" sequence={[`From Vision to Reality,\nYour Perfect Event Partner`,5000,""]}
         speed={10}
         style={{ whiteSpace: 'pre-line',color:"white",fontSize:"38px"}}
         repeat={Infinity}></TypeAnimation>
      </div>
      </div>
      </div>
      </div>
    );
  }

  export default Login;