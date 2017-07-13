var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var watchLess = require('gulp-watch-less');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var gulp_watch_pug = require('gulp-watch-pug');
var minifyCSS = require('gulp-csso');
var webserver = require('gulp-webserver');

gulp.task('css', function(){
  return gulp.src('src/less/*.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch-css', function () {
  watchLess('src/less/*.less')
    .pipe(watch('src/less/*.less'))
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('html', function(){
  return gulp.src('src/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch-html', function () {
  gulp_watch_pug('src/pug/*.pug')
    .pipe(watch('src/pug/*.pug'))
    .pipe(gulp_watch_pug('src/pug/*.pug', { delay: 0 }))
    .pipe(pug())
    .pipe(gulp.dest('dist/'));
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('build', [ 'html', 'css']);
gulp.task('server', ['watch-css', 'watch-html', 'webserver']);
gulp.task('watch',['watch-css', 'watch-html']);