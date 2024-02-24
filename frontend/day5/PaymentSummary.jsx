// PaymentSummaryCard.js
import '../../assets/css/PaymentSummary.css'; // Import your CSS file
import Navbar from '../../components/navbar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
const PaymentSummaryCard = () => {
  // Dummy form data
  const data =localStorage.getItem('s');
  const formData=JSON.parse(data);
  console.log(formData);
  // Dummy selected addons
  const selectedAddons = ['Catering Service', 'Audio-Visual Equipment'];

  // Calculate total price (dummy calculation)
  const calculateTotalPrice = () => {
    // Placeholder calculation
    return "Rs.50,000";
  };
  function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  return (
    <>
      <Navbar />
      <div id="payment-det">
        <div id="title-pay">Payment Summary</div>
        <div className="payment-summary-card">
          <div className="summary-details">
            {Object.entries(formData).map(([key, value]) => (
            <div key={key}>
            <div className="field-name">{capitalizeFirstLetter(key)}: </div>
            <div className="field-value">{value}</div>
          </div>
          
            ))}
          </div>
          <div className="addons-section">
            <h3>Selected Add-Ons:</h3>
            <ul>
              {selectedAddons.map((addon, index) => (
                <li key={index}>{addon}</li>
              ))}
            </ul>
          </div>
          <div className="total-price">
            <h3>Total Price: {calculateTotalPrice()}</h3>
          </div>
          <Link to="/Udashboard"><button className="pay-now-button">Pay Now</button></Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PaymentSummaryCard;
