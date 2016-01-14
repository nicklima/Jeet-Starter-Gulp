//Esse STARTER GULP + JEET é baseado no HARVEST (http://www.ryanbensonmedia.com/harvest) de Ryan Benson
//Esse GULPFILE foi desenvolvido por NICHOLAS LIMA E ALLEF BRUNO
//Qualquer dúvida ou sugestão, envie um e-mail para nick.lima.wp@gmail.com ou allefbr21@gmail.com

var gulp, gutil, browserSync, sass, autoprefixer, minifyCSS, uglify, concat, imagemin, changed, path;

//Diretorios
path = {
    dev     : './src',
    prod    : './assets',
}

//Carregamento de modulos
gulp            = require('gulp');
gutil           = require('gulp-util');
browserSync     = require('browser-sync').create();
sass            = require('gulp-sass');
autoprefixer    = require('gulp-autoprefixer');
minifyCSS       = require('gulp-minify-css');
uglify          = require('gulp-uglify');
concat          = require('gulp-concat');
imagemin        = require('gulp-imagemin');
changed         = require('gulp-changed');

// ================================================
// TASKS
// ================================================

//BrowserSync
gulp.task('sinc', function() {
  browserSync.init({
      server: {
        baseDir: "./"
      },
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
              errLogToConsole: false,
              includePaths: [
                   path.dev + '/scss/'
              ]
        }))                
        //nome do arquivo css finalizado
        .pipe(concat('main.min.css'))
        //comprimindo...
        .pipe(minifyCSS())        
        //where to save our final, compressed css file
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