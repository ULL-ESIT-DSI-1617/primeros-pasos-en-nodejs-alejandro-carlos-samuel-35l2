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
           console.log(salida);

        });
