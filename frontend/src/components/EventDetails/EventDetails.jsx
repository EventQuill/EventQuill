import React, { useContext } from 'react';
import './EventDetails.css'; 
import music from '../../assets/music.jpeg'
import { Link } from 'react-router-dom';
import { EventContext } from '../../store/EventContextProvider';

const EventDetails = () => {
  const {selectedEvent} = useContext(EventContext);

  return (
    <div className="event-details-container">
      <h2 className="event-details-title">{selectedEvent.eventName}</h2>
      <img src={music} alt={selectedEvent.eventName} className="event-details-image" />
        <div className="event-details-info">
          <p><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laborum beatae mollitia, rem amet nostrum similique necessitatibus explicabo. Voluptates distinctio repellat labore sapiente rem atque quisquam saepe corrupti laboriosam cum!</p>
          <p><strong>Organizer:</strong> {selectedEvent.organizer}</p>
          <p><strong>Registration Fee:</strong> {selectedEvent.registrationFee}</p>
          <div className='event-details'>
            <div><p><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString()}</p></div>
          <div><Link to='/register'><button className="btn btn-info registerbtn">Register Now</button></Link></div>
          </div>  
        </div>
    </div>
  );
};

export default EventDetails;
