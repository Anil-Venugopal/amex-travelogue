import { useState } from 'react';
import '../styles/NewTravelPlan.css';

const NewTravelPlan = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    budget: '',
    interests: [],
    accommodationType: '',
    transportationType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInterestToggle = (interest) => {
    const updatedInterests = [...formData.interests];
    if (updatedInterests.includes(interest)) {
      const index = updatedInterests.indexOf(interest);
      updatedInterests.splice(index, 1);
    } else {
      updatedInterests.push(interest);
    }
    setFormData({ ...formData, interests: updatedInterests });
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server
    console.log(formData);
    // Redirect to the success page or show a success message
    setStep(4);
  };

  const interests = [
    'Beach', 'Mountains', 'City', 'Culture', 'Food', 'Art',
    'History', 'Adventure', 'Nature', 'Relaxation', 'Shopping', 'Nightlife'
  ];

  const accommodationTypes = [
    { value: 'hotel', label: 'Hotel', icon: '🏨' },
    { value: 'hostel', label: 'Hostel', icon: '🛏️' },
    { value: 'apartment', label: 'Apartment', icon: '🏢' },
    { value: 'resort', label: 'Resort', icon: '🌴' },
    { value: 'villa', label: 'Villa', icon: '🏡' },
  ];

  const transportationTypes = [
    { value: 'plane', label: 'Plane', icon: '✈️' },
    { value: 'train', label: 'Train', icon: '🚆' },
    { value: 'car', label: 'Car', icon: '🚗' },
    { value: 'bus', label: 'Bus', icon: '🚌' },
    { value: 'cruise', label: 'Cruise', icon: '🚢' },
  ];

  return (
    <div className="new-travel-plan-page">
      <section className="hero travel-plan-hero">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1260&h=750)' }}
        ></div>
        <div className="hero-content">
          <h1 className="hero-title">Create Your Travel Plan</h1>
          <p className="hero-subtitle">Let's craft your perfect journey, one step at a time</p>
        </div>
      </section>

      <section className="travel-plan-form-section">
        <div className="container">
          <div className="progress-bar">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-label">Basics</div>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-label">Preferences</div>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">Details</div>
            </div>
          </div>

          <div className="travel-plan-form-container">
            <form onSubmit={handleSubmit} className="travel-plan-form">
              {step === 1 && (
                <div className="form-step animate-fade-in">
                  <h2 className="form-step-title">Tell us about your trip</h2>
                  
                  <div className="form-group">
                    <label htmlFor="destination">Where are you going?</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Enter a destination"
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="startDate">Start Date</label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="endDate">End Date</label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="travelers">Number of Travelers</label>
                      <input
                        type="number"
                        id="travelers"
                        name="travelers"
                        min="1"
                        value={formData.travelers}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Budget (USD)</label>
                      <input
                        type="number"
                        id="budget"
                        name="budget"
                        min="0"
                        step="100"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Approximate budget"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" onClick={nextStep} className="btn btn-primary">
                      Next
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="form-step animate-fade-in">
                  <h2 className="form-step-title">What are you interested in?</h2>
                  
                  <div className="form-group">
                    <label>Select your interests (Choose as many as you like)</label>
                    <div className="interests-grid">
                      {interests.map((interest) => (
                        <div
                          key={interest}
                          className={`interest-item ${formData.interests.includes(interest) ? 'selected' : ''}`}
                          onClick={() => handleInterestToggle(interest)}
                        >
                          {interest}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Accommodation Type</label>
                    <div className="option-cards">
                      {accommodationTypes.map((type) => (
                        <div
                          key={type.value}
                          className={`option-card ${formData.accommodationType === type.value ? 'selected' : ''}`}
                          onClick={() => setFormData({ ...formData, accommodationType: type.value })}
                        >
                          <div className="option-icon">{type.icon}</div>
                          <div className="option-label">{type.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" onClick={prevStep} className="btn btn-secondary">
                      Back
                    </button>
                    <button type="button" onClick={nextStep} className="btn btn-primary">
                      Next
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-step animate-fade-in">
                  <h2 className="form-step-title">Transportation & Details</h2>
                  
                  <div className="form-group">
                    <label>Transportation Type</label>
                    <div className="option-cards">
                      {transportationTypes.map((type) => (
                        <div
                          key={type.value}
                          className={`option-card ${formData.transportationType === type.value ? 'selected' : ''}`}
                          onClick={() => setFormData({ ...formData, transportationType: type.value })}
                        >
                          <div className="option-icon">{type.icon}</div>
                          <div className="option-label">{type.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes || ''}
                      onChange={handleChange}
                      placeholder="Any special requirements or preferences..."
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" onClick={prevStep} className="btn btn-secondary">
                      Back
                    </button>
                    <button type="submit" className="btn btn-accent">
                      Create Travel Plan
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="form-success animate-fade-in">
                  <div className="success-icon">✓</div>
                  <h2 className="success-title">Travel Plan Created!</h2>
                  <p className="success-message">
                    Your travel plan for {formData.destination} has been created successfully.
                    You can now view it in your upcoming travels section.
                  </p>
                  <div className="form-actions center">
                    <button
                      type="button"
                      onClick={() => window.location.href = '/upcoming-travels'}
                      className="btn btn-primary"
                    >
                      View My Travels
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewTravelPlan;