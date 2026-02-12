/* Form Validation and Handling */
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Simple validation loop
            const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            if (isValid) {
                // Determine form type
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;

                submitBtn.disabled = true;
                submitBtn.innerText = 'Sending...';

                // Simulate API call
                setTimeout(() => {
                    alert('Thank you! Your request has been submitted successfully. We will contact you shortly.');
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                }, 1500);
            }
        });

        // Clear error on input
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.classList.contains('is-invalid')) {
                    input.classList.remove('is-invalid');
                }
            });
        });
    });
});
