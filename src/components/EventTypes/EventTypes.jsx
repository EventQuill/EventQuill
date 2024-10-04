import {artEvents, danceEvents, eventTypes, musicEvents, techEvents} from "../../dummydata";
import music from '../../assets/music.jpeg'
import './EventTypes.css';
import { useContext } from "react";
import { EventContext } from "../../store/EventContextProvider";
import { useNavigate } from "react-router-dom";


const EventTypes = () => {
  const {setSelectedEventCategory} = useContext(EventContext);
  const navigate = useNavigate();

  function handleEventClick(eventname){
    // console.log(eventname + " is clicked");

    let eventData = null;
    if(eventname === "Dance Events"){
      eventData = danceEvents;
    }
    else if(eventname === "Music Events"){
      eventData = musicEvents;
    }
    else if(eventname === "Technical Events"){
      eventData = techEvents;
    }
    else if(eventname === "Art & Craft Events"){
      eventData = artEvents;
    }

    setSelectedEventCategory(eventData);
    navigate("/eventcategory");
  }

    return (
        <div className="event-types-container">
          {eventTypes.map((event) => (
            <div className="event-card" key={event.id} onClick={() => handleEventClick(event.title)}>
              <img src={music} alt={event.title} className="event-card-image" />
              <div className="event-card-body">
                <h3 className="event-card-title">{event.title}</h3>
                <p className="event-card-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
}

export default EventTypes;