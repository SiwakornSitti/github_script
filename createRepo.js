const github = require("octonode");
const client = github.client("2291a24753cb1edaefff12f57b8e27242f4e36c8");

const ghme = client.me();

ghme.repo(
  {
    name: "TDSC_HTML_CSS"
  },
  () => {
    console.log("Success");
  }
);
