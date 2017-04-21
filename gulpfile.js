//Esse STARTER GULP + JEET é baseado no HARVEST (http://www.ryanbensonmedia.com/harvest) de Ryan Benson
//Esse GULPFILE foi desenvolvido por NICHOLAS LIMA E ALLEF BRUNO
//Qualquer dúvida ou sugestão, envie um e-mail para nick.lima.wp@gmail.com ou allefbr21@gmail.com
//Diretorio DEV  : ./src
//Diretorio PROD : /assets

'use strict';
var gulp, path, sass, cssnano, sourcemaps, concat, uglify, browserSync, browsersup, gutil, imagemin, spritesmith, changed, gulpif, sprity;

//Diretorios
path = {
    dev     : './_src',
    prod    : './assets',
    // proxy   : 'http://localhost/jeet'
}

//Carregamento de modulos
gulp            = require('gulp');
gutil           = require('gulp-util');
browserSync     = require('browser-sync').create();
sass            = require('gulp-sass');
uglify          = require('gulp-uglify');
imagemin        = require('gulp-imagemin');

sprity          = require('sprity');
spritesmith     = require("gulp-spritesmith");
changed         = require('gulp-changed');
gulpif          = require("gulp-if");

sourcemaps      = require('gulp-sourcemaps');
concat          = require('gulp-concat');
cssnano         = require('gulp-cssnano');
browsersup      = [
    'Android >= 2.3',
    'BlackBerry >= 7',
    'Chrome >= 9',
    'Firefox >= 4',
    'Explorer >= 9',
    'iOS >= 5',
    'Opera >= 11',
    'Safari >= 5',
    'ChromeAndroid >= 9',
    'FirefoxAndroid >= 4',
    'ExplorerMobile >= 9'
];

// ================================================
// TASKS
// ================================================

//BrowserSync
gulp.task('sinc', function() {
  browserSync.init({
      server: {
        baseDir: "./"
      },
      //Para acessar o localhost, remova o comentário da opção 'proxy: path.proxy' e comente a opção 'server: {baseDir: "./"}'
      //proxy: path.proxy,
      options: {
        reloadDelay: 250
      },
      notify: true,
  });
});

//Compila arquivos scss/sass para css
gulp.task('sass', function() {
    //Arquivo SCSS principal que deve importar todos os outros
    return gulp.src( path.dev + '/scss/main.scss')
    //local do arquivo SCSS do ambiente de desenvolvimento e suas subpastas
    .pipe(sass({
          sourcemap: true,
          outputStyle: 'expanded',
          includePaths: [
               path.dev + '/scss/**/*'
          ]

    }))
    .pipe(cssnano({autoprefixer: {browsers: browsersup, add: true}}))
    .pipe(sourcemaps.write())
    //nome do arquivo css finalizado
    .pipe(concat('main.min.css'))
    //local para salvar o CSS final
    .pipe(gulp.dest( path.prod + '/css'))
    //notifica o browserSync para atualizar
    .pipe(browserSync.reload({stream: true}));
});

//compiling our Javascripts
gulp.task('scripts', function() {
    //local dos arquivos JS de desenvolvimento
    return gulp.src([path.dev + '/js/_includes/**/*.js', path.dev +'/js/*.js'])
        //nome do arquivo js finalizado
       .pipe(concat('main.min.js'))
       //comprimindo...
       .pipe(uglify())
       //local onde o arquivo finalizado/comprimido será salvo
       .pipe(gulp.dest( path.prod + '/js'))
       //notifica o browserSync para atualizar
       .pipe(browserSync.reload({stream: true}));
});

//Imagens minificadas
gulp.task('images', function() {
    return gulp.src(path.dev + '/images/*')
        .pipe(changed( path.prod + '/images')).pipe(
            imagemin({
                optimizationLevel: 5,
                progressive: true,
                interlaced: true,
                svgoPlugins: [{removeViewBox: false}]
                }))
        .pipe(gulp.dest( path.prod + '/images'));
});

//Task default
gulp.task('default', ['sinc', 'scripts', 'images', 'sass'], function(){
    gulp.watch( path.dev + '/scss/**/*.scss', ['sass']);
    gulp.watch( path.dev + '/js/*.js', ['scripts']);
    gulp.watch( path.dev + '/images/*', ['images']);
});