// import { useState } from 'react';
// import '../../assets/css/EventForm.css';
// import Navbar from '../../components/navbar';
// import Footer from '../footer';

// const EventBookingForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     city: '',
//     venue: '',
//     fromDate: '',
//     toDate: '',
//     attendees: '',
//     themeFile: null,
//     enquiry: '',
//     otherDetails: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, themeFile: file });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="event-booking-form-container">
//       <h2 id="form-title">Event Booking Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Full Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Organization Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Mobile:</label>
//           <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>City:</label>
//           <input type="text" name="city" value={formData.city} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Venue:</label>
//           <input type="text" name="venue" value={formData.venue} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>From Date:</label>
//           <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>To Date:</label>
//           <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>No of Attendees:</label>
//           <input type="number" name="attendees" value={formData.attendees} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Theme Requirements:</label>
//           <input type="file" name="themeFile" onChange={handleFileChange} />
//         </div>
//         <div className="form-group">
//           <label>Book Enquiry:</label>
//           <textarea name="enquiry" value={formData.enquiry} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Other Details:</label>
//           <textarea name="otherDetails" value={formData.otherDetails} onChange={handleChange} />
//         </div>
//         <button id="form-button1" type="submit">Next</button>
//       </form>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default EventBookingForm;


import { useState } from 'react';
import '../../assets/css/EventForm.css';
import Navbar from '../../components/navbar';
import Footer from '../footer';
import { useNavigate } from 'react-router-dom';

const EventBookingForm = () => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        mobile: '',
        city: '',
        venue: '',
        fromDate: '',
        toDate: '',
        attendees: '',
        themeFile: null,
        enquiry: '',
        otherDetails: '',
    });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, themeFile: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Please enter your organization name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Please enter your mobile number';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city';
    }
    if (!formData.venue.trim()) {
      newErrors.venue = 'Please enter your venue';
    }
    if (!formData.fromDate.trim()) {
      newErrors.fromDate = 'Please select the start date';
    }
    if (!formData.toDate.trim()) {
      newErrors.toDate = 'Please select the end date';
    }
    if (!formData.attendees.trim()) {
      newErrors.attendees = 'Please enter the number of attendees';
    } else if (!/^\d+$/.test(formData.attendees)) {
      newErrors.attendees = 'Please enter a valid number';
    }
    // Add more validation rules as needed

    if (Object.keys(newErrors).length === 0) {
      // If no errors, proceed with form submission
      console.log('Form submitted:', formData);
      const d=JSON.stringify(formData);
      localStorage.setItem("s",d);
      navigate("/AddOns");

    } else {
      // If there are errors, update the state to display error messages
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Navbar />
      <div className="event-booking-form-container">
        <h2 id="form-title">Event Booking Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="field">
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div className="field">
          <div className="form-group">
            <label>Organization Name:</label>
            <input type="text" name="organization" value={formData.organization} onChange={handleChange} />
            </div>
            {errors.organization && <div className="error-message">{errors.organization}</div>}
          </div>
          <div className='field'>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className='field'>
          <div className="form-group">
            <label>Mobile:</label>
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>
            {errors.mobile && <div className="error-message">{errors.mobile}</div>}
          </div>
          <div className='field'>
          <div className="form-group">
            <label>City:</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </div>
            {errors.city && <div className="error-message">{errors.city}</div>}
          </div>
          <div className='field'>
          <div className="form-group">
            <label>Venue:</label>
            <input type="text" name="venue" value={formData.venue} onChange={handleChange} />
            </div>
            {errors.venue && <div className="error-message">{errors.venue}</div>}
          </div>
          <div className='field'>
          <div className="form-group">
            <label>From Date:</label>
            <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} />
            </div>
            {errors.fromDate && <div className="error-message">{errors.fromDate}</div>}
          </div>
          <div className='field'>
          <div className="form-group">
            <label>To Date:</label>
            <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} />
            </div>
            {errors.toDate && <div className="error-message">{errors.toDate}</div>}
          </div>
          <div className='field'>
          <div className="form-group">
            <label>No of Attendees:</label>
            <input type="number" name="attendees" value={formData.attendees} onChange={handleChange} />
            </div>
            {errors.attendees && <div className="error-message">{errors.attendees}</div>}
          </div>
          <div className='field'>
          <div className="form-group">
            <label>Theme Requirements:</label>
            <input type="file" name="themeFile" onChange={handleFileChange} />
            </div>
          </div>
          <div className='field'>
          <div className="form-group">
            <label>Book Enquiry:</label>
            <textarea name="enquiry" value={formData.enquiry} onChange={handleChange} />
            </div>
          </div>
          <div className='field'>
          <div className="form-group">
            <label>Other Details:</label>
            <textarea name="otherDetails" value={formData.otherDetails} onChange={handleChange} />
            </div>
          </div>
          <button id="form-button1" type="submit">Next</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EventBookingForm;
