// for (let i = 0; i < 10; i++) {
//     document.writeln(`<div>Lorem ipsum dolor sit amet.</div>`)
// }
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem ipsum dolor sit amet. ${i}</div>`)
//
// }
// let i= 0
// while (i <20){
//     i++
//     document.write(`<div><h1>Lorem ipsum dolor sit amet.</h1></div>`)
// }

// let i = 0
// while (i < 10) {
//     i++
//     document.write(`<div><H1>Lorem ipsum dolor sit amet. ${i}</H1></div>`)
//     }

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`)
// for (let listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`)
//
// }
// document.write(`</ul>`)

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let i=0; i<products.length; i++) {
//     document.write(`<div class = "product-card">`)
//     document.write(`<h3 class= "product-title">${products[i].title}. Price - ${products[i].price} </h3>`)
//     document.write(`<img src = "${products[i].image}" alt = "" class = "product-image"`)
//     document.write(`</div>`)
// }

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// document.write(`Users with status true`)
// for (let i = 0; i < users.length; i++) {
//     if (users[i].status) {
//         document.write(`<div>
//         ${users[i].name} ${users[i].age} ${users[i].status}
//     </div>`)
//
//     }
// }
// document.write(`Users with status false`)
// for (let i = 0; i < users.length; i++) {
//     if(!users[i].status){
//         document.write(`<div>
//             ${users[i].name} ${users[i].age} ${users[i].status}
//         </div>`)
//     }
// }
//
// document.write(`Users older than 30 years`)
// for (let i = 0; i < users.length; i++) {
//     if(users[i].age > 30) {
//         document.write(`<div>
//             ${users[i].name} ${users[i].age} ${users[i].status}
//         </div>`)
//     }
//
// }
// let array = []
// for (let i = 0; i < 15; i++) {
//     array[i] = i+i*3
// }
// console.log(array)
// array= []
// debugger
// for (let i = 0; i < 5; i=i+3) {
//     array[i] = `asfdfsf ${i}`
//     array[i+1] = i
//     array[i+2] = true
// }
// console.log(array)

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

// let i = 0
// while (i < array.length){
//     i++
//     console.log(array[i])
// }
// for (let i= 0; i < array.length; i++) {
//     console.log(array[i])
// }

// let i = 0
// while (i < array.length) {
//     i++
//     if ((i % 2) != 0) {
//         console.log(array[i] + ' index = ' + i)
//     }
// }
//
// for (let i =0; i < array.length; i++) {
//     if (i % 2 != 0) {
//         console.log(array[i] + ' index = ' + i)
//     }
// }

// let i = 0
// while ( i < array.length) {
//     console.log(`array length = ${array.length} index = ${i}`)
//
//     if (i % 2 === 0 ) {
//         console.log(array[i] + ' index = ' + i)
//     }
//     i++
// }

// for (let i = 0; i < array.length; i++) {
//     if(i % 2 !==0) {
//         console.log(array[i] + ' index = ' + i)
//     }
//
// }
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0 ){
//         console.log(array[i] + ' index = ' + i)
//     }
//
// }

// let i = array.length - 1
// while (i > 0) {
//     console.log(array[i])
//     i--
// }
//
// for (let i = array.length-1; i > 0; i--) {
//     console.log(array[i])
//
// }

// let array = []
// for (let i = 0; i < 10; i = i + 3) {
//     array[i] = `asfdfsf ${i}`
//     if (i < 9) {
//         array[i + 1] = i
//         array[i + 2] = true
//     }
//
// }
// console.log(array)
//
// for (let i = 0; i < array.length; i++) {
//     if(typeof array[i] == "boolean") {
//         console.log(` ${array[i]} ${i}`)
//     }
// }
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == "string") {
//         console.log(` ${array[i]} ${i}`)
//     }
//
// }
//
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == "number") {
//         console.log(` ${array[i]} ${i}`)
//     }
//
// }