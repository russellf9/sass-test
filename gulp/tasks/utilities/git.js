var gulp   = require('gulp'),
    git = require('gulp-git');


// Create a new git branch
// Uses the default name as: dev-{YYMMDD}
gulp.task('branch', function() {
    var today = new Date(),
        month = String((today.getMonth() + 1 >= 10) ? (today.getMonth() + 1) : ('0' + String(today.getMonth() + 1))),
        date = String((today.getDate() >= 10) ? (today.getDate()) : ('0' + (today.getDate()))),
        year = String(today.getFullYear()),
        shortYear = year.substr(year.length - 2, 2),
        dateString = shortYear + month + date,
        branchName = 'dev-' + dateString;

    git.checkout(branchName, {args: '-b'}, function(err) {
        if (err) {
            throw err;
        } else {
            console.log('Git branch - ', branchName, ' created.');
        }
    });
});
