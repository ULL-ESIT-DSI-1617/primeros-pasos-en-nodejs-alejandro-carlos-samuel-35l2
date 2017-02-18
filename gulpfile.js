var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell')



gulp.task('build', shell.task([
  'gitbook build txt/ gh-pages/'
]));

gulp.task('deploy', shell.task([
  'gitbook deploy'
]));
