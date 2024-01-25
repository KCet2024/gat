function submitForm() {
    // Get form data
    const usn = document.getElementById('usn').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const events = document.getElementById('events').value;
    const paymentProof = document.getElementById('paymentProof').value; // Note: This is the file input, not the value
    const paymentStatus = document.querySelector('input[name="paymentStatus"]:checked');
    // Build the Google Forms URL with your form ID
    const googleFormsURL = 'https://docs.google.com/forms/d/e/1FAIpQLSczgokGDxQQb68CNboc6QFL9aQlSFAO3MKWat4njf5PtYAENQ/viewform?usp=sf_link';

    // Append form data to the Google Forms URL
    const formData = `$entry.819772888=&entry.USN_FIELD&entry.NAME_FIELD&entry.EMAIL_FIELD=$entry.160863026&entry.PHONE_FIELD=$entry.1781672221&entry.EVENTS_FIELD=$entry.1059076570&entry.PAYMENT_PROOF_FIELD=$entry.319646745&entry.PAYMENT_STATUS_FIELD=$entry.58595737`;

    // Display Bootstrap alert before redirecting
    showAlert('Submitting form...', 'info');

    // Redirect user to the Google Form after a delay
    setTimeout(() => {
        window.location.href = googleFormsURL + formData;
    }, 2000); // You can adjust the delay as needed
}

function showAlert(message, type) {
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    alertMessage.className = `alert alert-${type} mt-3`;
    alertMessage.classList.remove('d-none');
}
