// Задание 6

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

// let arr = [4, 4, 4, 4, 4, 4, 4, 4, 4];
// let result = arr.forEach(function (elements) {
//   if (arr.element === arr[0]) {
//     return true;
//   } else return false;
// });
// console.log(result);

// let arr = [4, 4, 4, 4, 4, 4, 4, 4, 4];
// let result = arr.forEach(function (elements) {
//   if (arr[0] === arr.elements) {
//     console.log(true);
//   } else console.log(false);
// });
// console.log(result)

// let arr = [4, 4, 4, 4, 4, 4, 4, 4, 4];
// for (let i = 0; i < arr.length; i++) {
//   arr.forEach(function (elements) {
//     if (arr[0] === arr.element) {
//       console.log(true);
//     } else console.log(false);
//   });
// }

let arr = [4, 4, 4, 4, 4, 0, 4, 4, 4];
for (let i = 0; i < arr.length; i++) {
  arr.forEach(function (elements) {
    if (arr[i] === arr[0]) {
      console.log(true);
    } else console.log(false);
  });
}
