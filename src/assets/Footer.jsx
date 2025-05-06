import React from "react";
import "./Footer.css"


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        
      <div className="footer-logo">
          <img src="https://cdn-1.webcatalog.io/catalog/cleartrip/cleartrip-icon-filled-256.png?v=1714777335600s" alt="Cleartrip logo" />
          <div>
            <div className="footer-logo-text">cleartrip</div>
            <div className="footer-subtext">A Flipkart Company</div>
          </div>
          </div>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">FAQs</a>
          <a href="#">Support</a>
          <a href="#">Collections</a>
          <a href="#">Cleartrip for Business</a>
          <a href="#">Gift Cards</a>
        </div>
        <div className="footer-social">
          <span>Connect</span>
          <a href="#" className="social-icon facebook" aria-label="Facebook"></a>
          <a href="#" className="social-icon instagram" aria-label="Instagram"></a>
          <a href="#" className="social-icon linkedin-in" aria-label="Linkedin-in"></a>
          
        </div>
        <div className="footer-legal">
          <p>© 2025 Cleartrip Pvt. Ltd. · <a href="#">Privacy</a> · <a href="#">Security</a> · <a href="#">Terms of Use</a> · <a href="#">Grievance Redressal</a></p>
        </div>
      </div>

      <div className="footer-content">
        <FooterSection title="Popular Domestic Flight Routes" items={[
          "Delhi Goa flights", "Mumbai Delhi flights", "Delhi Kolkata flights", "Pune Delhi flights", "Bangalore Delhi flights", "Chennai Delhi flights", "Kolkata Delhi flights", "Delhi Mumbai flights", "Delhi Bangalore flights", "Mumbai Goa flights"
        ]} />

        <FooterSection title="Popular International Flight Routes" items={[
          "Delhi Singapore flights", "Delhi Bangkok flights", "Mumbai Dubai flights", "Delhi Dubai flights", "Delhi to London flights", "Delhi to Toronto flights", "Delhi to New york flights", "Bangalore to Singapore flights", "Delhi to Paris flights", "Mumbai to Paris flights", "Delhi to Hong Kong flights"
        ]} />

        <FooterSection title="Popular hotels" items={[
          "Goa hotels", "Mumbai hotels", "Bangalore hotels", "Chennai hotels", "Nainital hotels", "Jaipur hotels", "Manali hotels", "Shimla hotels", "Pune hotels", "Hyderabad hotels", "Mahabaleshwar hotels", "Ooty hotels", "Kolkata hotels", "Matheran hotels", "Shirdi hotels", "Agra hotels", "Mysore hotels", "Munnar hotels", "Delhi hotels", "Kodaikanal hotels"
        ]} />

        <FooterSection title="Popular hotel chains" items={[
          "Taj group", "Sarovar group of hotels", "V resorts", "Fortune hotels", "Carlson hotels", "Concept", "Royal orchid hotels", "Lemon tree hotels", "Ginger", "Club mahindra", "Clarks inn group of hotels", "Welcomheritage", "Accor group of hotels", "World choice hotels", "Genx/1589 group", "Lords hotels & resorts", "Keys", "Sterling resort", "Golden tulip hotels", "Trident/oberoi hotels"
        ]} />

        <FooterSection title="Other Links" items={[
          "Cheap air tickets", "Flight tickets", "India Hotels", "Cheap Domestic Air Tickets", "Domestic Flights", "Domestic Airlines in India", "International Air Tickets", "International Flights", "International Airlines", "Holiday Packages"
        ]} />

        <FooterSection title="Useful Links" items={[
          "myntra"
        ]} />
      </div>
    </footer>
  );
}

function FooterSection({ title, items }) {
  return (
    <div className="footer-section">
      <h4>{title}</h4>
      <div className="footer-items">
        {items.map((item, idx) => (
          <a key={idx} href="#">{item}</a>
        ))}
      </div>
    </div>
  );
}