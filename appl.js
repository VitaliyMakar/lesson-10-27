/*1. забрать пользователей
2.рендер пользвотелей
3.обработчик клика на пользователя
4.забрать посты пользователя
5.рендер постов
*/
const users = document.querySelector("#users");
const posts = document.querySelector("#posts");

let userList = [];
let userPosts = [];

const usersFetch = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    userList = await response.json();
  } catch (e) {
    console.log(e.message);
  } finally {
    renderUsers();
  }
};

const renderUsers = () => {
  userList.forEach((user) => {
    const userEle = document.createElement("div");
    userEle.textContent = user.name;
    userEle.addEventListener("click", () => {
      getPosts(user.id);
    });
    users.append(userEle);
  });
};

const getPosts = (userId) => {
    postsFetch(userId)
};

const postsFetch = async (userId) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userId
    );
    userPosts = await response.json();
  } catch (e) {
    console.log(e.message);
  } finally {
    renderPosts();
  }
};

const renderPosts = () => {
    posts.innerHTML = '';
  userPosts.forEach((post) => {
    const postEle = document.createElement("div");
    postEle.textContent = post.title;
    posts.append(postEle);
  });
};

const main = () => {
    usersFetch();
}

main();