import React, { useState } from 'react';
import './AddEvent.css';

const AddEvent = () => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Data Submitted:");
  };

  return (
    <div className="add-event-container">
      <h2>Add a New Event</h2>
      <form onSubmit={handleSubmit} className="add-event-form"> 
        <div className="form-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            placeholder="Enter event name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Event Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter event description"
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="registrationFee">Registration Fee</label>
          <input
            type="text"
            id="registrationFee"
            name="registrationFee"
            placeholder="Enter registration fee"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Event Date</label>
          <input
            type="date"
            id="date"
            name="date"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
