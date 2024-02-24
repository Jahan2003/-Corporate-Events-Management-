import { useState } from 'react';
import '../../assets/css/Addons.css';
import Navbar from '../../components/navbar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
const MultiSelectBoxButton = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="multi-select-box-button-container">
        <div id="Addon-title">
            Select Add-On Services
        </div>
      <div className="options"> 
        <div className="options-sep">
            <input
                type="checkbox"
                checked={selectedOptions.includes('Audio-Visual Services')}
                onChange={() => handleOptionClick('Audio-Visual Services')}
            />
        <label className="checkbox-button">
        Audio-Visual Services
        </label>
        </div>
        <div className="options-sep">
          <input
            type="checkbox"
            checked={selectedOptions.includes('Catering Services')}
            onChange={() => handleOptionClick('Catering Services')}
          />
        <label className="checkbox-button">
          Catering Services
        </label>
        </div>
        <div className="options-sep">
          <input
            type="checkbox"
            checked={selectedOptions.includes('Transport & Accomodation')}
            onChange={() => handleOptionClick('Transport & Accomodation')}
          />
        <label className="checkbox-button">
          Transport & Accomodation
        </label>
        </div>
        <div className="options-sep">
          <input
            type="checkbox"
            checked={selectedOptions.includes('Event Technology Solutions')}
            onChange={() => handleOptionClick('Event Technology Solutions')}
          />
        <label className="checkbox-button">
          Event Technology Solutions
        </label>
        </div>
        <div className="options-sep">
          <input
            type="checkbox"
            checked={selectedOptions.includes('Entertainment Booking')}
            onChange={() => handleOptionClick('Entertainment Booking')}
          />
        <label className="checkbox-button">
          Entertainment Booking
        </label>
        </div>
        </div> 
        <button id="addon-submit">
        <Link to="/PaymentSummary">
            Next
        </Link>
        </button>
    </div>
    <Footer/>
    </>
  );
};

export default MultiSelectBoxButton;
