// Все стірлочними!!!!!!!!!


//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let average = (arr) => {
//     let sum = 0
//     for (let item of arr) {
//         sum += item
//     }
//     let avg = sum / arr.length
//     return avg
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(average(arr));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
// let minimum = (...res ) =>  {
//     let min = res[0]
//     let max = res[0]
//     for (let item of res) {
//         if (min > item) {
//             min= item
//         }
//         if (max < item) {
//             max = item
//         }
//     }
//     console.log(`max = ` + max);
//     return `min = ` + min
// }
// console.log(minimum(1, 2, 3, 4));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let genArr = (length) => {
//     let arr = []
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     return arr
// }
// console.log(genArr(10))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// let randArr = (lenght, limit) => {
//     let arr = []
//     for (let i = 0; i < lenght; i++) {
//         arr[i] = Math.round(Math.random()*limit)
//     }
//     console.log(arr)
// }
// randArr(100, 10)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1,2,3,4,5]
// let reverseArr = (arr) => {
//     let tempArr = []
//     for( let i= 0; i < arr.length; i++ ){
//         tempArr[i] = arr[arr.length-1-i]
//     }
//     return tempArr
// }
// console.log(reverseArr(array))

//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let square = (a,b) => a*b
//
// console.log(square(10,20))


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let square = (r) => 3.14*Math.pow(r,2)
// console.log(square(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let square = (h,r) => 2*3.14*r*r+2*3.14*r*h
// console.log(square(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let showArr = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// let array =[3,46,7]
// showArr(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraph = (text) => document.write(`<p>${text}</p>`)
// paragraph(`sgsgsgsdg`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = (text) => {
//     document.write(`<div><ul>`)
//         for (let i=0; i<3; i++) {
//             document.write(`<li>${text}</li>`)
//         }
//     document.write(`</ul></div>`)
// }
// list(`asfdg,`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (text, amount) => {
//     document.write(`<div><ul>`)
//     for (let i = 0; i < amount; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul></div>`)
// }
// list(`tprot`,6)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list = (arr) => {
//     document.write(`<div><ul>`)
//     for (let item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul></div>`)
// }
//
// list([`k`,5,true,`rtyr`])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let list = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let temp = Object.values(arr[i])
//         document.write(`<div>${temp}</div>`)
//     }
// }
// let array = [
//     {id:1, name: `Mikola`, age:29},
//     {id:2, name: `Galya`, age: 20}
// ]
// list(array)
// console.log(array[0].age)

// - створити функцію яка повертає найменьше число з масиву
// let minimum = (arr) => {
//     let min = arr[0]
//     for (let i = 0; i<arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i]
//         }
//     }
//     return min
// }
//
// console.log(minimum([1, 6, 9, -4]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let total = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum +=arr[i]
//     }
//     return sum
// }
// console.log(total([1, 2, 3, 10, -2, -3]));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let array = [
//     {id:1, name: `Mikola`, age:29},
//     {id:2, name: `Galya`, age: 20}
// ]
//
// let change = (arr) => {
//     let temp = arr[0]
//     arr[0] = arr[1]
//     arr[1] = temp
// }
// change(array)
// console.log(array);


// `Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minimum = (a,b,c) => {
//     if (a<b && a<c) {
//         console.log(a)
//     } else if (b<a && b<c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
//
// minimum(-2,-5,1)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maximum = (a,b,c) => {
//     if (a>b && a>c) {
//         console.log(a)
//     } else if (b>a && b>c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
//
// maximum(55,58,9)


// - створити функцію яка повертає найбільше число з масиву
// let maximum = (arr) => {
//     let max = arr[0]
//     for (let item of arr) {
//         if (item> max) {
//             max = item
//         }
//     }
//     return max
// }
//
// console.log(maximum([1,5,6,7,9,0,-4]))

// - створити функцію яка повертає найменьше число з масиву
// let minimum = (arr) => {
//     let min = arr[0]
//     for (let item of arr) {
//         if (min > item) {
//             min = item
//         }
//     }
//     return min
// }
//
// console.log(minimum([1,5,6,7,9,0,-4]))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let suma = (arr) =>{
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum +=arr[i]
//     }
//     return sum
// }
//
// console.log(suma([1,2,10]))


// - Дано натуральное число n. Выведите все числа от 1 до n.
// let row = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }
// row(7)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.
// let orderedRow = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++)
//         {
//             console.log(i)
//         }
//     } else if (b < a) {
//         for (let i = b; i <= a; i++) {
//             console.log(i)
//         }
//     } else {
//         console.log(`a and b are equal`)
//     }
//
// }
//
// orderedRow(1,6)
// orderedRow(15,10)
// orderedRow(5,5)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let change = (arr, i) => {
//     if (i >= arr.length || i + 1 >= arr.length) {
//         console.log(`WTF`)
//         return arr
//     }
//     let temp = arr[i]
//     arr[i] = arr[i + 1]
//     arr[i + 1] = temp
//     return arr
// }
//
// console.log(change([9, 8, 0, 4], 0));
// console.log(change([9, 8, 0, 4], 1));
// console.log(change([9, 8, 0, 4], 2));
// console.log(change([9, 8, 0, 4], 3));


//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]`
// let change =(arr) => {
//     let i =0
//     let count =0
//     let temp =0
//     while (i < arr.length-count) {
//         if (arr[i] === 0 ) {
//             temp = arr[i]
//             for (let j = i; j < arr.length - 1; j++) {
//                 arr[j] = arr[j + 1]
//             }
//             arr[arr.length - 1] = temp
//             count +=1
//             i = 0
//         } else {
//             i++
//         }
//     }
//     return arr
// }
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]`
// console.log(change([0, 0, 1, 0]))
// console.log(change([0,1,2,3,4]))
// console.log(change([1,0,6,0,3]))