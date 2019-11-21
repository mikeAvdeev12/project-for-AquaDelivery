const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', function (req, res, next) {
  res.render('parser');
});

router.post('/', async function (req, res, next) {
  
  // Получаем ИНН клиента из браузера (aplication.js)
  let inn = req.body.inn


  //Запрос данных из API ФНС
  // const response = await fetch(`https://api-fns.ru/api/egr?req=${inn}&key=bfd4b6072c05c3201dde967373468a767ddab9fd`);

  // Проверка через ИНН 9715321680
  // const response = await fetch('https://api-fns.ru/api/egr?req=9715321680&key=195f234896a9df8091803dbaf94fb4a460fb5b8e');

  //Получаем ответ из API ФНС
  // let data = await response.json()
  // let comname = data.items[0].ЮЛ.НаимСокрЮЛ

  // Тестовый файл, чтобы не юзать ключ API ФНС
  const data = {items:[
    {ЮЛ:
    {ИНН:"9715321680",КПП:"771501001",ОГРН:"1187746790296",ДатаРег:"2018-09-03",ОКОПФ:"Общества с ограниченной ответственностью",Статус:"Действующее",СпОбрЮЛ:"Создание юридического лица"}}]}

  //Отправляем ответ в браузер
  res.send(data);

});


module.exports = router;