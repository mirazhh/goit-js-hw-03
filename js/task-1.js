
let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
  
};
 
//Write code under this line  
  user.mood = 'happy';
  user['full time'] = true;
  user.hobby = 'skydiving';
  user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
   message += `${key} : ` + `${user[key]}\n`;
};
// Write code under this line
 
 
console.log(message); 
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */

/*
Ожидается что message содержит все cвойcтва и значения
Ожидается наличие значения 'happy' у свойства 'mood' объекта user
Ожидается наличие значения 'skydiving' у свойства 'hobby' объекта user
Ожидается наличие значения 'Mango' у свойства 'name' объекта user
Ожидается наличие значения 20 у свойства 'age' объекта user
Ожидается наличие значения true у свойства 'full time' объекта user
Ожидается наличие значения false у свойства 'premium' объекта user
Массив keys совпадает со всеми свойствами объекта
Ожидается использование метода 'Object.keys'
Ожидается использование метода 'for of'
Ожидается использование спецсимвола переноса строки '\n'
*/