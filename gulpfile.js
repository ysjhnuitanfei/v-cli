const gulp = require('gulp')
const inlinesource = require('gulp-inline-source')
const zip = require('gulp-zip')
const rimraf = require('rimraf')
const md5 = require('gulp-md5-plus')
const fs = require('fs')
const path = require('path')
const vivoConf = JSON.parse(fs.readFileSync(path.join(__dirname, './', 'package.json'))).vivo
const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
  let zipName = `prodZip/${vivoConf.prodZipName}`
  gulp.task('inlinesource', function () {
    rimraf(`./prodZip/*.zip`, function () {
      return gulp.src(`/${zipName}/*.html`, { base: '.' })
        .pipe(inlinesource())
        .pipe(gulp.dest('.'))
    })
  })
  gulp.task('zip', ['inlinesource'], () =>
    gulp.src(`./${zipName}/**`)
      .pipe(zip(`./${zipName}.zip`))
      .pipe(gulp.dest('.'))
  )
  gulp.task('md5', ['zip'], function () {
    return gulp.src(`./${zipName}.zip`)
      .pipe(md5(32, `${zipName}.zip`))
      .pipe(gulp.dest('./prodZip'))
  })
  gulp.task('default', ['inlinesource', 'zip', 'md5'], function () {
    rimraf.sync(`./${zipName}.zip`)
    rimraf.sync(`./${zipName}`)
    let files = fs.readdirSync(path.join(__dirname, './', 'prodZip'))
    if (files && files.length == 1) {
      console.log(new Date().toLocaleString('zh', { hour12: false }) + ' 静态资源包MD5值：' + files[0].split('_')[1].replace('.zip', ''))
    } else {
      console.log('打包文件夹下文件数异常，请检查！')
    }
  })
} else {
  gulp.task('inlinesource', function () {
    return gulp.src('./dist/*.html', { base: '.' })
      .pipe(inlinesource())
      .pipe(gulp.dest('.'))
  })
  gulp.task('default', ['inlinesource'])
}
