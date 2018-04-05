// Dependencies (3)

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Task 1: Compile Sass ('sass')
gulp.task('sass', function(){
  return gulp.src(['src/scss/*.scss'])  // look here for sass files and
    .pipe(sass())
    .pipe(gulp.dest('src/css')) // compile it here (will create css folder, too)
    .pipe(browserSync.stream());  // to stream it to the browser
});

// Task 2: Watch & Serve ('serve')
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: './src'  // configuration object folder to be served in browser
  });

  gulp.watch(['src/scss/*.scss'], ['sass']);  // to constantly watch files
  gulp.watch(['src/*.html']).on('change', browserSync.reload); // auto-update html files
});

// Default Task ('default')
gulp.task('default', ['serve']);