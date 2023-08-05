
emailjs.init(API_EMAIL);
const sendEmail = (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const message = document.getElementById('textarea').value
  
  emailjs.send(SERVICE_ID, TEMPLATE_ID,{
    from_name: email,
    message: message,
    }).then(function() {
      alert('Your email has been sent!');
      document.querySelector('.form-submit-btn').textContent = 'Send';
    }, function() {
      alert('Sorry! Your email has not been sent!');
      document.querySelector('.form-submit-btn').textContent = 'Send';
   });
  
  document.querySelector('.form-submit-btn').textContent = 'Sending...';
};

function resetForm() {
  document.getElementById('email').value = '';
  document.getElementById('textarea').value = '';
}


// emailjs.on('sent', showSuccessMessage);
document.addEventListener('DOMContentLoaded', resetForm);
document.querySelector('.form-submit-btn').addEventListener('click', sendEmail);