// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// function User (id, name, surname, email, phone){
//     this.id =id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// // debugger
// let users =[]
// let i= 0
// user1= new User(`${i}1`, `Vasya `, `pupkin `, `hh@gmail.com`,`1234567`)
// for (let i=0; i<10; i++) {
//     users[i] = new User(`${i+1}`, `Vasya ${i}`, `pupkin ${i}`,`hh${i}@gmail.com`,`123456${i}`)
// }
// console.log(users);
//
// let usersOdd= users.filter(value=>value.id%2===0)
// console.log(usersOdd);
// let userDecrease = users.sort((a,b) => b.id -a.id)
// console.log(userDecrease);


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email =email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let array = []
// let orders =[`bread`, `milk`]
// // debugger
// for (let i =0; i <10; i++) {
//     let order = orders.slice()
//     array[i] = new Client(`${i+1}`,`Vasya${i}`,`Pupkin${i}`,`gg${i}@gmail.com`,`123456${i}`,`${order}`)
//     orders.push(`orange${i}`)
// }
// console.log(array);
// let sortedArr = array.sort((a,b) =>b.order.length -a.order.length)
// console.log(sortedArr);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,manufacturer, year, maxSpeed, volume){
//     this.model =model;
//     this.manufacturer = manufacturer;
//     this.year =year;
//     this.maxSpeed = maxSpeed;
//     this.volume =volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function (){
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed= newSpeed;
//         console.log(`new maxSpeed = ${this.maxSpeed}`);
//     }
//     this.changeYear = function (newYear){
//         this.year = newYear;
//         console.log(`new year = ${this.year}`);
//     }
//     this.addDriver =function (newDriver) {
//         this.driver = newDriver
//     }
// }
//
// let newCar = new Car(`bmw`,`Germany`,`2019`,`180`,`1.5`)
// newCar.drive();
// newCar.info()
// newCar.increaseMaxSpeed(`200`)
// newCar.changeYear(`2020`)
// newCar.addDriver([`Vasya`,`Pupkin`])
// console.log(newCar);


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model,manufacturer, year, maxSpeed, volume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info(){
//         console.log(this);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed
//     }
//
//     changeYear (newYear) {
//         this.year = newYear;
//     }
//     addDriver(driver) {
//         this.driver = driver
//     }
//
// }
// let newCar = new Car(`bmw`,`Germany`,`2019`,`180`,`1.5`)
// newCar.drive()
// newCar.info()
// newCar.increaseMaxSpeed(220)
// newCar.info()
// newCar.changeYear(2020)
// newCar.info()
// newCar.addDriver([`Vasya`, `Pupkin`])
// newCar.info()


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderela {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size
//     }
//     info(){
//         console.log(this);;
//     }
// }
//
// class Prince {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size
//     }
//     findCinderela(cinderelas) {
//         for (let i = 0; i < cinderelas.length; i++) {
//             if(cinderelas[i].size === newPrince.size){
//                 console.log(`we found the match: `);
//                 cinderelas[i].info()
//             }
//         }
//     }
// }
//
// const cinderelas = []
//
// for (let i = 0; i < 10; i++) {
//     cinderelas.push(new Cinderela(`Galya${i + 1}`, `${18 + i}`, `${36 + i}`))
// }
// console.log(cinderelas);
// const newPrince = new Prince(`Kolya`, `22`, `40`)
// newPrince.findCinderela(cinderelas)
// console.log(cinderelas.find(value => value.size === newPrince.size));