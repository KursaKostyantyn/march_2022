// function square(a,b) {
//     let s
//     if (typeof a === "number" && typeof b ==="number") {
//         s = a*b
//     } else {
//         s =`Oops`
//     }
//     return s
// }
//
// document.write(`<div>${square(10,20)}</div>`)
// document.write(`<div>${square(`q`, 10)}</div>`)
// document.write(`<div>${square(`10`, 40)}</div>`)

// function circleRadius (r) {
//     let radius
//     let pi = 3.14
//     radius = pi * Math.pow(r, 2)
//     return radius
// }
// let r= 10
// console.log(`radius = ${circleRadius(r)}`)

// function cylinderSquare (height, radius) {
//     let pi = 3.14
//     let square = 2 * pi * Math.pow(r,2) + 2 * pi * radius * height
//     return square
// }
// let h = 10
// let r = 20
// document.write(`<div>${cylinderSquare(h,r)}</div>`)

// let array = [10, `qwe`, true, 60]
//
// function showArray (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(arr[i] + ` `)
//     }
// }
// showArray(array)

// function paragraph (text) {
//     document.write(`<p>${text}</p>`)
// }
//
// let text = `fdgkjflgjdfpo sdfjdjfspodkj sdfgjksdfgjk`
// paragraph(text)

// function list (text) {
//     document.write(`<div>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(
//         `<ul>
//             <li>${text}</li>
//         </ul>`)
//
//     }
//      document.write(`</div>`)
// }
//
// list(`text1`)

// function list(text, amount) {
//     if (typeof amount === "number") {
//         document.write(
//         `<div>
//             <ul>`)
//               for (let i = 0; i < amount; i++){
//                   document.write(`<li>${text}</li>`)
//               }
//         document.write(`
//             </ul>
//         </div>`)
//     } else {
//         document.write(`<div>Oops</div>`)
//     }
// }
//
// list (`text`, `t`)

// function list (arr) {
//     document.write(`<div>`)
//         document.write(`<ul>`)
//             for (let i= 0; i< arr.length; i++) {
//                 document.write(`<li>${arr[i]}</li>`)
//             }
//         document.write(`</ul>`)
//     document.write(`</div>`)
// }
// let arr = [1,2,3,4,99,66,75]
// list(arr)
//
// arr = [`a`, `b`, `ht`, `klm`]
// list(arr)
//
// arr = [true, false, false, true]
// list(arr)

// let arr = [
//     {id: 1, name: `Kolya`, age : 31},
//     {id: 2, name: `Vasya`, age : 27},
//     {id: 3, name: `Petya`, age : 40}
// ]
//
// function listOfObjects (arr) {
//     for (let i = 0; i< arr.length; i++) {
//         document.write(`<div>`)
//             document.write(`id: ${arr[i].id}, name: ${arr[i].name}, age: ${arr[i].age} `)
//         document.write('</div>')
//     }
// }
//
// listOfObjects(arr)

// function lowerNumber(arr) {
//     let min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return min
// }
//
// let arr = [0, -2, 3, 5, -8, -6, 10]
// document.write(lowerNumber(arr))

// let arr = [0, -2, 3, 5, 8, -6, -10]
// function summary (arr) {
//     let sum =0
//     for (let arrElement of arr) {
//         sum = sum + arrElement
//     }
//     return sum
// }
// document.write(summary(arr))

// function minimum (a, b, c) {
//     let min = a
//     if (b < min) {
//         min = b
//     }
//     if (c < min ) {
//         min = c
//     }
//     return min
// }
//
// document.write(minimum(1,2,-3))


// function maximum(a, b, c) {
//     let max = a
//     if (b > max) {
//         max = b
//     }
//     if (c > max) {
//         max = c
//     }
//     return max
// }
//
// document.write(maximum(2,-9,4))

// function maximum (arr) {
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }
//
// let arr = [1,2,3,4,99,66,75]
//
// document.write(maximum(arr))

// let arr = [0, -2, 3, 5, -8, -6, 10]
// function average(arr) {
//     let avg
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//
//     }
//     avg = sum / arr.length
//     return avg
// }
//
// document.write(average(arr))

// function maxAndMin () {
//     let max =arguments[0]
//     let min =arguments[0]
//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] === "number") {
//             if (max < arguments[i]) {
//                 max = arguments[i]
//             }
//             if (min > arguments[i]) {
//                 min = arguments[i]
//             }
//         }
//
//     }
//     document.write(`max = ${max}`)
//     return min
// }
//
// document.write(`min = ${maxAndMin(1,6,7,8,)}`)

// function randomizerArr (length){
//     let arr = []
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random()*100)
//     }
//     document.write(arr)
// }
//
// randomizerArr(10)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomizerArr(lenght, limit) {
//     let arr = []
//     for (let i = 0; i < lenght; i++) {
//         arr[i] = Math.round(Math.random() * limit)
//     }
//     return arr
// }
// console.log(randomizerArr(20, 100))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [5,4,3,2,1]
//
// function reverseArray (arr) {
//     let reverseArray = []
//     for (let i = 0; i < arr.length; i++) {
//         reverseArray[arr.length-1-i] = arr[i]
//     }
//     return reverseArray
// }
//
// console.log(reverseArray(array))


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function summary() {
//     if (arguments.length === 1) {
//         console.log(arguments[0])
//     } else if (arguments.length ===2) {
//         console.log(arguments[0] + arguments[1])
//     }
//
// }
//
// summary(`2`,`4`)


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function summaryArray(arr1, arr2) {
//     let arr3 = []
//     if (arr1.length == arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             arr3[i] = arr1[i] + arr2[i]
//         }
//     } else {
//         console.log(` The length is different `)
//     }
//     return arr3
// }
// arr1 = [1,2,3]
// arr2 = [4,5,6]
// console.log(summaryArray(arr1,arr2))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// ===> [ name, age, model ]

// function keysArr (arr) {
//     let keys = []
//     for (let item of arr) {
//         let temporary = Object.keys(item)
//         for (let i =0; i< temporary.length; i++){
//             keys[keys.length] = temporary[i]
//         }
//     }
//     return keys
// }
// console.log(keysArr(array))

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}]

// ===> [ Dima, 13, Camry ]

// function valuesOfArray(arr) {
//     let values = []
//     for (let item of arr) {
//         let temporary = Object.values(item)
//         for (let i = 0; i < temporary.length; i++) {
//             values[values.length] = temporary[i]
//         }
//     }
//     return values
// }
//
// console.log(valuesOfArray(array))