'use strict';

module.exports = function(options) {
  options.gulp.task('imagemin:build', function() {
    options.gulp.src(options.path.build.images)
    .pipe(options.plumber())
    .pipe(options.imagemin())
    .pipe(options.gulp.dest(options.path.build.images));
  });
};