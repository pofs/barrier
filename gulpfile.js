'use strict';

var autoprefixer  = require('gulp-autoprefixer'),
    changed       = require('gulp-changed'),
    cssmin        = require('gulp-minify-css'),
    gulp          = require('gulp'),
    imagemin      = require('gulp-imagemin'),
    jshint        = require('gulp-jshint'),
    plumber       = require('gulp-plumber'),
    pug           = require('gulp-pug'),
    rename        = require('gulp-rename'),
    rigger        = require('gulp-rigger'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    svgsprites    = require('gulp-svg-sprites'),
    sync          = require('browser-sync'),
    uglify        = require('gulp-uglify'),
    mergemedia    = require('gulp-merge-media-queries'),
    cleancss      = require('gulp-clean-css'),
    header        = require('gulp-header'),
    concat        = require('gulp-concat'),
    watch         = require('gulp-watch'),
    cheerio       = require('gulp-cheerio'),
    svgmin        = require('gulp-svgmin'),
    fs            = require('fs'),
    //svg2png       = require('gulp-svg2png'),
    replace       = require('gulp-replace');

var options = {
  changed: changed,
  gulp: gulp,
  plumber: plumber,
  pug: pug,
  sync: sync,
  watch: watch,
  sourcemaps: sourcemaps,
  sass: sass,
  autoprefixer: autoprefixer,
  mergemedia: mergemedia,
  cleancss: cleancss,
  header: header,
  rename: rename,
  concat: concat,
  svgmin: svgmin,
  cheerio: cheerio,
  replace: replace,
  svgsprites: svgsprites,
  fs: fs,
  uglify: uglify,
  imagemin: imagemin,
  //svg2png: svg2png,

  path: {
    build: {
      html: './build/',
      js: './build/js/',
      css: './build/css/',
      images: './build/images/'
    },

    src: {
      pug: './src/pages/**/*.pug',
      styles: [
        './src/assets/scss/'
      ],
      js: './src/assets/js/',
      svg: './src/svg/*.svg',
      images: './src/images/*.(png|jpg|jpeg|webm)',
      assets: './src/assets/'
    },

    watch: {
      pug: 'src/**/*.pug',
      sass: 'src/**/*.scss',
      js: 'src/assets/js/**/*.js',
      svg: 'src/svg/*.svg'
    }
  },

  serverConfig: {
    server: {
      baseDir: './build'
    },
    // tunnel: true,
    host: 'localhost',
    port: '2222',
    logPrefix: 'frontend'
  },

  package: require('./package.json'),
  banner: ['/*!\n' +
           ' * <%= package.name %> v<%= package.version %>\n' +
           ' * <%= new Date().getFullYear() %> <%= package.author %> (<%= package.homepage %>)\n' +
           ' */ \n']
};

require('./gulp-tasks/pug.js')(options);
require('./gulp-tasks/sass.js')(options);
require('./gulp-tasks/watch.js')(options);
require('./gulp-tasks/sync.js')(options);
require('./gulp-tasks/svg.js')(options);
//require('./gulp-tasks/svg2png.js')(options);
require('./gulp-tasks/imagemin.js')(options);
require('./gulp-tasks/uglify.js')(options);

gulp.task('dev', [
  'pug:build',
  'sass:build',
  'sprite:build',
  //'svg2png:build',
  'imagemin:build',
  'uglify:build',
  'server',
  'watch'
]);

gulp.task('default', ['dev']);