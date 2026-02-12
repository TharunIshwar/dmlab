/* Navbar Logic */
const initNavbar = () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    const header = document.querySelector('.header');

    if (mobileToggle && navbarNav) {
        mobileToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navbarNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navbarNav.classList.contains('active') &&
            !navbarNav.contains(e.target) &&
            !mobileToggle.contains(e.target)) {
            navbarNav.classList.remove('active');
            mobileToggle.querySelector('i').classList.remove('fa-times');
            mobileToggle.querySelector('i').classList.add('fa-bars');
        }
    });
};

document.addEventListener('DOMContentLoaded', initNavbar);
