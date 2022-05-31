// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".
// const htmlDivElement = document.createElement(`div`);
// htmlDivElement.setAttribute(`id`,`text`);
// htmlDivElement.innerText = `Hello`;
//
//
// const htmlButtonElement = document.createElement(`button`);
// htmlButtonElement.innerText =`push me`;
//
// document.body.append(htmlDivElement,htmlButtonElement);
//
// htmlButtonElement.onclick = function (){
//     htmlDivElement.style.display = `none`
// }

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const input = document.getElementsByName(`age`)[0];
// const button = document.getElementsByName(`send`)[0];
// button.onclick = function () {
//     console.log(input.value);
//     let age = input.value;
//     if (age < 18) {
//         document.writeln(`you are so young`);
//     }
// }
// button.addEventListener(`click`, function () {
//     if (input.value < 18) {
//         alert(`you are so young`)
//     } else if (input.value === ``) {
//         alert(`error`);
//     } else {
//         alert(`everything is ok`);
//     }
//     input.value = ``;
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const button = document.getElementById(`but`);
// button.addEventListener(`click`, function () {
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
// })


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// const button = document.getElementById(`button`);
//
// button.addEventListener(`click`, function (e){
//     e.preventDefault();
//     const rows = document.forms.form.rows.value;
//     const columns = document.forms.form.columns.value;
//     const filling = document.forms.form.filling.value;
//     console.log(`rows = ${rows}`);
//     console.log(`columns = ${columns}`);
//     console.log(`filling = ${filling}`);
//     let table = document.createElement(`table`);
//     for (let i = 0; i<rows; i++){
//         let row = document.createElement(`tr`);
//         for (let j =0; j< columns; j++){
//             let column = document.createElement(`td`);
//             column.innerText = filling;
//             column.style.border = `2px solid black`;
//             row.append(column);
//         }
//         table.append(row);
//     }
//     document.body.append(table);
//
// })
