import { useNavigate } from 'react-router-dom'
import music from '../../assets/music.jpeg'
import './EventCard.css'
import { useContext } from 'react';
import { EventContext } from '../../store/EventContextProvider';

const EventCard = ({event}) => {
  const navigate = useNavigate();

  const { setSelectedEvent } = useContext(EventContext);

  const handleRegisterClick = () => {
    setSelectedEvent(event);
    // console.log(selectedEvent)
    navigate('/eventdetails');
  }

    return(
      <>
       <div className="card m-2" style={{ width: "18em", height: "auto", overflow: "hidden" }} key={event.id}>
          <img className="card-img-top" src={music} alt="Card image cap" style={{ height: "150px", objectFit: "cover" }} /> 
          <div className="card-body">
            <h5 className="card-title">{event.eventName}</h5>
            <p className="card-text">{event.organizer}</p> 
            <div className="card-info">
              <div>
                <p className="card-text">
                  <strong>Registration Fee:</strong> {event.registrationFee}
                </p>
                <p className="card-text">
                  <strong>Date:</strong> {event.date}
                </p>
              </div>
              <button className="btn btn-info mt-2 mr-2" onClick={handleRegisterClick}>Explore</button>
            </div>
          </div>
      </div>
    </>
    )
}

export default EventCard;