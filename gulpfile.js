// Tasks: compile the sass (scss > css) & run 'browserSync' dev-server

// Dependencies (3)
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Task 1: Compile Sass ('sass')  <<< THIS TASK IS NOT RUNNING
gulp.task('sass', function(){
  return gulp.src(['src/scss/*.scss'])  // look here for sass files and
    .pipe(sass())
    .pipe(gulp.dest('src/css'))  // compile it here (will create css folder, too)
    .pipe(browserSync.stream());  // and stream it to the browser, using the 'browserSync' dev-server
});

// Task 2: Watch & Serve ('serve')
gulp.task('serve', ['sass'], function(){
  browserSync.init({  // initialize browserSync
    server: './src'  // configuration object folder to be served in browser
  });

  // constantly watch these files & auto-update the browser w any changes in them
  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

// Default Task ('default')
gulp.task('default', ['serve']);