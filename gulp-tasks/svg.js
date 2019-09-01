'use strict';

module.exports = function(options) {
  options.gulp.task('sprite:build', function() {
    options.gulp.src(options.path.src.svg)
    .pipe(options.svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(options.cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[style]').removeAttr('style');
        $('[stroke]').removeAttr('stroke');
      }
    }))
    .pipe(options.replace('&gt;', '>'))
    .pipe(options.svgsprites({
      preview: true,
      selector: "i-%f",
      common: "i",
      svg: {
        sprite: 'images/sprite.svg',
      },
      cssFile: '../src/assets/scss/_sprite.scss',
      padding: 5,
      templates: {
        scss: options.fs.readFileSync(options.path.src.assets + '/templates/__sprite.tmpl.scss', "utf-8")
      }
    }))
    .pipe(options.gulp.dest(options.path.build.html));
  });
};

