const gulp = require('gulp'); 
const concat = require('gulp-concat');
const scripts = require('./scripts'); 
const style = require('./styles'); 
const browserSync = require('browser-sync').create();
var devMode = false; 

gulp.task('css', function(){
    gulp.src(styles)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('.dist/css'))
    .pipe(browserSync.reload({
        stream: true
    })); 
});

gulp.task('js', function(){
    gulp.src(scripts)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('.dist/js'))
    .pipe(browserSync.reload({
        stream: true
    })); 
})

gulp.task('html', function(){
    gulp.src("./components/**/*.html")
    .pipe(concat('main.js'))
    .pipe(gulp.dest('.dist/js'))
    .pipe(browserSync.reload({
        stream: true
    }));
}); 

gulp.task('build', function(){
    gulp.setMaxListeners(['css', 'js', 'html'])
    
}); 
