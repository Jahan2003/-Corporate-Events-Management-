import { FaEdit, FaSave } from 'react-icons/fa';
import '../../assets/css/userProfile.css';
import { useState } from 'react';
import profile from "../../assets/images/profile.png";  
import Footer from '../footer';
import NavbarHr from '../../components/navbarHr';
const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Jahan Sai J',
    email: 'jahansai2003@gmail.com',
    mobile: '1234567890', 
    city: 'Coimbatore',
  });

  const [editable, setEditable] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setEditable(false);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const errors = {};

    if (!emailPattern.test(userData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!phonePattern.test(userData.mobile)) {
      errors.mobile = 'Please enter a valid mobile number';
    }

    if (!userData.name.trim()) {
      errors.name = 'Please enter your name';
    }

    if (!userData.city.trim()) {
      errors.city = 'Please enter your city';
    }

    return errors;
  };

  return (
    <>
        <NavbarHr/>
    <div id="userProfile-page">
      <div className="user-profile">
        <h2>User Profile</h2>
      <div id="user-profile-con">
        <img src={profile} alt="" />
      </div>
        <form id="pform">
          <div className="form-group">
            <label>Name:</label>
            {editable ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </>
            ) : (
              <span>{userData.name}</span>
            )}
          </div>
          <div className="form-group">
            <label>Email:</label>
            {editable ? (
              <>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </>
            ) : (
              <span>{userData.email}</span>
            )}
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            {editable ? (
              <>
                <input
                  type="text"
                  name="mobile"
                  value={userData.mobile}
                  onChange={handleInputChange}
                />
                {errors.mobile && <span className="error">{errors.mobile}</span>}
              </>
            ) : (
              <span>{userData.mobile}</span>
            )}
          </div>
          <div className="form-group">
            <label>City:</label>    
            {editable ? (
              <>
                <input
                  type="text"
                  name="city"
                  value={userData.city}
                  onChange={handleInputChange}
                />
                {errors.city && <span className="error">{errors.city}</span>}
              </>
            ) : (
              <span>{userData.city}</span>
            )}
          </div>
          <div id="button">
          {editable ? (
            <button className="profile-button" type="button" onClick={handleSaveClick}>
              <FaSave /> Save
            </button>
          ) : (
            <button className="profile-button" type="button" onClick={handleEditClick}>
              <FaEdit /> Edit
            </button>
          )}
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default UserProfile;