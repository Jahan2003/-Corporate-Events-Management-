import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

const NavbarHr = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Eventify</Link>
      </div>
      <ul className="nav-links">
        <li>
          <div className="navLinks">
          <Link to="/Adashboard">Home</Link>
          </div>
        </li>
        <li>
        <div className="navLinks">
          <Link to="/service">Services</Link>
          </div>
        </li>
        <li>
          <div className="navLinks">
          <Link to="/Bookings">Bookings</Link>
          </div>
        </li>
      </ul>
      <ul className="nav-links1">
        <li>
      <div className="navLinks">
          <Link to="/UserProfile">Profile</Link>
          </div>
        </li>
        <li>
        <div className="navLinks">
          <Link to="/landing">Logout</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarHr;
