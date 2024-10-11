const scriptURL = 'https://script.google.com/macros/s/AKfycbyoTSgEtRM_9A5GF__lZWpdlnZrK4F_iKjd7DuGraVBKC93afDn9uiMd7jPAMmLQ1DO/exec';
    const form = document.forms['waitlist-form'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show loading alert instantly after clicking submit
      Swal.fire({
        title: 'Submitting...',
        text: 'Please wait while we process your submission.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading(); // Show loading animation
        }
      });

      // Proceed with form submission
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Submitted!',
            text: 'Your waitlist submission has been received!',
            confirmButtonText: 'OK'
          });
          form.reset();     // Clear the form after successful submission
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'There was a problem with your submission.',
            confirmButtonText: 'OK'
          });
          console.error('Error!', error.message);
        });
    });