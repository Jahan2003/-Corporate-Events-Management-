import { useState } from 'react';
import "../../assets/css/AdminPackage.css";
import { Link } from "react-router-dom";
import Footer from "../footer";
import NavbarHr from '../../components/navbarHr';

const AdminPackageCards = () => {
  // Sample package data
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Basic',
      benefits: [
        '50-100 attendees',
        'Standard support',
        'Access to basic features',
        'Limited customization',
      ],
      price: 'Rs.20,000',
    },
    {
      id: 2,
      name: 'Gold',
      benefits: [
        '100-200 attendees',
        'Priority support',
        'Access to advanced features',
        'Moderate customization',
      ],
      price: 'Rs.50,000',
    },
    {
      id: 3,
      name: 'Premium',
      benefits: [
        'Unlimited attendees',
        '24/7 premium support',
        'Access to premium features',
        'Full customization',
      ],
      price: 'Rs.1,00,000',
    },
  ]);

  // Function to delete a package by ID
  const handleDeletePackage = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
  };

  return (
    <>
      <NavbarHr/>
      <div id="package-con">
        <div id="package-title">
          <p>Choose Package</p>
        </div>
        <div className="package-cards-container">
          {packages.map((packagea) => (
            <div key={packagea.id} className="package-card">
              <h3 id="package-type">{packagea.name}</h3>
              <div className="benefits">
                <ul>
                  {packagea.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div id="comb">
                <div id="start-price">
                  <p>Starting Price: {packagea.price}</p>
                </div>
                <div id="pack-sub">
                  <button>Edit</button>
                  <button onClick={() => handleDeletePackage(packagea.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/addEvent">
          <div id="add-button-con">
            <div id="add-button">Add Package</div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default AdminPackageCards;
