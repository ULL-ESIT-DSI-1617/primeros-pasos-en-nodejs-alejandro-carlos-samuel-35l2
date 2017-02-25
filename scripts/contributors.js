var fs = require('fs');

main();

function update_maintainers() {
  let date = new Date;
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let data = '# Last update: ' + day + '/' + month + '/' + year + ' ' + hours + ':' + minutes+ ':' + seconds;
  fs.appendFileSync('../MAINTAINERS', data );

  var contributors = [];
  let salida = [];
  require('simple-git')()
        .log(function(err, log) {
            if(err){
              console.error(err);
            }
             let result = log;
             for (var i = 0; i < result.all.length; i++) {
                 if (! (contributors.includes(result.all[i].author_name))) {
                   contributors.push(result.all[i].author_name);
                   salida.push(result.all[i].author_name + " <" + result.all[i].author_email + "> " + "(since" + result.all[i].date + ")");
                 }
             }
             for (var i = 0; i < salida.length; i++) {
               fs.appendFileSync('../MAINTAINERS', salida[i] + "\n");
             }
          });

}

function print_maintainers() {
  console.log(fs.readFileSync('../MAINTAINERS','utf8'));
}

function main() {
  if(fs.existsSync('../MAINTAINERS')) {
    update_maintainers();
    print_maintainers();
  }
  else {
    console.error('MAINTAINERS file was not found.');
  }
}
