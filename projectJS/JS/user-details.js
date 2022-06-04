// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

// Стилизация проекта -
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

const user = JSON.parse(localStorage.getItem(`user`));
const userDetailWrap = document.createElement(`div`);
userDetailWrap.setAttribute(`class`, `userDetailWrap`);

if(!user){
    alert(`Choose the user`);
}

const userDetail = document.createElement(`div`);
userDetail.setAttribute(`class`, `userDetail`);
userDetail.innerText = `User details:`;

function unpacking(userObj) {
    for (const key in userObj) {
        const userDetailParagraph = document.createElement(`p`);
        if (typeof userObj[key] !== `object`) {
            userDetailParagraph.classList.add(`${key}`);
            userDetailParagraph.innerText = `${key}: ${userObj[key]}`;
            userDetail.append(userDetailParagraph);
        } else {
            unpacking(userObj[key])
        }

    }
}

unpacking(user);
let endPointPost = `https://jsonplaceholder.typicode.com/users/${user.id}/posts`;

const divForButton = document.createElement(`div`);
divForButton.setAttribute(`class`, `divForButton`);


const userDetailsForm = document.createElement(`form`);
userDetailsForm.setAttribute(`class`, `userDetailsForm`)

const userDetailsButton = document.createElement(`button`);
userDetailsButton.setAttribute(`class`, `userDetailsButton`)


userDetailsButton.innerText = `post of current user`;
userDetailsForm.append(userDetailsButton);
divForButton.append(userDetailsForm);
userDetail.append(divForButton);
fetch(endPointPost)
    .then(response => response.json())
    .then(postList => {
        userDetailsButton.addEventListener(`click`, (ev) => {
            ev.preventDefault();
            for (let i = 0; i < postList.length; i = i + 5) {
                const postTitlesContainer = document.createElement(`div`);
                postTitlesContainer.setAttribute(`class`, `postTitlesContainer`);
                for (j = i; j < i + 5; j++) {
                    const postTitlesDiv = document.createElement(`div`);
                    postTitlesDiv.setAttribute(`class`, `postTitlesDiv`);
                    const postTitle = document.createElement(`div`);
                    postTitle.setAttribute(`class`, `postTitle`);

                    const divForButtonPost = document.createElement(`div`);
                    divForButtonPost.setAttribute(`class`, `divForButtonPost`);

                    const postButton = document.createElement(`button`);
                    postButton.setAttribute(`class`, `postButton`);
                    postButton.innerText = `more details`;

                    if (j < postList.length) {
                        postTitle.innerHTML = `${postList[j].title}`;
                        const postForButton = postList[j];

                        postButton.onclick = function () {
                            console.log(postForButton);
                            localStorage.setItem(`post`, JSON.stringify(postForButton))
                            document.location = `post-details.html`;
                        }

                    } else {
                        postTitlesDiv.classList.add(`hidden`);
                    }
                    divForButtonPost.append(postButton)
                    postTitlesDiv.append(postTitle, divForButtonPost);
                    postTitlesContainer.append(postTitlesDiv);


                }
                userDetailWrap.append(postTitlesContainer);

            }


        })
    })
userDetailWrap.append(userDetail);
document.body.append(userDetailWrap);
