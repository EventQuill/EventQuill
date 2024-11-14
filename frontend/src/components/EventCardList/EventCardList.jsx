import EventCard from '../EventCard/EventCard';

function EventCardList({ eventdata }) {
  return (
    <div className='m-2'>
      {eventdata && eventdata.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-flexStart align-items-center" style={{gap:"2rem"}}>
          {eventdata.map((event, index) => (
            <EventCard key={index} event={event}/>
          ))}
        </div>
      ) : (
        <div className='d-flex justify-content-center mt-4' style={{color:"red", fontSize:"2rem"}}>No events found 😭</div>
      )}
    </div>
  );
}

export default EventCardList;
