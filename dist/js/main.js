// Mr.node
// Copyright 2017 Talon Bragg
// Open Source and free to use
// Licensed under the MIT liscense

//Variables
var fs = require('fs');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var uglify = require('gulp-uglifyjs');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var beautify = require('gulp-beautify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
//Creating Files
function create(name, extension) {
    fs.writeFile(name + '.' + extension, '//change the name of this file to whatever you like', function(err) {
        if (err) return console.log(err);
        console.log('File Created');
    });
}
// Delete Files
function delt(file, dest) {
    gulp.task('delt', function () {
    return gulp.src(file)
    .pipe(vinylPaths(del))
    .pipe(stripDebug())
    .pipe(gulp.dest(dest));
    if (!file) {
        console.log('ERR! : No File Specified!');
    }
    else if (!dest) {
        console.log('ERR! : No File Specified');
    }
    else {
        console.log('Success! File Deleted');
    }
});


gulp.task('default', ['clean:tmp']);
}
// Minify Files, File types: Javascript
function minifyjs(file, dest) {
    gulp.task('uglify', function() {
    gulp.src(file)
    .pipe(uglify())
    .pipe(gulp.dest(dest))
});
    if(!file) {
        console.log('ERR! : No File Specified!');
    }
    else if (!dest) {
        console.log('ERR! : No Destination Specified');
    }
    else {
        console.log('Success! File minified!');
    }
}
function minifycss(file, dest) {
    gulp.task('minify', function() {
    return gulp.src([file])
    .pipe(minifyCSS())
    .pipe($.header(comment))
    .pipe($.size())
    .pipe($.concat('main.min.css'))
    .pipe(gulp.dest(dest));
});
        if(!file) {
        console.log('ERR! : No File Specified!');
    }
    else if (!dest) {
        console.log('ERR! : No Destination Specified');
    }
    else {
        console.log('Success! File minified!');
    }
}
//Beautify Files
function beautify(file, dest) {
    gulp.task('beautify', function() {
    gulp.src(file)
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest(dest))
});
    if (!file) {
        console.log('ERR! : No File Specified');
    }
    else if (!dest) {
        console.log('ERR! : No Destination Specified!');
    }
    else {
        console.log('Success! File Beautified!');
    }
}
//Covert sass to css
function csass(file, dest) {
    gulp.task('sass', function(){
    return gulp.src(file)
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest(dest))
    });
    if (!file) {
        console.log('ERR! : No File Specified!');
    }
    if (!dest) {
        console.log('ERR! : No Destination Specified!');
    }
    else {
        console.log('Success! Sass converted into CSS!');
    }
}
function renameit(file, newname, folderdest) {
    gulp.src(file)
    .pipe(rename(newname))
    .pipe(gulp.dest(folderdest)); // ./dist/main/text/ciao/goodbye.md
    if (!file) {
        console.log('ERR! : No File Specified!');
    }
    else if (!newname) {
        console.log('ERR! : No new name!');
    }
    else if (!folderdest) {
        console.log('ERR! : No folder destination!');
    }
    else {
        console.log('Success! File Renamed!');
    }
}
