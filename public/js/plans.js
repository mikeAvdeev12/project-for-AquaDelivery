document.querySelector('#planForm').addEventListener('submit', async event => {
  const plan = document.getElementById("plan1").checked;
  if (plan === true) {
    chosenPlan = 'plan 1'
  }
  else { chosenPlan = 'plan 2' }

  const response = await fetch('/plans', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ chosenPlan }),
  });
  window.location = 'upload'

  if (response.status === 200) {
    const result = await response.text();
  } else {
    console.log(`ERROR: ${response.status}`);
  }
});