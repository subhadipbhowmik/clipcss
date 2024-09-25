const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('clipcss/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'));
}

function watchTasks() {
    watch(['clipcss/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTasks)