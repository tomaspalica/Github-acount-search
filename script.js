import { getUser } from "./getUser";
const liFollowers = document.querySelector(".followers");
const liFollowing = document.querySelector(".following");
const repos = document.querySelector(".repos");
const searchForm = document.querySelector(".search-form");
const avatar = document.querySelector(".avatar");
const userInfo = document.querySelector(".user-info");
console.log();
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userCard = searchForm.children[2];
  const link = userInfo.children[2];

  const searchValue = e.target.elements.searchbar.value;
  const user = await getUser(searchValue);
  if (!user) {
    return new Error(user);
  }
  const { login, avatar_url, followers, following, html_url, public_repos } =
    user;
  userCard.classList.remove("hidden");
  userInfo.children[0].innerText = login;
  liFollowers.innerText = `${followers} : Followers`;
  liFollowing.innerText = `${following} : Following`;
  repos.innerText = `${public_repos} : Repos`;
  avatar.src = avatar_url;
  link.href = html_url;
  link.innerText = `Go to ${login} github Page`;
});
