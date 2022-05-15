// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world'
// let b= 'lorem ipsum'
// let c = 'javascript is cool'
// console.log(a.length)
// console.log(b.length);
// console.log(c.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world'
// let b= 'lorem ipsum'
// let c = 'javascript is cool'
//
// console.log(a.toUpperCase())
// console.log(b.toUpperCase())
// console.log(c.toUpperCase())
// console.log(a)


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let a = 'HELLO WORLD'
// let b = 'LOREM IPSUM'
// let c = 'JAVASCRIPT IS COOL'
//
// console.log(a.toLowerCase())
// console.log(b.toLowerCase())
// console.log(c.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.replaceAll(` `, ``))
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let strArr = (str) => str.split(` `)
// console.log(strArr(str))
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let array = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(array.map((value)=> value+``))
//
//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3]
// let sort = (arr, direction) => {
//     if (direction === `ascending`) {
//         console.log(nums.sort((a,b,) => a-b))
//     } else if (direction === `descending`) {
//         console.log(nums.sort((a,b) => b-a))
//     }
// }
// sort(nums,`ascending`)
// sort(nums, `descending`)
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let coursesSortDuration = coursesAndDurationArray.sort((a,b) =>b.monthDuration-a.monthDuration)
// console.log(coursesAndDurationArray)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let reduce = coursesAndDurationArray.reduce((previousValue, currentValue) => {
//     if (currentValue.monthDuration > 5) {
//         previousValue.push(currentValue)
//     }
//     return previousValue
// }, []);
// console.log(reduce)
//
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
// let cardValue = [`6`, `7`, `8`, `9`, `10`, 'ace', 'jack', 'queen', 'king', 'joker'];
// let cardColor = ['black', 'red'];
// let cardDesk = [];
// let card = {color: ``, cardSuit: ``, value: ``};
// // debugger
// for (let j = 0; j < 2; j++) {
//     for (let k = 0; k < cardValue.length; k++) {
//         let card = {color: ``, cardSuit: ``, value: ``};
//         card.color = cardColor[0]
//         card.cardSuit = cardSuit[j]
//         card.value = cardValue[k]
//         cardDesk.push(card)
//     }
// }
//
// for (let j = 2; j < cardSuit.length; j++) {
//     for (let k = 0; k < cardValue.length; k++) {
//         let card = {color: ``, cardSuit: ``, value: ``};
//         card.color = cardColor[1]
//         card.cardSuit = cardSuit[j]
//         card.value = cardValue[k]
//         cardDesk.push(card)
//     }
// }
// console.log(cardDesk)
// console.log(cardDesk.find(value => value.value === `ace` && value.cardSuit === `spade`));
// let filter = cardDesk.filter(value => value.value === `6` )
// console.log(filter)
// console.log(cardDesk.filter(value => value.color === `red`));
// console.log(cardDesk.filter(value => value.cardSuit === `diamond`));
// console.log(cardDesk.filter(value => value.cardSuit === `clubs` && value.value > `9`));
// console.log(`10` > `9`)
// console.log(cardDesk)

// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// // debugger
// let str =`some sentence`;
// function cutString(str,n) {
//     let arr =[]
//     for (let i =0; i<str.length;i=i+n){
//         arr.push(str.slice(i,i+n))
//     }
//     return arr
// }
//
// console.log(cutString(str, 3));
// console.log(cutString(`some`, 5));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// function delete_characters(str,n){
//     return str.slice(0,n)
// }
// document.writeln(delete_characters(str, 7)); // Каждый

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі
// символи рядка необхідно перевести у верхній регістр.
// debugger
// let str = "HTML JavaScript PHP";
//
// function insert_dash(str) {
//     return str.replaceAll(` `, `-`).toUpperCase();
// }
//
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str =`jon bon kon`
// function toUP (str) {
//     return str.slice(0,1).toUpperCase().concat(str.slice(1))
// }
//
// console.log(toUP(str));

