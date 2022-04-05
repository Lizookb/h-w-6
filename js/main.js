// 1
// Написать функцию copy(target, origin), которая копирует свойства из объекта origin в объект target и возвращает объект со всеми свойствами.
//  В данном задании используйте for ... in для работы со свойствами объектов.
let obj = {
  a: 1,
  b: 2
}
function copy(origin) {
  let target = {}
  for (key in origin) {
    target[key] = origin[key]
  }
  return target
}
// console.log(copy(obj))

// 2
// Напишите функцию, принимающую и сравнивающую два объекта. 
// Если объекты содержат одинаковые ключи и значения, то функция возвращает true, если нет - false.
//  Функция должна учитывать, что количество свойств в двух объектах может отличаться.

let obj1 = {
  a: 1,
  b: 2
}
let obj2 = {
  a: 1,
  b: 2
}

function sumOfObj(obj1, obj2) {

  let obj1Key = Object.keys(obj1).sort()
  let obj2Key = Object.keys(obj2).sort()

  if (obj1Key.length != obj2Key.length) {
    return false
  }
  for (let i = 0; i < obj2Key.length; i++) {
    if (obj1Key[i] != obj2Key[i]) {
      return false
    }
  }
  for (let i = 0; i < obj2Key.length; i++) {
    if (obj1[obj1Key[i]] != obj2[obj2Key[i]]) {
      return false
    }
  }
  return true
}

// console.log(sumOfObj(obj1, obj2))
// sumOfObj(obj1, obj2)


// 3 Написать функцию, которая принимает строку и возвращает данные о том, сколько раз встречается каждая буква.
// Например, если передали строку “aaabbc”, то функция должна сообщить, что буква “a” встретилась 3 раза, буква “b” встретилась 2 раза, а буква “c” - 1 раз. 
// Функция не должна использовать console.log, а должна вернуть объект с данными.

let str = 'a,a,a,b,b,c'
function count(array) {
  let objKey1 = {}
  array.forEach((item) => {
    objKey1[item] = (objKey1[item] || 0) + 1
  })
  return objKey1
}
// console.log(count(str.split(',')))