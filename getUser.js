import { Octokit, App } from "octokit";
const octokit = new Octokit({
  auth: process.env.API_TOKEN,
});

export const getUser = async (username) => {
  const user = await octokit.request(`GET /users/{username}`, {
    username: username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (!user) {
    return console.error("user not found");
  }

  return user.data;
};
