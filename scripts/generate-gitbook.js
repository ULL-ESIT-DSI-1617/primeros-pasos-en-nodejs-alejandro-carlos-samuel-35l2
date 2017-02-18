console.log('Generate Gitbook')

let exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout) }
exec ("./node_modules/.bin/gitbook build ./txt ./gh-pages", puts);
