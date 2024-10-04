import { FaSearch } from "react-icons/fa";
import './Search.css';

const Search = () => {
    return(
        <div className="input-group rounded" style={{width:"20rem"}}>
            <input type="search" placeholder="Search here.." />
            <span className="input-group-text border-0" id="search-addon">
                <FaSearch /> 
            </span>
        </div>
    )
}

export default Search;