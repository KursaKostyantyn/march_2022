// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// const laika =[`дідько`, 'біс', 'срака', 'руський'];
// const form = document.createElement(`form`);
// const input = document.createElement(`input`);
// const button = document.createElement(`button`);
// button.innerText = `Click`;
// button.addEventListener(`click`, function (ev){
//     ev.preventDefault();
//     for (const item of laika){
//         if (item === input.value){
//             alert(`Це слово існує`);
//         }
//     }
// })
// button.onclick =function (ev){
//     // ev.preventDefault();
//     for (const item of laika){
//         if (item === input.value){
//             alert(`Це слово існує`);
//         }
//     }
// }
//
// form.append(input,button);
// document.body.append(form);


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// const laika =[`дідько`, 'біс', 'срака', 'руський'];
// const form = document.createElement(`form`);
//
// const input = document.createElement(`input`);
// input.type = `text`;
//
// const button = document.createElement(`button`);
// button.innerText =`Click`;
//
// button.addEventListener(`click`, function (ev){
//     ev.preventDefault();
//     let string = input.value;
//     for (const item of laika){
//         if (string.includes(item)){
//             alert(`тут є лайка`);
//         }
//     }
//     input.value =``;
// })
//
//
// form.append(input,button);
// document.body.append(form);
//


// - Создайте меню, которое раскрывается/сворачивается при клике
// const menu = document.getElementsByClassName(`menu`)[0];
//
// const click = document.getElementsByClassName(`click`)[0];
//
// click.onclick = function(){
//     menu.classList.toggle(`hidden`);
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
const comments = [];
for (let i = 0; i < 10; i++) {
    const comment = {
        title: `lorem ${i}`,
        body: `lorem ipsum dolo sit ameti ${i + i * 7}`
    }
    comments.push(comment);
}
console.log(comments);

for (let i = 0; i < comments.length; i++) {
    const wrapDiv = document.createElement(`div`);
    wrapDiv.setAttribute(`class`, `classWrap ${i}`);


    const title = document.createElement(`div`);
    title.innerHTML = `<h2 class="classH2 ${i}">${comments[i].title}</h2>`;
    title.setAttribute(`class`, `class ${i}`);

    const body = document.createElement(`div`);
    body.innerHTML = `<p>${comments[0].body}</p>`
    body.setAttribute(`class`, `bodyClass ${i}`)

    const button = document.createElement(`button`);
    button.innerText = `Hide comment`;
    button.setAttribute(`id`, `${i}`)

    button.addEventListener(`click`, function () {
        body.classList.toggle(`hidden`);
    })
    wrapDiv.append(title, body, button);
    document.body.append(wrapDiv);
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const button = document.createElement(`button`);
// document.body.appendChild(button);
// button.innerText =`Hide me`;
// button.onclick = function (ev){
//     button.setAttribute(`hidden`, `true`);
// }


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.addEventListener(`click`, function (ev) {
//     const type = ev.target.localName;
//     const classes = ev.target.classList;
//     const ids = ev.target.id;
//     const wight = ev.target.clientWidth;
//     const height = ev.target.clientHeight;
//     console.log(`type: <${type}>`);
//     console.log(`classes: ${classes}`);
//     console.log(`ids: ${ids}`);
//     console.log(`wight = ${wight}`);
//     console.log(`height = ${height}`);
// })

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
document.addEventListener(`click`, function (ev) {
    const type = ev.target.localName;
    const classes = ev.target.classList;
    const ids = ev.target.id;
    const wight = ev.target.clientWidth;
    const height = ev.target.clientHeight;
    console.log(`type: <${type}>`);
    console.log(`classes: ${classes}`);
    console.log(`ids: ${ids}`);
    console.log(`wight = ${wight}`);
    console.log(`height = ${height}`);
})



//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан