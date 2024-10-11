const form = document.forms['contact-form'];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Send email via ElasticEmail API
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "iwokemmanuel49@gmail.com",
    Password: "376B9662A7F47EFF7EAC022D188DC0A58270",
    To: 'iwokemmanuel49@gmail.com',
    From: "iwokemmanuel49@gmail.com",
    Subject: "New Contact Form Submission",
    Body: 'message'
  }).then(
    message => {
      console.log(message); // Log the message response for debugging

      // Show success alert once the email is sent
      if (message === 'OK') {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been successfully sent.',
          confirmButtonText: 'OK'
        });
        form.reset(); // Clear the form after successful submission
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'There was a problem sending your message. Please try again.',
          confirmButtonText: 'OK'
        });
      }
    }
  ).catch(error => {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'There was a problem with the email service. Please try again later.',
      confirmButtonText: 'OK'
    });
    console.error('Error:', error);
  });
});
