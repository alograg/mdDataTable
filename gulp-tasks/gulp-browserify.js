var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

// Basic usage 
gulp.task('browserify', function() {
    // Single entry point to browserify 
    gulp.src(['./app/modules/**/**.js', './build/compiled/**/**.js'])
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(rename('app.js')) //comment this out if you want all files instead of a bundle
        .pipe(gulp.dest('./build/js'))
});