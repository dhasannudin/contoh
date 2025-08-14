document.addEventListener('DOMContentLoaded', function() {
    // Auto-fill current date
    const now = new Date();
    const currentDate = now.toISOString().slice(0, 10);
    document.getElementById('activityDate').value = currentDate;

    // Form submission handler
    document.getElementById('truckActivityForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const formData = new FormData(this);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        console.log('Form Data:', data);
        
        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
        
        // Here you would typically send the data to your server
        // Example: fetch('/submit-truck-activity', { method: 'POST', body: formData })
    });
});
