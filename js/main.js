/* Main JavaScript */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Loader
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800); // Simulate loading time
    }

    console.log('Lumina Skin Clinic Website Initialized');
});
