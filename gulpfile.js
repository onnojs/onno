const path = require('path')
const gulp = require('gulp')
const mono = require('gulp-tasks-monorepo')
const babel = require('gulp-babel')
const del = require('del')

const repo = mono({
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

repo.task('clean', (pkg) => {
  return del(pkgGlob(pkg, 'dist'))
})

repo.task('reset', [ 'clean' ], (pkg) => {
  return del(pkgGlob(pkg, '?(node_modules|yarn.lock)'))
})

repo.task('build', [ 'clean' ], (pkg) => {
  return gulp
    .src(srcGlob(pkg))
    .pipe(babel())
    .pipe(gulp.dest(pkgGlob(pkg, 'dist')))
})
