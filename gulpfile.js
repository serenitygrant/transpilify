const gulp = require('gulp');
const gutil = require('gulp-util');
const help = require('gulp-help');
const path = require('path');
const packageJson = require(path.resolve(__dirname, 'package.json'));
const noop = function(){};

help(gulp, { aliases: ['h'] });

gulp.task('version', 'Prints the version number.', [], function() {
    console.log(packageJson.version);
},
{
    aliases: ['v']
});

gulp.task('init', 'Initializes the project.', function() {

});

gulp.task('transpile', 'Translate configs into ETL scripts.', function() {

});

gulp.task('config:create', 'Creates a new ETL script configuration.', function() {

});
