document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  
  if (username === '' || email === '') {
    alert('All fields are required!');
    return;
  }
  
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Invalid email address!');
    return;
  }

  alert('Form submitted successfully!');
});
