var gulp = require('gulp'),
    config = require('../config');


config.sass.IS_WATCH = false;

gulp.task('watch', ['build'], function() {
    config.sass.IS_WATCH = true;

    console.log('val: ',config.sass.IS_WATCH);

    gulp.watch(config.sass.src, ['basic-sass']);
});

gulp.task('default', ['watch']);
