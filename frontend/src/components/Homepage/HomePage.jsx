import Hero from "../Hero/Hero"
import Search from '../Search/Search'
import {mostPopularEvents} from '../../dummydata.jsx';
import './HomePage.css';
import Footer from "../Footer/Footer.jsx";
import EventCardList from "../EventCardList/EventCardList.jsx";


const HomePage = () => {
    return (
        <div style={{maxWidth:"100vw" , overflowX:"hidden"}}>
        <Hero/>
        <div className="search-ele">
            <Search/>
        </div>
        <div className='popular-events'>  
            <span className='popular-title'>Most Popular Events</span>
            <EventCardList eventdata={mostPopularEvents} />
        </div>
        <Footer/>
        </div>
    )
}

export default HomePage;