// - Дано список імен.
// let n1 = 'Harry...Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// function normalize(str) {
//     str = str.replaceAll(`.`, ` `)
//         .replaceAll(`-`, ` `)
//         .replaceAll(`_`, ` `)
//     while (str.includes(`  `)) {
//         str = str.replaceAll(`  `, ` `)
//     }
//     return str
// }
//
// console.log(normalize(n1));
// console.log(normalize(n2));
// console.log(normalize(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
// function randomizer() {
//     let rand = Math.round(Math.random() * 100)
//     let arr = []
//     for (let i = 0; i < rand; i++) {
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     return arr
// }
// let arr = randomizer();
// arr.sort((a,b)=> a-b)
// console.log(arr);
// let filteredArr = arr.filter(value => value%2 ===0 && !value.toString().includes(`0`))
// console.log(filteredArr);


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = `Lorem ipsum dolor sit amet, consectetur adipisicing`
//
// function capitalize(str) {
//     let arr = str.split(` `);
//     let finishStr = ``;
//     for (let i = 0; i< arr.length;i++){
//         // finishStr = finishStr + ` ` + arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)
//         finishStr =`${finishStr} ${arr[i].slice(0,1).toUpperCase()}${arr[i].slice(1)}`
//     }
//     return finishStr
// }
//
// console.log(capitalize(str));

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// let validArray = [`someemail@gmail.com`,`someeMAIL@i.ua`,`some.email@gmail.com`]
// function cheker(str, array) {
//     if (!str.includes(`@`) || str.startsWith(`@`)) {
//         console.log(`something went wrong`);
//         return `exception1`
//     }
//     let arr = str.split(`@`)
//     if (arr.length > 2) {
//         console.log(`something went wrong`);
//         return `exception2`
//     }
//     let arr1 = arr[1].split(`.`)
//     if(arr1[0].length<2){
//         console.log(`something went wrong`);
//         return `exception3`
//     }
//     // debugger
//     let valid =false
//     for(let i=0; i<array.length;i++){
//
//         if(arr[0].toUpperCase() === array[i].split(`@`)[0].toUpperCase() &&
//             arr[1].toUpperCase() === array[i].split(`@`)[1].toUpperCase()){
//             valid =true
//             return valid
//         }
//     }
//     return valid
// }
//
// console.log(cheker(`someemail@gmail.com`,validArray));
// console.log(cheker(`someeMAIL@Gmail.com`,validArray));
// console.log(cheker(`someeMAIL@i.ua`,validArray));
// console.log(cheker(`some.email@gmail.com`,validArray));
// console.log(cheker(`some1.email@gmail.com`,validArray));

//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом,
// з регулярками будете потім бавитись.


// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray);
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// debugger
// function sortArr(arr) {
//     // let newArr =[]
//     for (let i = 0; i < arr.length; i++) {
//         let max = arr[i].modules.length;
//         for (let j = i; j < arr.length; j++) {
//             if (max < arr[j].modules.length) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//                 max = arr[i].modules.length
//
//             }
//         }
//     }
//     return arr
// }
//
// console.log(sortArr(coursesArray));


//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
//
// // document.writeln(count(str, symb)) // 5
// function count(str, stringsearch) {
//     let counter = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringsearch) {
//             counter++
//         }
//     }
//     return counter
// }
//
// document.writeln(count(str, symb))


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
//
// // document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// function cutString(str, n) {
//     let arr = str.split(` `);
//     let temp = ``;
//     if (n < arr.length) {
//         for (let i = 0; i < n; i++) {
//             temp = temp + ` ` + arr[i]
//         }
//     } else {
//         `n > length string`
//         temp = str
//     }
//
//     return temp;
// }
//
// document.writeln(cutString(str, 5))


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {name: `Star wars`, pages: `120`, authors: [`Lukas`, `igor`], genre: [`fiction`]},
    {name: `Star wars2`, pages: `100`, authors: [`Lukas`, `igor`, `Simon`], genre: [`science fiction`, `adventure`]},
    {
        name: `Star wars45`,
        pages: `90`,
        authors: [`Lukas`, `igor`, `Tor`, `Kolya`],
        genre: [`drama`, `adventure`, 'detective']
    },
    {name: `Star wars100`, pages: `190`, authors: [`Lukas`], genre: [`history`]}
]

// -знайти наібльшу книжку.
// function maxPages(arr) {
//     let max=arr[0];
//     for(let i=0; i<arr.length; i++){
//         if (+max.pages < +arr[i].pages){
//             max = arr[i];
//         }
//     }
//     return max
// }
// console.log(maxPages(books));

// - знайти книжку/ки з найбільшою кількістю жанрів
// function maxGenres(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(max.genre.length < arr[i].genre.length){
//             max = arr[i]
//         }
//     }
//     return max
// }
//
// console.log(books);
// console.log(maxGenres(books));

// - знайти книжку/ки з найдовшою назвою
// function longestName(arr) {
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (max.name.length < arr[i].name.length) {
//             max = arr[i]
//         }
//
//     }
//     return max
// }
//
// console.log(longestName(books));

// - знайти книжку/ки які писали 2 автори
// function numberAutjors (arr, n){
//     let max = []
//     for (let i=0; i<arr.length;i++){
//         if(arr[i].authors.length === n){
//             max.push(arr[i])
//         }
//     }
//     return max
// }
//
// console.log(numberAutjors(books, 2));

// - знайти книжку/ки які писав 1 автор
// function numberAutjors (arr, n){
//     let max = []
//     for (let i=0; i<arr.length;i++){
//         if(arr[i].authors.length === n){
//             max.push(arr[i])
//         }
//     }
//     return max
// }
//
// console.log(numberAutjors(books, 1));

// - вісортувати книжки по кількості сторінок по зростанню
// function sortByPages (arr){
//     for(let i=0; i<arr.length; i++){
//         for (let j=i; j<arr.length; j++){
//             let temp = arr[i];
//             if(+temp.pages > arr[j].pages){
//                 arr[i] =arr[j];
//                 arr[j] = temp;
//                 temp =arr[i]
//             }
//         }
//     }
// }
// sortByPages(books)
// console.log(books);
