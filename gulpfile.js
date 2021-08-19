const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

// sass task
function scssTask() {
    return src('src/**/*.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(concat('css/main.css'))
        .pipe(dest('dist', { sourcemaps: '.' }));
}

exports.default = series(scssTask);