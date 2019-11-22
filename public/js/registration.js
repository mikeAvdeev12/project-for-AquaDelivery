document.querySelector('#registrationForm').addEventListener('submit', async event => {
  event.preventDefault();
  const email = document.querySelector('#emailInput').value
  const password = document.querySelector('#passwordInput').value

  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (response.status === 200) {
    const result = await response.json();
    window.location = '/companydetails'
  } else {
    console.log(`ERROR: ${response.status}`);
  }
})
