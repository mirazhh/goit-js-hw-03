const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
    let someCount = 0;
      let somePeople = "";
      for (let chosenEmployee in employees){
        if(employees[chosenEmployee] > someCount){
          someCount = employees[chosenEmployee];
          somePeople = chosenEmployee;
        };
      };
      return somePeople;
  };
  
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
  console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  console.log(findBestEmployee(sellers)); 
  // 'lux'  

  /*
Ожидается что findBestEmployee является функцией
Ожидается что функция вернет пустую строку для пустого объекта
Ожидается что функция вернет 'a' для объекта {a:1}
Ожидается что функция вернет 'lorence' для объекта 'developers'
Ожидается что функция вернет 'mango' для объекта 'supports'
Ожидается что функция вернет 'lux' для объекта 'sellers'
*/