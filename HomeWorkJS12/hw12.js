// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(postsList => {
//         console.log(`start`);
//         const wrapDiv = document.createElement(`div`);
//         wrapDiv.setAttribute(`class`, `postWrap`);
//
//         for (let i = 0; i < postsList.length; i = i + 5) {
//             const containerDiv = document.createElement(`div`);
//             containerDiv.setAttribute(`class`, `postContainer`);
//
//             for (let j=i; j<i+5; j++){
//                 const postDiv = document.createElement(`div`);
//                 postDiv.setAttribute(`class`, `post`)
//                 containerDiv.append(postDiv);
//
//                 // const ulPost = document.createElement(`ul`);
//                 // ulPost.setAttribute(`class`, `postUl`)
//                 // for (const key in postsList[j]){
//                 //     const liPost = document.createElement(`li`);
//                 //     liPost.innerText =`${key}: ${postsList[j][key]}`
//                 //     ulPost.append(liPost);
//                 // }
//                 // postDiv.append(ulPost);
//
//                 for (const key in postsList[j]){
//                     const keyDiv = document.createElement(`div`);
//                     keyDiv.setAttribute(`class`,`${key}`);
//                     keyDiv.innerText =`${key}: ${postsList[j][key]}`
//                     postDiv.append(keyDiv);
//                 }
//             }
//             wrapDiv.append(containerDiv);
//
//         }
//         document.body.append(wrapDiv);
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch(`https://jsonplaceholder.typicode.com/comments`)
//     .then(response => response.json())
//     .then(commentsList => {
//         const wrapDiv = document.createElement(`div`);
//         wrapDiv.setAttribute(`class`,`commentWrap`);
//
//         for (let i=0; i< commentsList.length;i++){
//             const commentDiv = document.createElement(`div`);
//             commentDiv.setAttribute(`class`,`commentContainer`);
//
//             for (const key in commentsList[i]){
//                 const keyDiv = document.createElement(`div`);
//                 keyDiv.setAttribute(`class`,`${key}`);
//
//                 keyDiv.innerText = `${key}: ${commentsList[i][key]}`;
//                 commentDiv.append(keyDiv);
//             }
//             wrapDiv.append(commentDiv);
//         }
//         document.body.append(wrapDiv);
//     })
