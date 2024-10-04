import './RegisterEvent.css';
import { EventContext } from '../../store/EventContextProvider';
import { useContext } from 'react';

const RegisterEvent = () => {
  const { selectedEvent } = useContext(EventContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted for", selectedEvent);
    // Payment processing logic
  };

  return (
    <div className="register-event-container">
      <h1 className="register-event-title">Payment for {selectedEvent.eventName}</h1>
      <form className="register-event-form" onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label htmlFor="nameOnCard">Name on Card</label>
          <input
            type="text"
            id="nameOnCard"
            name="nameOnCard"
            placeholder="Enter the name on card"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Enter your card number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiry">Expiry Date</label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            placeholder="MM/YY"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="Enter CVV"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Complete Payment</button>
      </form>
    </div>
  );
};

export default RegisterEvent;
