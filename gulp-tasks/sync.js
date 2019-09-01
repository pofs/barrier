'use strict';

module.exports = function(options) {
  options.gulp.task('server', function () {
    options.sync(options.serverConfig);
  });
}; 