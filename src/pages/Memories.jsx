import { useState, useEffect } from 'react';
import '../styles/Memories.css';

const Memories = () => {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [filter, setFilter] = useState('all');

  // Mock data - In a real app, this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMemories([
        {
          id: 1,
          title: 'Sunset in Santorini',
          location: 'Santorini, Greece',
          date: '2024-04-15',
          images: [
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1260&h=750',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1260&h=750',
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1260&h=750',
          ],
          description: 'Watching the sunset in Oia was absolutely breathtaking. The white buildings against the blue Aegean Sea created a perfect contrast.',
          tags: ['Europe', 'Island', 'Sunset'],
          featured: true,
        },
        {
          id: 2,
          title: 'Hiking in Kyoto',
          location: 'Kyoto, Japan',
          date: '2024-03-10',
          images: [
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1260&h=750',
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1260&h=750',
          ],
          description: 'Explored the bamboo forests and ancient temples. The serenity and beauty of the place was overwhelming.',
          tags: ['Asia', 'Nature', 'Cultural'],
          featured: false,
        },
        {
          id: 3,
          title: 'Safari Adventure',
          location: 'Serengeti, Tanzania',
          date: '2023-11-20',
          images: [
            'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1260&h=750',
            'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1260&h=750',
          ],
          description: 'Witnessed the great migration and saw the big five. An unforgettable wildlife experience.',
          tags: ['Africa', 'Wildlife', 'Adventure'],
          featured: true,
        },
        {
          id: 4,
          title: 'Northern Lights',
          location: 'Reykjavik, Iceland',
          date: '2023-09-05',
          images: [
            'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1260&h=750',
          ],
          description: 'Finally saw the aurora borealis dancing across the night sky. The colors were more vibrant than I could have imagined.',
          tags: ['Europe', 'Nature', 'Night'],
          featured: false,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Open memory modal
  const openMemory = (memory) => {
    setSelectedMemory(memory);
    document.body.style.overflow = 'hidden';
  };

  // Close memory modal
  const closeMemory = () => {
    setSelectedMemory(null);
    document.body.style.overflow = 'auto';
  };

  // Get all unique tags
  const getAllTags = () => {
    const allTags = new Set();
    memories.forEach(memory => {
      memory.tags.forEach(tag => allTags.add(tag));
    });
    return ['all', ...Array.from(allTags)];
  };

  // Filter memories by tag
  const filteredMemories = filter === 'all' 
    ? memories 
    : memories.filter(memory => memory.tags.includes(filter));

  return (
    <div className="memories-page">
      <section className="hero memories-hero">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1260&h=750)' }}
        ></div>
        <div className="hero-content">
          <h1 className="hero-title">Travel Memories</h1>
          <p className="hero-subtitle">Relive your favorite adventures</p>
        </div>
      </section>

      <section className="memories-section">
        <div className="container">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading your memories...</p>
            </div>
          ) : (
            <>
              <div className="memories-filter-bar">
                <div className="filter-tags">
                  {getAllTags().map(tag => (
                    <button 
                      key={tag} 
                      className={`filter-tag ${filter === tag ? 'active' : ''}`}
                      onClick={() => setFilter(tag)}
                    >
                      {tag === 'all' ? 'All Memories' : tag}
                    </button>
                  ))}
                </div>
                <button className="btn btn-primary add-memory-btn">Add New Memory</button>
              </div>

              {filteredMemories.length > 0 ? (
                <div className="memories-grid">
                  {filteredMemories.map(memory => (
                    <div 
                      key={memory.id} 
                      className={`memory-card ${memory.featured ? 'featured' : ''}`}
                      onClick={() => openMemory(memory)}
                    >
                      <div className="memory-card-image">
                        <img src={memory.images[0]} alt={memory.title} />
                        {memory.featured && <div className="featured-badge">Featured</div>}
                      </div>
                      <div className="memory-card-content">
                        <h3 className="memory-title">{memory.title}</h3>
                        <div className="memory-location">{memory.location}</div>
                        <div className="memory-date">{formatDate(memory.date)}</div>
                        <div className="memory-tags">
                          {memory.tags.map(tag => (
                            <span key={tag} className="memory-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-memories">
                  <div className="no-memories-icon">📸</div>
                  <h2 className="no-memories-title">No memories found</h2>
                  <p className="no-memories-message">
                    No memories match your filter criteria. Try another filter or add new memories.
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setFilter('all')}
                  >
                    View All Memories
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {selectedMemory && (
        <div className="memory-modal">
          <div className="memory-modal-overlay" onClick={closeMemory}></div>
          <div className="memory-modal-content">
            <button className="memory-modal-close" onClick={closeMemory}>×</button>
            <div className="memory-modal-gallery">
              {selectedMemory.images.map((image, index) => (
                <div key={index} className="modal-gallery-item">
                  <img src={image} alt={`${selectedMemory.title} - ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="memory-modal-details">
              <h2 className="memory-modal-title">{selectedMemory.title}</h2>
              <div className="memory-modal-meta">
                <div className="memory-modal-location">{selectedMemory.location}</div>
                <div className="memory-modal-date">{formatDate(selectedMemory.date)}</div>
              </div>
              <p className="memory-modal-description">{selectedMemory.description}</p>
              <div className="memory-modal-tags">
                {selectedMemory.tags.map(tag => (
                  <span key={tag} className="memory-tag">{tag}</span>
                ))}
              </div>
              <div className="memory-modal-actions">
                <button className="btn btn-secondary">Edit</button>
                <button className="btn btn-accent">Share</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Memories;