import { useState } from "react";
import "./App.css";

function App() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  function handleBooking(event) {
    event.preventDefault();

    if (!selectedService || !selectedDate || !selectedTime) {
      alert("Please select a service, date, and time.");
      return;
    }

    setConfirmed(true);
  }

  return (
    <main className="site">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">BrightSmile Dental</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#booking">Book</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-tag">FAMILY DENTAL CARE</p>

          <h1>Modern dental care for a brighter smile.</h1>

          <p className="hero-text">
            BrightSmile Dental Clinic provides friendly, professional, and
            accessible dental services for patients of all ages.
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

        <div className="hero-card">
          <h3>Clinic Hours</h3>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 3:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <h2>Our Services</h2>

        <p className="section-intro">
          We offer common dental services with clear information so patients can
          understand their options before booking an appointment.
        </p>

        <div className="service-grid">
          <div className="service-card">
            <div className="icon-circle">
              <i className="ti ti-brush"></i>
            </div>

            <h3>Dental Cleaning</h3>
            <p>
              Routine cleaning to remove plaque, polish teeth, and support oral
              health.
            </p>
            <span>Starting at $120</span>
          </div>

          <div className="service-card">
            <div className="icon-circle">
              <i className="ti ti-shield-check"></i>
            </div>

            <h3>Dental Fillings</h3>
            <p>
              Treatment for cavities using tooth-colored fillings to restore
              damaged teeth.
            </p>
            <span>Starting at $180</span>
          </div>

          <div className="service-card">
            <div className="icon-circle">
              <i className="ti ti-heart-plus"></i>
            </div>

            <h3>Root Canal</h3>
            <p>
              A treatment used to save an infected or painful tooth and prevent
              further damage.
            </p>
            <span>Starting at $850</span>
          </div>

          <div className="service-card">
            <div className="icon-circle">
              <i className="ti ti-sparkles"></i>
            </div>

            <h3>Teeth Whitening</h3>
            <p>
              Cosmetic whitening service designed to improve the brightness of
              your smile.
            </p>
            <span>Starting at $250</span>
          </div>
        </div>
      </section>

      {/* ROOT CANAL INFORMATION */}
      <section className="info-section">
        <div className="info-box">
          <h2>What is a root canal?</h2>

          <p>
            A root canal is a dental procedure used when the inside of a tooth
            becomes infected or inflamed. The dentist removes the damaged tissue,
            cleans the inside of the tooth, and seals it to help save the tooth.
          </p>

          <p>
            This section supports users who want to understand a treatment before
            contacting the clinic or booking an appointment.
          </p>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section" id="booking">
        <h2>Book an Appointment</h2>

        <p className="section-intro">
          Select a service, date, and time. This prototype provides an
          interactive booking confirmation.
        </p>

        <form className="booking-form" onSubmit={handleBooking}>
          <label>
            Select Service
            <select
              value={selectedService}
              onChange={(event) => {
                setSelectedService(event.target.value);
                setConfirmed(false);
              }}
            >
              <option value="">Choose a service</option>
              <option value="Dental Cleaning">Dental Cleaning</option>
              <option value="Dental Fillings">Dental Fillings</option>
              <option value="Root Canal">Root Canal</option>
              <option value="Teeth Whitening">Teeth Whitening</option>
            </select>
          </label>

          <label>
            Select Date
            <input
              type="date"
              value={selectedDate}
              onChange={(event) => {
                setSelectedDate(event.target.value);
                setConfirmed(false);
              }}
            />
          </label>

          <label>
            Select Time
            <select
              value={selectedTime}
              onChange={(event) => {
                setSelectedTime(event.target.value);
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
          <div className="confirmation-box">
            <h3>Appointment Confirmed</h3>
            <p>
              Your appointment for <strong>{selectedService}</strong> has been
              requested for <strong>{selectedDate}</strong> at{" "}
              <strong>{selectedTime}</strong>.
            </p>
            <p>
              This is a prototype confirmation. A real clinic would send a final
              confirmation by email or phone.
            </p>
          </div>
        )}
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2>About BrightSmile Dental</h2>

        <div className="about-box">
          <p>
            BrightSmile Dental Clinic is a fictional dental clinic created for a
            user-centered design prototype. The site is designed to help users
            quickly understand services, find clinic information, and book an
            appointment.
          </p>

          <p>
            The design focuses on clarity, trust, readability, and simple
            navigation so that both confident technology users and less
            experienced users can complete their goals.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2>Contact Us</h2>

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
            <p>info@brightsmileclinic.ca</p>
          </div>

          <div className="contact-card">
            <h3>Hours</h3>
            <p>Mon-Fri: 8 AM - 6 PM</p>
            <p>Sat: 9 AM - 3 PM</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Designed by Kevin Yuan</p>
        <p>SEG3125 Service Site Prototype</p>
      </footer>
    </main>
  );
}

export default App;