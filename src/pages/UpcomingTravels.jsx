import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UpcomingTravels.css';

const UpcomingTravels = () => {
  const [travels, setTravels] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Mock data - In a real app, this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTravels([
        {
          id: 1,
          destination: 'Tokyo, Japan',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1260&h=750',
          startDate: '2025-06-15',
          endDate: '2025-06-28',
          travelers: 2,
          accommodation: 'Hotel',
          transportationType: 'plane',
          status: 'upcoming',
          completedTasks: 3,
          totalTasks: 8,
        },
        {
          id: 2,
          destination: 'Barcelona, Spain',
          image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1260&h=750',
          startDate: '2025-08-10',
          endDate: '2025-08-17',
          travelers: 4,
          accommodation: 'Apartment',
          transportationType: 'plane',
          status: 'upcoming',
          completedTasks: 1,
          totalTasks: 7,
        },
        {
          id: 3,
          destination: 'New York, USA',
          image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1260&h=750',
          startDate: '2025-05-05',
          endDate: '2025-05-10',
          travelers: 2,
          accommodation: 'Hotel',
          transportationType: 'plane',
          status: 'upcoming',
          completedTasks: 6,
          totalTasks: 6,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Calculate days remaining
  const calculateDaysRemaining = (startDate) => {
    const today = new Date();
    const tripDate = new Date(startDate);
    const diffTime = tripDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get icon for transportation type
  const getTransportIcon = (type) => {
    switch (type) {
      case 'plane': return '✈️';
      case 'train': return '🚆';
      case 'car': return '🚗';
      case 'bus': return '🚌';
      case 'cruise': return '🚢';
      default: return '✈️';
    }
  };

  return (
    <div className="upcoming-travels-page" style={{ paddingTop: '96px' }}>
      <section className="travels-section">
        <div className="container">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading your travels...</p>
            </div>
          ) : travels.length > 0 ? (
            <div className="travels-grid">
              {travels.map((travel) => {
                const daysRemaining = calculateDaysRemaining(travel.startDate);
                const progressPercentage = Math.round((travel.completedTasks / travel.totalTasks) * 100);
                
                return (
                  <div key={travel.id} className="travel-card">
                    <div className="travel-card-image">
                      <img src={travel.image} alt={travel.destination} />
                      <div className="travel-days-badge">
                        <span className="days-number">{daysRemaining}</span>
                        <span className="days-text">days left</span>
                      </div>
                    </div>
                    <div className="travel-card-content">
                      <h3 className="travel-destination">{travel.destination}</h3>
                      <div className="travel-dates">
                        {formatDate(travel.startDate)} - {formatDate(travel.endDate)}
                      </div>
                      <div className="travel-details">
                        <div className="travel-detail-item">
                          <span className="detail-icon">👥</span>
                          <span className="detail-text">{travel.travelers} {travel.travelers === 1 ? 'traveler' : 'travelers'}</span>
                        </div>
                        <div className="travel-detail-item">
                          <span className="detail-icon">🏠</span>
                          <span className="detail-text">{travel.accommodation}</span>
                        </div>
                        <div className="travel-detail-item">
                          <span className="detail-icon">{getTransportIcon(travel.transportationType)}</span>
                          <span className="detail-text">{travel.transportationType.charAt(0).toUpperCase() + travel.transportationType.slice(1)}</span>
                        </div>
                      </div>
                      <div className="travel-preparation">
                        <div className="preparation-header">
                          <h4 className="preparation-title">Preparation Progress</h4>
                          <span className="preparation-percentage">{progressPercentage}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                        <div className="preparation-tasks">
                          {travel.completedTasks} of {travel.totalTasks} tasks completed
                        </div>
                      </div>
                      <div className="travel-card-actions">
                        <button className="btn btn-primary" onClick={() => navigate(`/upcoming-travels/${travel.id}/details`)}>View Details</button>
                        <button className="btn btn-secondary">Edit Trip</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-travels">
              <div className="no-travels-icon">🧳</div>
              <h2 className="no-travels-title">No upcoming travels</h2>
              <p className="no-travels-message">
                You don't have any upcoming travels planned yet. Why not create a new travel plan?
              </p>
              <button className="btn btn-primary">Create Travel Plan</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UpcomingTravels;