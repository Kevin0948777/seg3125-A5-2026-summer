import { useState } from "react";
import "./App.css";
import bidoof from "./assets/bidoof.png";

function App() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!service || !date || !time) {
      alert("Please select a service, date, and time.");
      return;
    }

    setConfirmed(true);
  }

  return (
    <main className="site">
      <nav className="navbar">
        <h2 className="logo">Bidoof Dental</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#dentists">Dentists</a>
          <a href="#booking">Book</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-textbox">
          <p className="eyebrow">FAMILY DENTAL CLINIC</p>

          <h1>Comfortable dental care for confident smiles.</h1>

          <p className="hero-description">
            Bidoof Dental helps patients book appointments, explore
            services, and understand treatments in a simple and accessible way.
          </p>

          <div className="hero-buttons">
            <a href="#booking" className="primary-btn">
              Book Appointment
            </a>

            <a href="#services" className="secondary-btn">
              View Services
            </a>
          </div>
        </div>

        <div className="hero-right">
  <div className="hero-panel">
    <h3>Today's Availability</h3>
    <p>Cleaning: 10:30 AM, 2:30 PM</p>
    <p>Consultation: 1:00 PM, 4:00 PM</p>
    <p>Emergency Care: Call clinic</p>
  </div>

  <img
    src={bidoof}
    alt="Bidoof mascot"
    className="hero-image"
  />
</div>

        
      </section>

      <section className="trust-section">
        <div className="trust-card">
          <h3>Clear Prices</h3>
          <p>Service costs are shown before booking.</p>
        </div>

        <div className="trust-card">
          <h3>Easy Booking</h3>
          <p>Choose a service, date, and time in one place.</p>
        </div>

        <div className="trust-card">
          <h3>Patient Friendly</h3>
          <p>Information is written in simple language.</p>
        </div>
      </section>

      <section className="section" id="services">
        <p className="eyebrow center">SERVICES</p>
        <h2>Dental services made simple</h2>

        <p className="section-intro">
          The service cards help users compare options quickly before deciding
          whether to book an appointment or contact the clinic.
        </p>

        <div className="service-grid">
          <article className="service-card">
            <i className="ti ti-brush"></i>
            <h3>Dental Cleaning</h3>
            <p>
              Routine cleaning, polishing, and oral health checkup for regular
              patients.
            </p>
            <strong>Starting at $120</strong>
          </article>

          <article className="service-card">
            <i className="ti ti-shield-check"></i>
            <h3>Fillings</h3>
            <p>
              Tooth-colored fillings used to repair cavities and protect damaged
              teeth.
            </p>
            <strong>Starting at $180</strong>
          </article>

          <article className="service-card featured-card">
            <i className="ti ti-heart-plus"></i>
            <h3>Root Canal</h3>
            <p>
              Treatment for infected or painful teeth that helps save the tooth
              and reduce discomfort.
            </p>
            <strong>Starting at $850</strong>
          </article>

          <article className="service-card">
            <i className="ti ti-sparkles"></i>
            <h3>Teeth Whitening</h3>
            <p>
              Cosmetic whitening service for patients who want a brighter smile.
            </p>
            <strong>Starting at $250</strong>
          </article>
        </div>
      </section>

      <section className="root-canal-section">
        <div>
          <p className="eyebrow">PATIENT EDUCATION</p>
          <h2>What is a root canal?</h2>
        </div>

        <div>
          <p>
            A root canal is a procedure used when the inside of a tooth becomes
            infected or inflamed. The dentist removes the damaged tissue, cleans
            the inside of the tooth, and seals it to help save the tooth.
          </p>

          <p>
            This information supports users who want to understand a treatment
            before booking an appointment.
          </p>
        </div>
      </section>

      <section className="section" id="dentists">
        <p className="eyebrow center">OUR TEAM</p>
        <h2>Meet our dentists</h2>

        <div className="dentist-grid">
          <div className="dentist-card">
            <div className="avatar">AL</div>
            <h3>Dr. Amanda Lee</h3>
            <p>Family Dentistry</p>
          </div>

          <div className="dentist-card">
            <div className="avatar">MP</div>
            <h3>Dr. Michael Patel</h3>
            <p>Root Canal Consultation</p>
          </div>
        </div>
      </section>

      <section className="booking-section section" id="booking">
        <p className="eyebrow center">BOOKING</p>
        <h2>Book an appointment</h2>

        <p className="section-intro">
          This interactive form allows users to choose a service, date, and
          available time. A confirmation message appears after submission.
        </p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Service
            <select
              value={service}
              onChange={(event) => {
                setService(event.target.value);
                setConfirmed(false);
              }}
            >
              <option value="">Choose a service</option>
              <option value="Dental Cleaning">Dental Cleaning</option>
              <option value="Fillings">Fillings</option>
              <option value="Root Canal">Root Canal</option>
              <option value="Teeth Whitening">Teeth Whitening</option>
            </select>
          </label>

          <label>
            Date
            <input
              type="date"
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
                setConfirmed(false);
              }}
            />
          </label>

          <label>
            Time
            <select
              value={time}
              onChange={(event) => {
                setTime(event.target.value);
                setConfirmed(false);
              }}
            >
              <option value="">Choose a time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:30 PM">2:30 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
          </label>

          <button type="submit">Confirm Appointment</button>
        </form>

        {confirmed && (
          <div className="confirmation">
            <h3>Appointment Confirmed</h3>
            <p>
              Your appointment for <strong>{service}</strong> has been requested
              for <strong> {date}</strong> at <strong>{time}</strong>.
            </p>
          </div>
        )}
      </section>

      <section className="section faq-section">
        <p className="eyebrow center">FAQ</p>
        <h2>Common questions</h2>

        <div className="faq-list">
          <details>
            <summary>Do I need an appointment?</summary>
            <p>
              Yes. Most services require an appointment, but emergency cases can
              contact the clinic directly.
            </p>
          </details>

          <details>
            <summary>How much does a cleaning cost?</summary>
            <p>
              A standard dental cleaning starts at $120, depending on patient
              needs.
            </p>
          </details>

          <details>
            <summary>Can I learn about services before booking?</summary>
            <p>
              Yes. The service section explains common treatments and starting
              prices.
            </p>
          </details>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <p className="eyebrow center">CONTACT</p>
        <h2>Visit Bidoof Dental</h2>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Address</h3>
            <p>100 Smile Street</p>
            <p>Ottawa, ON</p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>(613) 555-0198</p>
          </div>

          <div className="contact-card">
            <h3>Email</h3>
            <p>info@bidoofclinic.ca</p>
          </div>

          <div className="contact-card">
            <h3>Hours</h3>
            <p>Mon-Fri: 8 AM - 6 PM</p>
            <p>Sat: 9 AM - 3 PM</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Designed by Kevin Yuan</p>
        <p>SEG3125 Assignment 2 Service Site Prototype</p>
      </footer>
    </main>
  );
}

export default App;