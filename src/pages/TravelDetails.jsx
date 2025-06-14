import React, { useState } from 'react';
import jsPDF from 'jspdf';
import '../styles/TravelDetails.css';

const mockData = {
  flights: [
    { route: 'BLR-CDG', flight: 'Air France AF192', departure: '2023-03-01 02:30', arrival: '2023-03-01 08:15', price: 'Rs 120000', gold: 'Rs 108000', platinum: 'Rs 96000' },
    { route: 'CDG-BLR', flight: 'Air France AF173', departure: '2023-03-08 10:00', arrival: '2023-03-08 22:45', price: 'Rs 120000', gold: 'Rs 108000', platinum: 'Rs 96000' },
  ],
  lounges: [
    { name: 'Plaza Premium Lounge', location: 'BLR', cuisine: 'International', price: 'Rs 1500', gold: 'Rs 1350', platinum: 'Rs 1200' },
    { name: 'Sleep n fly Sleep Pod', location: 'DXB', cuisine: 'N/A', price: 'Rs 2000', gold: 'Rs 1800', platinum: 'Rs 1600' },
    { name: 'Air France Lounge', location: 'CDG', cuisine: 'French', price: 'Rs 2500', gold: 'Rs 2250', platinum: 'Rs 2000' },
  ],
  hotels: [
    { name: 'Marriott Paris Charles de Gaulle', location: 'Paris, France', price: 'Rs 60000', gold: 'Rs 54000', platinum: 'Rs 48000' },
  ],
  transport: [
    { name: 'Europcar Minivan', pickup: '10:00', drop: '18:00', type: 'Minivan', price: 'Rs 8000', gold: 'Rs 7000', platinum: 'Rs 6000' },
  ],
  restaurants: [
    { name: 'Bistro des Deux Magots', location: 'Paris, France', cuisine: 'French', price: 'Rs 1500', gold: 'Rs 1350', platinum: 'Rs 1200' },
    { name: 'Hard Rock Cafe Paris', location: 'Paris, France', cuisine: 'American', price: 'Rs 2000', gold: 'Rs 1800', platinum: 'Rs 1600' },
  ],
  things: [
    { name: 'Disneyland Paris', location: 'Marne-la-Vallée, France', category: 'Amusement Park', price: 'Rs 8000', gold: 'Rs 7200', platinum: 'Rs 6400' },
    { name: 'Paris Aquarium', location: 'Paris, France', category: 'Aquarium', price: 'Rs 2500', gold: 'Rs 2250', platinum: 'Rs 2000' },
    { name: 'Guided Family Tour of Paris', location: 'Paris, France', category: 'Guided Tour', price: 'Rs 10000', gold: 'Rs 9000', platinum: 'Rs 8000' },
  ],
  summary: [
    { card: 'No Amex Card', total: 'Rs 355000', rewards: '-', savings: '-' },
    { card: 'Gold Card', total: 'Rs 319500', rewards: 'You will receive 2366 reward points', savings: 'Rs 35500' },
    { card: 'Platinum Card *', total: 'Rs 284000', rewards: 'You will receive 3550 reward points', savings: 'Rs 71000' },
  ],
};

const Section = ({ title, children }) => (
  <section className="td-section">
    <h2 className="td-section-title">{title}</h2>
    {children}
  </section>
);

const downloadReport = async () => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });

  // Helper to load image as base64
  const toDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    }));

  const img1 = await toDataURL('/reports/report1.png');
  const img2 = await toDataURL('/reports/report2.png');

  // Add first image
  doc.addImage(img1, 'PNG', 0, 0, 595, 842); // A4 size in pt
  doc.addPage();
  // Add second image
  doc.addImage(img2, 'PNG', 0, 0, 595, 842);

  doc.save('trip-report.pdf');
};

