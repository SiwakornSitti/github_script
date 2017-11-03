const github = require("octonode");
const client = github.client("TOKEN");

const ghme = client.me();

ghme.repo(
  {
    name: "RepoName",
  },
  () => {
      console.log('Success')
  }
); 
