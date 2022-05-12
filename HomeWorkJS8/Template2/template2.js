//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header
// const getById = document.getElementById(`main_header`)
// getById.className = `march-2022`

// b) робить шириниу елементу ul 400px
// const getByTag = document.getElementsByTagName(`ul`)
// for (const item of getByTag){
//     item.style.width = `400px`
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// const getByClass = document.getElementsByClassName(`linkList`)
// for (const item of getByClass) {
//     item.style.width = `50%`
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let text = `Hello world`
// const getByClass = document.getElementsByClassName(`listElement2`)
// function foo(text) {
//     for (const item of getByClass){
//         item.innerText = text
//     }
// }
// foo(text)

// e) отримує всі елементи li та змінює ім колір фону на сірий
// const getByTag = document.getElementsByTagName(`li`)
// for (const byTagElement of getByTag) {
//     byTagElement.style.background = `grey`
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// const getByTag = document.getElementsByTagName(`a`)
// for (const item of getByTag){
//     item.className = `anchor`
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// const getByTag = document.getElementsByTagName(`a`)
// for (const item of getByTag){
//     if(item.innerText === `link3`) {
//         item.style.fontSize = `40px`
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const geByTag =document.getElementsByTagName(`a`)
// for (const item of geByTag){
//     item.className = `element_${item.innerText}`
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const text = prompt(`insert text`)
// const getByClass = document.getElementsByClassName(`sub-header`)
// for (const item of getByClass){
//     item.style.background = text
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// const text = prompt(`Enter text`);
// const getByClass = document.getElementsByClassName(`sub-header`)
// for (const item of getByClass) {
//     if (item.innerText === `content 2 segment`) {
//         item.style.color = text
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const text = prompt(`enter text`)
// const getByClass = document.getElementsByClassName(`content_1`)
// for (const item of getByClass){
//     item.innerHTML =text
// }

// l) отримати елементи p та змінити їм padding на 20px
// const getByTag = document.getElementsByTagName(`p`)
// for (const byTagElement of getByTag) {
//     byTagElement.style.padding = `20px`
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const getByClass = document.getElementsByClassName(`text2`)
// for (const byClass of getByClass) {
//     byClass.innerText = `march-2022`
// }