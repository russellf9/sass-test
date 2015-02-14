var gulp        = require('gulp'),
    runSequence = require('run-sequence'),
    config = require('../../config');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
    console.log('build!');
    config.sass.IS_WATCH = true;
    console.log('val: ',config.sass.IS_WATCH);
});