const TravelDetails = () => {
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const handleConfirmBooking = () => {
    setIsBookingConfirmed(true);
    // Add a small delay to ensure popup is rendered
    setTimeout(() => {
      const popupElement = document.querySelector('.booking-popup');
      if (popupElement) {
        popupElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  };

  const handleClosePopup = () => {
    setIsBookingConfirmed(false);
  };

  return (
    <div className="travel-details-page" style={{ paddingTop: '96px', paddingBottom: '48px', background: '#fff' }}>
      <h1 className="td-main-title">GenAI Generated Trip Itinerary</h1>
      
      {isBookingConfirmed && (
        <div className="booking-popup-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div className="booking-popup" style={{
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="success-icon" style={{
              fontSize: '48px',
              color: '#4CAF50',
              marginBottom: '16px'
            }}>✓</div>
            <h2 className="success-title" style={{
              fontSize: '24px',
              marginBottom: '16px',
              color: '#333'
            }}>Booking Confirmed!</h2>
            <p className="success-message" style={{
              color: '#666',
              marginBottom: '24px',
              lineHeight: '1.5'
            }}>
              Your travel booking has been successfully confirmed. You can view all the details in your upcoming travels section.
            </p>
            <div className="popup-actions" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px'
            }}>
              <button
                className="btn btn-primary"
                onClick={() => window.location.href = '/upcoming-travels'}
                style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                View My Travels
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleClosePopup}
                style={{
                  color: 'black',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Section title="Flights">
        <table className="td-table">
          <thead>
            <tr><th>Route</th><th>Flight Name</th><th>Departure</th><th>Arrival</th><th>Price</th><th>Gold Card Price</th><th>Platinum Card Price</th></tr>
          </thead>
          <tbody>
            {mockData.flights.map((f, i) => (
              <tr key={i}><td>{f.route}</td><td>{f.flight}</td><td>{f.departure}</td><td>{f.arrival}</td><td>{f.price}</td><td>{f.gold}</td><td>{f.platinum}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Lounges">
        <table className="td-table">
          <thead>
            <tr><th>Lounge Name</th><th>Location</th><th>Cuisine</th><th>Price Range</th><th>Gold Card Price</th><th>Platinum Card Price</th></tr>
          </thead>
          <tbody>
            {mockData.lounges.map((l, i) => (
              <tr key={i}><td>{l.name}</td><td>{l.location}</td><td>{l.cuisine}</td><td>{l.price}</td><td>{l.gold}</td><td>{l.platinum}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Hotels">
        <table className="td-table">
          <thead>
            <tr><th>Hotel Name</th><th>Location</th><th>Price Per Night</th><th>Gold Card Price</th><th>Platinum Card Price</th></tr>
          </thead>
          <tbody>
            {mockData.hotels.map((h, i) => (
              <tr key={i}><td>{h.name}</td><td>{h.location}</td><td>{h.price}</td><td>{h.gold}</td><td>{h.platinum}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Local Transport">
        <table className="td-table">
          <thead>
            <tr><th>Name</th><th>PickUp Time</th><th>Drop Time</th><th>Transport Type</th><th>Price</th><th>Gold Card Price</th><th>Platinum Card Price</th></tr>
          </thead>
          <tbody>
            {mockData.transport.map((t, i) => (
              <tr key={i}><td>{t.name}</td><td>{t.pickup}</td><td>{t.drop}</td><td>{t.type}</td><td>{t.price}</td><td>{t.gold}</td><td>{t.platinum}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Restaurants">
        <table className="td-table">
          <thead>
            <tr><th>Name</th><th>Location</th><th>Cuisine</th><th>Price</th><th>Gold Card Price</th><th>Platinum Card Price</th></tr>
          </thead>
          <tbody>
            {mockData.restaurants.map((r, i) => (
              <tr key={i}><td>{r.name}</td><td>{r.location}</td><td>{r.cuisine}</td><td>{r.price}</td><td>{r.gold}</td><td>{r.platinum}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Things to Do">
        <table className="td-table">
          <thead>
            <tr><th>Name</th><th>Location</th><th>Category</th><th>Price</th><th>Gold Card Price</th><th>Platinum Card Price</th></tr>
          </thead>
          <tbody>
            {mockData.things.map((t, i) => (
              <tr key={i}><td>{t.name}</td><td>{t.location}</td><td>{t.category}</td><td>{t.price}</td><td>{t.gold}</td><td>{t.platinum}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Amex Card Summary">
        <table className="td-table">
          <thead>
            <tr><th>Amex Card</th><th>Total Price</th><th>Rewards Benefits</th><th>Total Savings</th></tr>
          </thead>
          <tbody>
            {mockData.summary.map((s, i) => (
              <tr key={i}><td>{s.card}</td><td>{s.total}</td><td>{s.rewards}</td><td>{s.savings}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <button className="btn btn-primary" onClick={() => window.history.back()}>Back</button>
        <button className="btn btn-accent" style={{ marginLeft: 16 }} onClick={downloadReport}>Download Report</button>
        <button 
          className="btn btn-success" 
          style={{ marginLeft: 16, backgroundColor: '#4CAF50' }} 
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default TravelDetails; 