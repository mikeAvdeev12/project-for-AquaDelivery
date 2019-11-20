let form = document.getElementById('inn-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  let inn = document.getElementById('inn-number').value;
  
  const response = await fetch('/parser', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify( {inn} ),
  });
  
  if (response.status === 200) {
    const result = await response.json();
    console.log(result)
    console.log(result.items[0].ЮЛ.НаимСокрЮЛ)
  } else {
    console.log(`ERROR: ${response.status}`);
  }

  // const response = await fetch('https://api-fns.ru/api/egr?req=9715321680&key=195f234896a9df8091803dbaf94fb4a460fb5b8e');

  // let data = await response.json()
  // console.log(data)
});