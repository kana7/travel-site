var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
  console.log('Ceci est un test gulp');
});

gulp.task('html', function() {
  console.log('test sur le html');
});
gulp.task('styles', function() {
  console.log('On fait du css!!!');
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });
  watch('./app/assets/**/*.css', function(){
    gulp.start('styles');
  });
});
