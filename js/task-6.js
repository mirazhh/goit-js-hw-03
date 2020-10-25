function calculateTotalPrice (array, prop) {
    'use strict';
    // Write code under this line
   let totalCost = 0;
     for (const arrElement of array){
      let values = Object.values(arrElement);
          if (values[0] === prop) {
          totalCost += values[1] * values[2];
         };
      };
              return totalCost;
   }
  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 }
  ]; 
  
  console.log(calculateTotalPrice(products, 'Радар'));  
  // 9080
  
  console.log(calculateTotalPrice(products, 'Сканер')); 
  // 10200
  
  console.log(calculateTotalPrice(products, 'Захват'));
  // 2400
  
  console.log(calculateTotalPrice(products, 'Дроид')); 
  // 2800

/*
Код должен содержать функцию calculateTotalPrice
Ожидается что при вызове calculateTotalPrice([]) функция вернет 0
Ожидается что функция вернет 9080 для объекта products и значения 
'Радар'
Ожидается что функция вернет 10200 для объекта products и значения 
'Сканер'
Ожидается что функция вернет 2400 для объекта products и значения 
'Захват'
Ожидается что функция вернет 2800 для объекта products и значения 
'Дроид'
*/