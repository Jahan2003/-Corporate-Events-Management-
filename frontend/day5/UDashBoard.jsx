
import Navbar from '../../components/navbar';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "../../assets/css/UDashBoard.css";

function UDashBoard(){  
    const upcomingEvents = [
      { id: 1, title: 'Company Conference', date: '2024-02-02', location: 'New York' },
      { id: 2, title: 'Product Launch', date: '2024-04-10', location: 'San Francisco' },
    ];
  
    const recentlyBookedEvents = [
      { id: 1, title: 'Team Building Workshop', date: '2024-02-20', location: 'Chicago' },
      { id: 2, title: 'Annual Gala Dinner', date: '2024-01-30', location: 'Los Angeles' },
    ];
  
    const yetToPayDetails = [
      { id: 1, event: 'Marketing Summit', amount: '$500' },
      { id: 2, event: 'Trade Show Booth', amount: '$1000' },
    ];
  
    return (
      <>
        <Navbar />
        <div className='welcome-note'style={{fontSize:"30px", padding:"20px",fontWeight:"bolder"}}>Welcome Back!</div>
        <div className='dashboard-top-cardx'>
          <div className="cardx mcorporate-name">
            <h2>Corporate Name</h2>
            <p>ABC Corporation</p> 
          </div>
          <div className="cardx mevents-booked">
            <h2>Events Booked</h2>
            <p>5</p>
          </div>
          <div className="cardx mupcoming-event">
            <h2>Upcoming Event</h2>
            <p>Company Conference</p>
          </div>
        </div>
        <div className="xdashboard">
          <div className="cardm upcoming-events">
            <h2>Upcoming Events</h2>
            <div className="event-calendar">
              <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                height="500px"
                events={upcomingEvents.map(event => ({
                  title: event.title,
                  date: event.date
                }))}
              />
            </div>
          </div>
        </div>
  
        <div className="dashboard">
          <div className="cardm recently-booked">
            <h2>Recently Booked</h2>
            {recentlyBookedEvents.map(event => (
              <div key={event.id} className="event-item">
                <p>Title: {event.title}</p>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
              </div>
            ))}
          </div>
  
          <div className="cardm yet-to-pay">
            <h2>Yet to Pay</h2>
            {yetToPayDetails.map(detail => (
              <div key={detail.id} className="payment-item">
                <p>Event: {detail.event}</p>
                <p>Amount: {detail.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
export default UDashBoard;