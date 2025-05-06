import React from 'react';
import './FirstFlightOffer.css';

export default function FirstFlightOffer() {
  return (
    <div className="offer-wrapper">
      <div className="hero-section">
        <img
        style={{
            width:'200px',
            
        }}
          src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/49c3d8e3-bcc7-44d2-8890-f8ee7fc70d4a/Cleartrip+logo.png"
          alt="Flight Offer Banner"
          className="hero-image"
        />
      </div>

      <div className="content-container">
        <h1>First Flight Offer</h1>
        <p className="subtitle">Flat 10% Off On Your First Domestic Flight Booking</p>
        <div className="coupon-box">
          <span>Use Coupon Code:</span> <strong>CTFIRST</strong>
        </div>
        <div className="coupon-section">
 

  <a href="https://www.cleartrip.com/flights" target="_blank" rel="noopener noreferrer">
    <button className="book-btn2">Book Now</button>
  </a>
</div>
        <div className="highlight-boxes">
          <div className="highlight-card">
            <h3>What do you get?</h3>
            <p>Flat 10% off up to ₹1,000 on Domestic Flight bookings</p>
          </div>
          <div className="highlight-card">
            <h3>How to avail the offer?</h3>
            <ul>
              <li>Log in or sign up on Cleartrip</li>
              <li>Select a domestic flight</li>
              <li>Use code <strong>CTFIRST</strong> during checkout</li>
            </ul>
          </div>
        </div>

        <div className="terms-section">
          <h3>Terms & Conditions</h3>
          <ul>
            <li>Offer valid only for new users.</li>
            <li>Applicable only on domestic flights booked on Cleartrip.</li>
            <li>Maximum discount of ₹1,000.</li>
            <li>Offer valid till 31 May 2025.</li>
            <li>Standard cancellation policies apply.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}