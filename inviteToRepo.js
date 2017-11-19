const github = require("octonode");
const client = github.client("2291a24753cb1edaefff12f57b8e27242f4e36c8");
const ghrepo = client.repo("kobkrit/TDSC_HTML_CSS"); //VinZenTz1989/Hello-World

//Username not email
ghrepo.addCollaborator("s4ranyoo", () => {
  console.log("Success");
});
