// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//        name: 'Romaguera-Crona',
//        catchPhrase: 'Multi-layered client-server neural-net',
//        bs: 'harness real-time e-markets'
// }
// }
//
// class Geo {
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
//
//
// class Address extends Geo {
//     constructor(street, suite, city, zipcode, lat, lng) {
//         super(lat, lng);
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//     }
// }
//
// class Company {
//     constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
//
// class User {
//     constructor(id, name, userName, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.userName = userName;
//         this.email = email;
//         this.address = new Address(street, suite, city, zipcode, lat, lng);
//         this.phone = phone;
//         this.website = website
//         this.company = new Company(companyName, catchPhrase, bs)
//
//     }
// }
//
// let user1 = new User(`1`,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556',
//     'Gwenborough','92998-3874','-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org',
//     'Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
// console.log(user1);

//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function TegDescriber(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let tegA = new TegDescriber('a', `Предназначен для создания ссылок`, [{
//     titleOfAttr: `accesskey`,
//     actionOfAttr: `Активация ссылки с помощью комбинации клавиш`},
//     {
//         titleOfAttr: `coords`,
//         actionOfAttr: `Устанавливает координаты активной области.`
//     }
// ])
// console.log(tegA);
// let tegDiv = new TegDescriber(`div`, `является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого`, [
//     {
//         titleOfAttr: `align`,
//         actionOfAttr: `Задает выравнивание содержимого тега <div>.`
//     },
//     {
//         titleOfAttr: `title`,
//         actionOfAttr: `Добавляет всплывающую подсказку к содержимому`
//     }
// ])
// console.log(tegDiv)
// let tegH1 = new TegDescriber(`h1`, `представляет собой наиболее важный заголовок первого уровня`,[
//     {
//         titleOfAttr: `align`,
//         actionOfAttr: `Определяет выравнивание заголовка.`
//     }
// ])
// console.log(tegH1);
// let tegSpan = new TegDescriber(`span`,` предназначен для определения строчных элементов документа`, [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'}
// ])
// console.log(tegSpan);
// let tegInput = new TegDescriber(`input`, `является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем`,
//     [{titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения'}])

// class TegDescriber {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }

// let tegForm = new TegDescriber(`form`,`Связывает поле с формой по её идентификатору`, [
//     {titleOfAttr: 'id ', actionOfAttr: 'Идентификатор формы'}])
// console.log(tegForm);
// let tegOption = new TegDescriber(`option`,`определяет отдельные пункты списка, создаваемого с помощью контейнера <select>`,[
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка'}
// ])
// console.log(tegOption);
// let tegSelect = new TegDescriber(`select`,`позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее`,
//     [{titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'},
//         {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка'}])
// console.log(tegSelect);