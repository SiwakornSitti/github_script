const github = require("octonode");
const client = github.client("Token");
const ghrepo = client.repo("Username/Repo"); //VinZenTz1989/Hello-World

ghrepo.addCollaborator("User", () => {
  console.log("Success");
});

