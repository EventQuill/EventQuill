import React from 'react';
import './Navbar.css';
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        Event<span>Quill</span>
      </div>  

      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About US</Link>
        <Link to="/gallery" className="nav-item">Gallery</Link>
        <Link to="/events" className="nav-item">Events</Link>
      </div>

      <div className="profile">
      <Link to='/addevent'><button type="button" class="btn btn-outline-secondary addbtn">Add New Event</button></Link>
        <div>
        <IoMdContact size={50} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
