let form = document.getElementById('inn-form');
let companyInfo = document.querySelector('.companyInfo');

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

    // Получаем ответ от сервера с вариантами организаций по введеному ИНН
    const result = await response.text();

    // Находим контейнер для импортированияя данных по компании
    let cont = document.querySelector(".companyInfo");

    // Импортируем данные
    cont.innerHTML = result

  } else {
    console.log(`ERROR: ${response.status}`);
  }
});