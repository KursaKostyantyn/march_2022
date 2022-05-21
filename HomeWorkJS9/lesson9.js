// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let htmlDivElement = document.createElement(`div`);
// htmlDivElement.setAttribute(`class` ,`wrap collapse alpha beta`);
// htmlDivElement.style.background = `green`;
// htmlDivElement.style.color = `blue`;
// htmlDivElement.style.fontSize = `20px`;
// htmlDivElement.style.width =`100px`;
// htmlDivElement.style.height =`100px`;
// htmlDivElement.innerText =`Hello`
// document.body.append(htmlDivElement)
//
// let cloneNode = htmlDivElement.cloneNode(true);
// document.body.append(cloneNode)

//
// - Є масив:
//     const strings = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// const elementsByClassName = document.getElementsByClassName(`menu`);
// console.log(elementsByClassName);
// for (let i =0; i< strings.length;i++){
//     const htmlliElement = document.createElement(`li`);
//     htmlliElement.innerText = strings[i];
//     elementsByClassName[0].append(htmlliElement);
// }

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const item of coursesAndDurationArray) {
//     const htmlDivElement = document.createElement(`div`);
//     htmlDivElement.innerHTML = `<p>${Object.keys(item)[0]}: ${item.title}</p>
//         <p>${Object.keys(item)[1]}: ${item.monthDuration}</p>
// <hr>`;
//     document.body.append(htmlDivElement)
//
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цик
//
// for (const item of coursesAndDurationArray){
//     const red =Math.random()*255;
//     const green = Math.random()*255;
//     const blue = Math.random()*255;
//
//     const htmlDivElement = document.createElement(`div`);
//     htmlDivElement.classList.add(`item`);
//     htmlDivElement.style.background =`rgb(${red},${green},${blue})`
//
//     const htmlHeadingElement = document.createElement(`h1`);
//     htmlHeadingElement.setAttribute(`class`,`heading`);
//     htmlHeadingElement.innerText =item.title;
//
//     const htmlParagraphElement = document.createElement(`p`);
//     htmlParagraphElement.setAttribute(`class`,`description`);
//     htmlParagraphElement.innerHTML = item.monthDuration + `<hr>`;
//
//     document.body.appendChild(htmlDivElement);
//     htmlDivElement.append(htmlHeadingElement, htmlParagraphElement)
//
// }

// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// for (const simp of simpsons){
//     const htmlDivElement = document.createElement(`div`);
//     htmlDivElement.setAttribute(`class`,`member`);
//     const values = Object.values(simp);
//     htmlDivElement.innerHTML = values + `<hr>`;
//     document.body.append(htmlDivElement);
//
// }
//
//
//
// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//     Для кожної властивості елементу створити окремий блок, та помістити його у div.member
// for (const simp of simpsons){
//     const htmlDivElement = document.createElement(`div`);
//     htmlDivElement.setAttribute(`class`,`member`);
//
//     const htmlDivElement1 = document.createElement(`div`);
//     htmlDivElement1.setAttribute(`class`,`name`)
//     htmlDivElement1.innerText = simp.name;
//
//
//     const htmlDivElement2 = document.createElement(`div`);
//     htmlDivElement2.setAttribute(`class`,`surname`)
//     htmlDivElement2.innerText =simp.surname;
//
//     const htmlDivElement3 = document.createElement(`div`);
//     htmlDivElement3.setAttribute(`class`,`age`);
//     htmlDivElement3.innerText = simp.age;
//
//     const info = document.createElement(`div`);
//     info.setAttribute(`class`,`info`)
//     info.innerText = simp.info;
//
//     const photo = document.createElement(`img`);
//     photo.classList.add(`photo`);
//     photo.src = simp.photo;
//
//     const htmlhrElement = document.createElement(`hr`);
//
//     htmlDivElement.append(htmlDivElement1, htmlDivElement2, htmlDivElement3,info,photo,htmlhrElement)
//     document.body.appendChild(htmlDivElement)
//
// }

// - Є масив
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
//
// for (let cour of coursesArray) {
//     const wrapDiv = document.createElement(`div`);
//     wrapDiv.setAttribute(`class`,`wrap`)
//     // wrapDiv.style.background =`green`;
//     wrapDiv.style.width = `900px`;
//     wrapDiv.style.height =`400px`;
//     wrapDiv.style.display = `flex`;
//     wrapDiv.style.flexDirection =`column`;
//     wrapDiv.style.justifyContent =`center`;
//     wrapDiv.style.alignItems =`center`;
//
//
//
//     const titleDiv = document.createElement(`div`);
//     titleDiv.classList.add(`title`)
//     // titleDiv.style.background =`red`;
//     titleDiv.style.width =`90%`
//     titleDiv.style.height =`40px`;
//     titleDiv.style.display =`flex`;
//     titleDiv.style.justifyContent =`center`;
//     titleDiv.innerText = cour.title;
//
//     const durationDiv = document.createElement(`div`);
//     durationDiv.setAttribute(`class`,`durationWrap`)
//     // durationDiv.style.background =`pink`;
//     durationDiv.style.width =`90%`;
//     durationDiv.style.height=`40px`;
//     durationDiv.style.display =`flex`;
//     durationDiv.style.flexDirection = `raw`;
//     durationDiv.style.justifyContent =`center`;
//     durationDiv.style.alignItems = `center`;
//
//     const monthDiv = document.createElement(`div`);
//     monthDiv.setAttribute(`class`,`monthDuration`)
//     monthDiv.style.width = `30%`;
//     monthDiv.style.height = `100%`;
//     // monthDiv.style.background =`orange`;
//     monthDiv.style.display =`flex`;
//     monthDiv.style.justifyContent =`center`;
//     monthDiv.innerText = `Month: ${cour.monthDuration}`;
//
//     const hoursDiv = document.createElement(`div`);
//     hoursDiv.classList.add(`hoursDuration`);
//     hoursDiv.style.width = `70%`;
//     hoursDiv.style.height =`100%`;
//     // hoursDiv.style.background = `blue`;
//     hoursDiv.style.display =`flex`;
//     hoursDiv.style.justifyContent =`center`;
//     hoursDiv.innerText =`Hours: ${cour.hourDuration}`;
//
//
//     const modulesDiv = document.createElement(`div`);
//     modulesDiv.classList.add(`modules`);
//     // modulesDiv.style.background = `silver`;
//     modulesDiv.style.width =`90%`;
//     modulesDiv.style.height =`320px`;
//     modulesDiv.innerText =`modules:`
//
//
//
//
//     const modulesUl = document.createElement(`ul`);
//
//     for (const item of cour.modules) {
//         const modulLi = document.createElement(`li`);
//         modulLi.innerText = item;
//         modulesUl.append(modulLi);
//
//     }
//
//
//
//     modulesDiv.append(modulesUl);
//     durationDiv.append(monthDiv,hoursDiv);
//     wrapDiv.append(titleDiv,durationDiv,modulesDiv);
//     document.body.append(wrapDiv);
//
// }

