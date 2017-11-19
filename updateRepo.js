const github = require("octonode");
const client = github.client("2291a24753cb1edaefff12f57b8e27242f4e36c8");
const ghrepo = client.repo("kobkrit/TDSC_HTML_CSS");

ghrepo.update(
  {
    private: true
  },
  () => console.log("Success")
);
