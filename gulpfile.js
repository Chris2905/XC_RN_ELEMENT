const path = require('path');
const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const loadPlugins = require('gulp-load-plugins');

const src = path.resolve(__dirname, './src/component');
const dist = path.resolve(__dirname, './dist');
const sarsGulp = loadPlugins();

const paths = {
    src,
    dist,
};

const cleanDist = () => {
    return del(paths.dist);
};

const compile = () => {
    return gulp.src(`${paths.src}/**/*.{ts,tsx}`)
        .pipe(babel())
        .pipe(gulp.dest(paths.dist));
};

const assets = () => {
    return gulp.src(['**', '!/**/*.{ts,tsx}'], { cwd: paths.src })
        .pipe(sarsGulp.plumber())
        .pipe(sarsGulp.cached('extra'))
        .pipe(gulp.dest(paths.dist));
};

const exact = () => {
    return gulp.src(['./*.{md,d.ts}'])
        .pipe(gulp.dest(paths.dist));
};

const clean = gulp.series(cleanDist);

const buildScripts = gulp.series(clean, compile, assets, exact);

const build = gulp.parallel(buildScripts);

module.exports = { clean, build };