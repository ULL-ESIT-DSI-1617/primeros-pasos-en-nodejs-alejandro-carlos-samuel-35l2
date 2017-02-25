require('shelljs/global');

let repo = require('./package.json').repository.wiki;

console.log("Deploy wiki on GitHub");

cd('wiki');

//Remove possible existing git repo. We'll replace entire wiki
rm('-rf','.git');

require('simple-git')()
  //Init new repo
  .init()
  //The first and only commit to this new Git repo contains all the
  //files present with the commit message "Deploy to GitHub Pages".
  .add('./*')
  .commit("Deploy to Wiki")
  //Add origin
  .addRemote('origin','repo')
  //Force push from the current repo's master branch to the remote
  //(All previous history on the master branch will be lost, since we are overwriting it.)
  .push(['-f','origin','master'], function() { console.log("Pushed successfully to" + repo)});
