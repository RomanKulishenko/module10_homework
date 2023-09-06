// Задание 5

// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let animals = ["cow", "elephant", "dog", "cat", "bird"];

console.log(animals.length);

animals.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});
