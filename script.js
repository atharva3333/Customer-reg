const form = document.getElementById('registrationForm');
const ackScreen = document.getElementById('ackScreen');
const userIdSpan = document.getElementById('generatedUserId');

function validatePassword(pwd) {
  return /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && /[^A-Za-z0-9]/.test(pwd);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const mobileNumber = document.getElementById('mobileNumber').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!/^\d{10}$/.test(mobileNumber)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (!validatePassword(password)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, and one special character.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Generate random user ID
  const randomUserId = 'USER' + Math.floor(Math.random() * 1000000);
  userIdSpan.textContent = randomUserId;

  form.style.display = 'none';
  ackScreen.style.display = 'block';
});
