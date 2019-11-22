document.querySelector('#planForm').addEventListener('submit', async event => {
  const plan = document.getElementById("plan1").checked;
  console.log(123);
  if (plan === true) {
    chosenPlan = 'plan 1'
  }
  else { chosenPlan = 'plan 2' }
console.log(plan);

  const response = await fetch('/plans', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ chosenPlan }),
  });

  console.log(response);

  if (response.status === 200) {
    const result = await response.text();
    console.log(result);
    window.location = 'upload'
  } else {
    console.log(`ERROR: ${response.status}`);
  }
});