import { getUser } from "./getUser";
const liFollowers = document.querySelector(".followers");
const liFollowing = document.querySelector(".following");
const repos = document.querySelector(".repos");
const searchForm = document.querySelector(".search-form");
const avatar = document.querySelector(".avatar");
const userInfo = document.querySelector(".user-info");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  // the card that shows up after submit in forum it has all information on the user
  const userCard = searchForm.children[2]; 
  // its a tag in userinfo
  const link = userInfo.children[2];

  const searchValue = e.target.elements.searchbar.value;
  // we are getting informations on user by using a callback that is in getUser.js file 
  const user = await getUser(searchValue);
  // checking if user was found
  if (!user) {
    return new Error(user);
  }
  // destructuring the object that we got into only values that we need 
  const { login, avatar_url, followers, following, html_url, public_repos } =
    user;
  userCard.classList.remove("hidden");
  // its the name of the user
  userInfo.children[0].innerText = login;
  liFollowers.innerText = `${followers} : Followers`;
  liFollowing.innerText = `${following} : Following`;
  repos.innerText = `${public_repos} : Repos`;
  avatar.src = avatar_url;
  link.href = html_url;
  link.innerText = `Go to ${login} github Page`;
});
