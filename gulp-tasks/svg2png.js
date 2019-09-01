'use strict';

module.exports = function(options) {
  options.gulp.task('svg2png:build', function() {
    options.gulp.src(options.path.build.images + 'sprite.svg')
    .pipe(options.plumber())
    .pipe(options.svg2png())
    .pipe(options.plumber.stop())
    .pipe(options.gulp.dest(options.path.build.images));
  });
};