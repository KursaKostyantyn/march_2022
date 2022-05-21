// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// const adresses = [];
// for (const user of users){
//     adresses.push(user.address);
// }
// console.log(adresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. 
// Всі данні в одному блоці.
// function checking(check) {
//     if (typeof check === `object` && check !== null) {
//         return true;
//     }
//     return false;
// }
//
// function deeper(deep,) {
//     let string = ``;
//     for (const userKey in deep) {
//         if (checking(deep[userKey])) {
//             let keyArr = Object.keys(deep[userKey]);
//             for (const key of keyArr) {
//                 if (checking(key)) {
//                     deeper(key);
//                 } else {
//                     string = string + key + `: ` + deep[userKey][key] + ` `;
//                 }
//             }
//
//         } else {
//             string = string + userKey + `: ` + deep[userKey] + ` `;
//         }
//     }
//     return string;
// }
//
// for (const user of users) {
//     const userDiv = document.createElement(`div`);
//     userDiv.innerHTML = deeper(user) + `<hr>`;
//     document.body.append(userDiv)
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     const userDiv = document.createElement(`div`);
//     userDiv.innerHTML = `<hr>`;
//
//     const nameDiv = document.createElement(`div`);
//     nameDiv.innerText = `name: ${user.name}`;
//
//     const ageDiv = document.createElement(`div`);
//     ageDiv.innerText = `age: ${user.age}`;
//
//     const statusDiv = document.createElement(`div`);
//     statusDiv.innerText = `status: ${user.status}`;
//
//     const addressDiv = document.createElement(`div`);
//     addressDiv.innerText = `city: ${user.address.city}, country: ${user.address.country}, street: ${user.address.street}, houseNumber: ${user.address.houseNumber}`;
//
//     userDiv.append(nameDiv, ageDiv, statusDiv, addressDiv);
//     document.body.append(userDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// debugger
// for (const user of users) {
//     const userDiv = document.createElement(`div`);
//     for (const key in user) {
//         const keyDiv = document.createElement(`div`);
//         if (key === `address`) {
//             for (const adrKey in user.address) {
//                 const adrDiv = document.createElement(`div`);
//                 adrDiv.innerText = `${adrKey}: ${user.address[adrKey]}`;
//                 keyDiv.append(adrDiv);}
//
//         } else {
//             keyDiv.innerText = `${key}: ${user[key]}`
//         }
//         userDiv.append(keyDiv);
//     }
//     userDiv.append(document.createElement(`hr`));
//     document.body.append(userDiv);
// }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка
// вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того,
//     що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// const h2Arr = document.getElementsByTagName(`h2`);
// console.log(h2Arr);
// const htmluListElement = document.createElement(`ul`);
// for (const item of h2Arr){
//     const htmlliElement = document.createElement(`li`);
//     htmlliElement.innerText= item.innerText;
//     htmluListElement.append(htmlliElement);
// }
// const elementById = document.getElementById(`content`);
// elementById.append(htmluListElement);


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// const divWrap = document.createElement(`div`);
// divWrap.setAttribute(`class`, `myWrap`);
//
// for (let i =0; i<rules.length; i++){
//     const ruleDiv = document.createElement(`div`);
//     ruleDiv.setAttribute(`class`, `rules rule${i+1}`);
//
//     const h2Rule = document.createElement(`h2`);
//     h2Rule.innerText =rules[i].title;
//
//     const paragraphRule = document.createElement(`p`);
//     paragraphRule.innerText = rules[i].body;
//
//     ruleDiv.append(h2Rule, paragraphRule);
//     divWrap.append(ruleDiv);
// }
//
// document.body.append(divWrap);