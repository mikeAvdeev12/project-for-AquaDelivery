document.querySelector('#agreeButton').addEventListener('click', async event =>{
const message = 'OK'
  const response = await fetch('/contract/agreement', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  console.log(response);

  if (response.status === 200) {
    const result = await response.text();
    console.log(result);
    window.location = 'plans'
  } else {
    console.log(`ERROR: ${response.status}`);
  }
});