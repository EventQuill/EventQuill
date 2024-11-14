import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import EventTypes from './components/EventTypes/EventTypes';
import RegisterEvent from './components/RegisterEvent/RegisterEvent';
import EventContextProvider from './store/EventContextProvider';
import EventsCategory from './components/EventsCategory/EventsCategory';
import Gallery from './components/Gallery/Gallery'
import AddEvent from './components/AddEvent/AddEvent';
import EventDetails from './components/EventDetails/EventDetails'

function App() {

  return (
    <EventContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/about'element={<About/>} />
        <Route exact path='/events'element={<EventTypes/>} />
        <Route exact path='/register'element={<RegisterEvent/>} />
        <Route exact path='/eventcategory' element={<EventsCategory />}/>
        <Route exact path='/gallery' element={<Gallery/>}/>
        <Route exact path='/addevent' element={<AddEvent/>}/>
        <Route exact path='/eventdetails' element={<EventDetails />}/>
      </Routes>
    </Router>
    </EventContextProvider>
  );
}

export default App;
