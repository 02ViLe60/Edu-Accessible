function sendMail() {
    // Get field values
    const subject = document.querySelector('input[name="subject"]').value;
    const senderEmail = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Build the email body
    const body = `${message}`;

    // Build mailto link
    const mailtoLink = `mailto:eduaccessible@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default email client
    window.location.href = mailtoLink;

    //TODO: Link all the buttons to product pages and do final checks.
}


