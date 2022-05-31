// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// const button = document.getElementById(`button`);
// button.addEventListener(`click`,function (e){
//     const name = document.forms.form.name.value;
//     const age =document.forms.form.age.value;
//     const user= JSON.stringify(`name: ${name}, age: ${age}`)
//     localStorage.setItem(`user`,user)
// })

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// const form = document.createElement(`form`);
// const inputModel = document.createElement(`input`)
// inputModel.type = `text`;
// inputModel.name = `model`;
//
// const inputType = document.createElement(`input`);
// inputType.type = `text`;
// inputType.name = `type`;
//
// const inputVolume = document.createElement(`input`);
// inputVolume.type =`text`;
// inputVolume.name = `volume`;
//
// const button = document.createElement(`button`);
// button.id = `button`;
// button.innerText = `Push me`;
//
// button.addEventListener(`click`,function (ev){
//     ev.preventDefault();
//     let cars = [];
//     let car = {
//         model: inputModel.value,
//         type: inputType.value,
//         volume: inputVolume.value
//     };
//     if(localStorage.getItem(`cars`) ===`` || localStorage.getItem(`cars`) === null){
//         cars.push(car);
//         localStorage.setItem(`cars`,JSON.stringify(cars));
//     } else {
//         cars = JSON.parse(localStorage.getItem(`cars`));
//         cars.push(car);
//         localStorage.setItem(`cars`,JSON.stringify(cars));
//     }
//     inputModel.value = ``;
//     inputType.value =``;
//     inputVolume.value =``;
// })
// form.append(inputModel, inputType, inputVolume,button);
// document.body.append(form);