'use strict';

module.exports = function(options) {

  options.gulp.task('pug:build', function() {
    options.gulp.src(options.path.src.pug)
      .pipe(options.plumber())
      .pipe(options.changed(options.path.src.pug))
      .pipe(options.pug({
        'pretty' : '\t'
      }))
      .pipe(options.plumber.stop())
      .pipe(options.gulp.dest(options.path.build.html))
      .pipe(options.sync.reload({stream: true}));
  });
}