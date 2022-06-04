// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать,
// так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
const postDetailsWrap = document.createElement(`div`);
postDetailsWrap.setAttribute(`class`, `postDetailsWrap`);

const post = JSON.parse(localStorage.getItem(`post`));
const postDetailDiv = document.createElement(`div`);
postDetailDiv.setAttribute(`class`, `postDetailDiv`);

if(!post){
    alert(`choose the post`);
}

for (key in post) {
    const postDetailParagraph = document.createElement(`p`);
    postDetailParagraph.setAttribute(`class`, `${key}`)
    postDetailParagraph.innerText = `${key}: ${post[key]}`;
    postDetailDiv.append(postDetailParagraph);

}
console.log(post);
postDetailsWrap.append(postDetailDiv);
console.log(post.id);
console.log(`https://jsonplaceholder.typicode.com/posts/${post.idd}/comments`);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(postComments => {

        for (let i = 0; i < postComments.length; i = i + 4) {
            const postDetailsContainer = document.createElement(`div`);
            postDetailsContainer.setAttribute(`class`, `postDetailsContainer`);
            for (let j = i; j < i + 4; j++) {
                const postDetail = document.createElement(`div`);
                postDetail.setAttribute(`class`, `postDetail`);
                postDetailsContainer.append(postDetail);
                if (j >= postComments.length) {
                    postDetail.classList.add(`hidden`);
                }
                postDetail.innerText = `Comment:`;

                for (key in postComments[j]) {
                    const keyDiv = document.createElement(`div`);
                    keyDiv.setAttribute(`class`, `${key}`);
                    keyDiv.innerText = `${key}: ${postComments[j][key]}`;
                    postDetail.append(keyDiv);
                }

            }
            postDetailsWrap.append(postDetailsContainer);
        }
        console.log(`completed`)
    })


document.body.append(postDetailsWrap);


