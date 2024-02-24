import '../../assets/css/Bookings.css'; // Import your CSS file
import Navbar from '../../components/navbar';
import Footer from '../footer';

const Bookings = () => {
  // Sample event data
  const events = [
    {
      id: 1,
      venue: 'Convention Center',
      attendees: 200,
      amount: 5000,
      status: 'Active',
      date: '2024-02-25'
    },
    {
      id: 2,
      venue: 'Banquet Hall',
      attendees: 150,
      amount: 4000,
      status: 'Active',
      date: '2024-02-25'
    },
    {
      id: 3,
      venue: 'Hotel Ballroom',
      attendees: 300,
      amount: 7000,
      status: 'Closed',
      date: '2024-01-25'
    },
  ];

  return (
    <>
    <Navbar/>
    <div id="parent-con">
    <div id="event-title">
            <p>Bookings</p>
    </div>
    <div className="event-cards-container">
      {events.map(event => (
        <div key={event.id} className={`event-card ${event.status.toLowerCase()}`}>
          <h3>Event</h3>
          <div className="event-details">
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>No. of Attendees:</strong> {event.attendees}</p>
            <p><strong>Amount to be Paid:</strong> Rs.{event.amount}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Status:</strong> {event.status}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Bookings;
