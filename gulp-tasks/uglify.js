'use strict';

module.exports = function(options) {
  options.gulp.task('uglify:build', function() {
    options.gulp.src([options.path.src.js + 'vendor/*.js', options.path.src.js + '*.js'])
    .pipe(options.plumber())
    .pipe(options.concat('app.js'))
    .pipe(options.uglify())
    .pipe(options.rename({ suffix : '.min' }))
    .pipe(options.gulp.dest(options.path.build.js));
  });
} 