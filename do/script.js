// Initialize map
function initMap() {
    const map = L.map('campaign-map').setView([23.5937, 78.9629], 5);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add markers for each city
    const cities = [
        { name: 'Delhi', latlng: [28.6139, 77.2090] },
        { name: 'Lucknow', latlng: [26.8467, 80.9462] },
        { name: 'Bihar', latlng: [25.0961, 85.3131] },
        { name: 'Mumbai', latlng: [19.0760, 72.8777] }
    ];
    
    cities.forEach(city => {
        L.marker(city.latlng)
            .addTo(map)
            .bindPopup(`<div class="city-marker"><i class="fas fa-map-marker-alt"></i> <strong>${city.name}</strong></div>`)
            .openPopup();
    });
}

// DOMContentLoaded events
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            eventCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-city') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Volunteer form submission
    const volunteerForm = document.getElementById('volunteer-form');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest in volunteering! We will contact you soon.');
            volunteerForm.reset();
        });
    }
});
