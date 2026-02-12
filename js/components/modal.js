/* Modal Logic */
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('bookingModal');
    const openBtns = document.querySelectorAll('.open-modal-btn'); // Add this class to buttons you want to open the modal
    const closeBtn = document.querySelector('.close-modal');

    // Auto open modal after 10 seconds (demo purpose)
    setTimeout(() => {
        if (modal) {
            modal.classList.add('active');
        }
    }, 10000);

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});
