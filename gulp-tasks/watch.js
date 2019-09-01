'use strict';

module.exports = function(options) {
  options.gulp.task('watch', function() {
    options.watch([options.path.watch.pug], function(e, c) {
      options.gulp.start('pug:build');
    });

    options.watch([options.path.watch.sass], function(e, c) {
      options.gulp.start('sass:build');
    });

    options.watch([options.path.watch.js], function(e, c) {
      options.gulp.start('uglify:build');
    });

    options.watch([options.path.watch.svg], function(e, c) {
      options.gulp.start(['sprite:build', 'svg2png:build']);
    });
  });
};