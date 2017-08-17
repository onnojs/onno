const path = require('path')
const monorepo = require('gulp-tasks-monorepo')
const babel = require('gulp-babel')
const gulp = require('gulp')
const del = require('del')

const mono = monorepo({
  dir: path.join(__dirname, 'packages'),
  quiet: true
})

//------------------------------
// Helpers
//------------------------------

const pkgGlob = (pkg, glob, negate = false) =>
  `${negate ? '!' : ''}${path.join(pkg.location(), glob)}`

const srcGlob = (pkg) => [
  pkgGlob(pkg, 'src/**/*.js'),
  pkgGlob(pkg, 'src/**/*.test.js', true)
]

//------------------------------
// Tasks
//------------------------------

mono.task('mono:clean', (pkg) => {
  return del(pkgGlob(pkg, 'dist'))
})

mono.task('mono:reset', [ 'mono:clean' ], (pkg) => {
  return del(pkgGlob(pkg, '?(node_modules|yarn.lock)'))
})

mono.task('mono:build', [ 'mono:clean' ], (pkg) => {
  return gulp
    .src(srcGlob(pkg))
    .pipe(babel())
    .pipe(gulp.dest(pkgGlob(pkg, 'dist')))
})

gulp.task('build', [ 'mono:build' ])
gulp.task('clean', [ 'mono:clean' ])
gulp.task('reset', [ 'mono:reset' ], () => {
  return del('?(node_modules|yarn.lock)')
})
