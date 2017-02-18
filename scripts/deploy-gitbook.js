console.log("Deploy Gitbook");

let repo = (require('./package.json').repository.url);

require('gh-pages').publish('./gh-pages', { repo: 'repo', logger: function(m) { console.error(m); } });
