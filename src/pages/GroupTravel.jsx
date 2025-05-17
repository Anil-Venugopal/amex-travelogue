import { useState } from 'react';
import '../styles/GroupTravel.css';

const GroupTravel = () => {
  const [activeTab, setActiveTab] = useState('active');
  
  // Mock data for group travels
  const groupTravels = {
    active: [
      {
        id: 1,
        title: 'Summer in Europe',
        destination: 'Multiple Cities, Europe',
        image: 'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        dates: 'Jul 15 - Aug 10, 2025',
        organizer: 'David Chen',
        participants: [
          { id: 1, name: 'David Chen', avatar: '👨‍💼' },
          { id: 2, name: 'Sarah Johnson', avatar: '👩‍💼' },
          { id: 3, name: 'Michael Kim', avatar: '👨' },
          { id: 4, name: 'Emma Wilson', avatar: '👩' },
        ],
        progress: 65,
      },
      {
        id: 2,
        title: 'Bali Retreat',
        destination: 'Bali, Indonesia',
        image: 'https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        dates: 'Sep 5 - Sep 15, 2025',
        organizer: 'You',
        participants: [
          { id: 5, name: 'You', avatar: '😎' },
          { id: 6, name: 'Alex Thompson', avatar: '🧑' },
          { id: 7, name: 'Jessica Lee', avatar: '👩‍🦰' },
        ],
        progress: 30,
      },
    ],
    past: [
      {
        id: 3,
        title: 'Ski Weekend',
        destination: 'Aspen, Colorado, USA',
        image: 'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        dates: 'Jan 20 - Jan 23, 2024',
        organizer: 'Sarah Johnson',
        participants: [
          { id: 1, name: 'David Chen', avatar: '👨‍💼' },
          { id: 2, name: 'Sarah Johnson', avatar: '👩‍💼' },
          { id: 8, name: 'Ryan Garcia', avatar: '🧔' },
        ],
        memories: 24,
      },
    ],
    invitations: [
      {
        id: 4,
        title: 'Thailand Adventure',
        destination: 'Bangkok & Phuket, Thailand',
        image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        dates: 'Nov 10 - Nov 24, 2025',
        organizer: 'Michael Kim',
        participants: [
          { id: 3, name: 'Michael Kim', avatar: '👨' },
          { id: 9, name: 'Lisa Wong', avatar: '👩‍🦱' },
          { id: 10, name: 'Robert Smith', avatar: '👴' },
        ],
        deadline: 'Response needed by Aug 15, 2025',
      },
    ],
  };

  return (
    <div className="group-travel-page">
      <section className="hero group-travel-hero">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/7083916/pexels-photo-7083916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}
        ></div>
        <div className="hero-content">
          <h1 className="hero-title">Group Travel</h1>
          <p className="hero-subtitle">Plan and explore together</p>
        </div>
      </section>

      <section className="group-travel-section">
        <div className="container">
          <div className="group-travel-header">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'active' ? 'active' : ''}`} 
                onClick={() => setActiveTab('active')}
              >
                Active Trips ({groupTravels.active.length})
              </button>
              <button 
                className={`tab ${activeTab === 'invitations' ? 'active' : ''}`} 
                onClick={() => setActiveTab('invitations')}
              >
                Invitations ({groupTravels.invitations.length})
              </button>
              <button 
                className={`tab ${activeTab === 'past' ? 'active' : ''}`} 
                onClick={() => setActiveTab('past')}
              >
                Past Trips ({groupTravels.past.length})
              </button>
            </div>
            <button className="btn btn-primary create-group-btn">Create Group Trip</button>
          </div>

          <div className="group-travel-content">
            {activeTab === 'active' && (
              <div className="active-trips animate-fade-in">
                {groupTravels.active.map(trip => (
                  <div key={trip.id} className="group-trip-card">
                    <div className="trip-card-image">
                      <img src={trip.image} alt={trip.title} />
                    </div>
                    <div className="trip-card-content">
                      <h3 className="trip-title">{trip.title}</h3>
                      <div className="trip-destination">{trip.destination}</div>
                      <div className="trip-dates">{trip.dates}</div>
                      
                      <div className="trip-organizer">
                        <span className="label">Organized by:</span> {trip.organizer}
                      </div>
                      
                      <div className="trip-participants">
                        <div className="participant-list">
                          {trip.participants.map(participant => (
                            <div key={participant.id} className="participant-avatar" title={participant.name}>
                              {participant.avatar}
                            </div>
                          ))}
                        </div>
                        <div className="participant-count">
                          {trip.participants.length} participants
                        </div>
                      </div>
                      
                      <div className="trip-progress">
                        <div className="progress-header">
                          <div className="progress-label">Planning progress</div>
                          <div className="progress-percentage">{trip.progress}%</div>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${trip.progress}%` }}></div>
                        </div>
                      </div>
                      
                      <div className="trip-actions">
                        <button className="btn btn-primary">View Details</button>
                        <button className="btn btn-secondary">Chat</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'invitations' && (
              <div className="invitations animate-fade-in">
                {groupTravels.invitations.map(invitation => (
                  <div key={invitation.id} className="invitation-card">
                    <div className="invitation-image">
                      <img src={invitation.image} alt={invitation.title} />
                    </div>
                    <div className="invitation-content">
                      <h3 className="invitation-title">{invitation.title}</h3>
                      <div className="invitation-destination">{invitation.destination}</div>
                      <div className="invitation-dates">{invitation.dates}</div>
                      
                      <div className="invitation-organizer">
                        <span className="label">Invitation from:</span> {invitation.organizer}
                      </div>
                      
                      <div className="invitation-participants">
                        <div className="participant-list">
                          {invitation.participants.map(participant => (
                            <div key={participant.id} className="participant-avatar" title={participant.name}>
                              {participant.avatar}
                            </div>
                          ))}
                        </div>
                        <div className="participant-count">
                          {invitation.participants.length} participants
                        </div>
                      </div>
                      
                      <div className="invitation-deadline">
                        {invitation.deadline}
                      </div>
                      
                      <div className="invitation-actions">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-secondary">Decline</button>
                        <button className="btn btn-accent">View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'past' && (
              <div className="past-trips animate-fade-in">
                {groupTravels.past.map(trip => (
                  <div key={trip.id} className="past-trip-card">
                    <div className="trip-card-image">
                      <img src={trip.image} alt={trip.title} />
                      <div className="memories-badge">{trip.memories} memories</div>
                    </div>
                    <div className="trip-card-content">
                      <h3 className="trip-title">{trip.title}</h3>
                      <div className="trip-destination">{trip.destination}</div>
                      <div className="trip-dates">{trip.dates}</div>
                      
                      <div className="trip-organizer">
                        <span className="label">Organized by:</span> {trip.organizer}
                      </div>
                      
                      <div className="trip-participants">
                        <div className="participant-list">
                          {trip.participants.map(participant => (
                            <div key={participant.id} className="participant-avatar" title={participant.name}>
                              {participant.avatar}
                            </div>
                          ))}
                        </div>
                        <div className="participant-count">
                          {trip.participants.length} participants
                        </div>
                      </div>
                      
                      <div className="trip-actions">
                        <button className="btn btn-primary">View Memories</button>
                        <button className="btn btn-secondary">Trip Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="group-travel-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Plan Together?</h2>
            <p className="section-subtitle">Group travel made simple and fun</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3 className="benefit-title">Collaborate Easily</h3>
              <p className="benefit-description">
                Plan together in real-time with shared itineraries, polls, and task assignments.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3 className="benefit-title">Track Expenses</h3>
              <p className="benefit-description">
                Split costs, track group expenses, and settle debts within the app.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💬</div>
              <h3 className="benefit-title">Group Chat</h3>
              <p className="benefit-description">
                Dedicated chat for each trip to keep all communications in one place.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📸</div>
              <h3 className="benefit-title">Shared Memories</h3>
              <p className="benefit-description">
                Create a collective photo album where everyone can contribute their memories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupTravel;