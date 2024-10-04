import { useContext } from "react";
import { EventContext } from "../../store/EventContextProvider";
import './EventsCategory.css'
import EventCardList from "../EventCardList/EventCardList";

const EventsCategory = ({currentEventData}) => {
    const {selectedEventCategory} = useContext(EventContext);
    return(
        <div className="events-category" style={{margin:"1rem"}}>
          <EventCardList eventdata={selectedEventCategory}/>
        </div>
    )
}

export default EventsCategory;