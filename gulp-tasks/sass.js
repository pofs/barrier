'use strict';

module.exports = function(options) {
  options.gulp.task('sass:build', function() {
    options.gulp.src(options.path.src.styles + 'styles.scss')
      .pipe(options.plumber())
      //.pipe(options.sourcemaps.init())
      .pipe(options.concat('all.js'))
      .pipe(options.sass({
        outputStyle: 'expanded'
      }))
      .pipe(options.autoprefixer({
        browsers: [
          '> 1%',
          'last 2 versions',
          'ie 11'
        ],
        cascade: false
      }))
      .pipe(options.mergemedia({
        log: true
      }))
      .pipe(options.cleancss({
        compatibility: 'ie11'
      }))
      .pipe(options.rename({
        basename: 'styles',
        suffix: '.min'
      }))
      .pipe(options.header(options.banner, {
        package: options.package
      }))
      //.pipe(options.sourcemaps.write())
      .pipe(options.plumber.stop())
      .pipe(options.gulp.dest(options.path.build.css))
      .pipe(options.sync.reload({stream: true}));
    });
};