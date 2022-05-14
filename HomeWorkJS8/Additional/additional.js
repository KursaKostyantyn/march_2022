// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

// debugger
// let classArr =[]
// const classArrSecond =[]
// const classes = (element) => {
//     const children = element.children
//     for (const item of children){
//         const classLisrArr = item.classList
//         if(classLisrArr.length >0) {
//             classArr.push(classLisrArr)
//             for (const itemElement of classLisrArr) {
//                 classArrSecond.push(itemElement)
//             }
//         }
//         classes(item)
//     }
//
//     return classArr
// }
// classes(document.body)
// console.log(classArr);
// console.log(classArrSecond);

// const arr =[1,4,7,[8,9,99,4,0,[7,9,3],67,43,22,[11,66,88,99]]]
// const newArr =[]
// let makeArr = (arr) => {
//     for (const arrElement of arr) {
//         if (Array.isArray(arrElement)){
//             makeArr(arrElement)
//         } else {
//             newArr.push(arrElement)
//         }
//
//     }
// }
//
// makeArr(arr)
// console.log(newArr);