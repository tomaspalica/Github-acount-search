import { getUser } from "./getUser";
const check = document.querySelector(".check");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchValue = e.target.elements.searchbar.value;
  const { login, avatar_url, followers, following, html_url } = await getUser(
    searchValue
  );
});
