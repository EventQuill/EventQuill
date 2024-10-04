import { createContext, useState } from "react"

export const EventContext = createContext();

const EventContextProvider = ({children}) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedEventCategory, setSelectedEventCategory] = useState(null);
    
    return(
        <EventContext.Provider value={{selectedEvent, setSelectedEvent, selectedEventCategory, setSelectedEventCategory}}>
            {children}
        </EventContext.Provider>
    )
}

export default EventContextProvider;