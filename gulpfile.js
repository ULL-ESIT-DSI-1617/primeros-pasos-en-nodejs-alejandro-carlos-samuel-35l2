var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');

gulp.task('build', shell.task([
  'node ./scripts/generate-gitbook.js'
]));

gulp.task('deploy', shell.task([
  'node ./scripts/deploy-gitbook.js'
]));

gulp.task('serve', shell.task([
  'gitbook serve'
]));

gulp.task('default', ['build', 'deploy']);
