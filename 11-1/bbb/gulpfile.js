var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'), //将less语法的css处理成css格式
    htmlmin = require('gulp-htmlmin'), //html压缩
    imagemin = require('gulp-imagemin'),//图片压缩
    pngcrush = require('imagemin-pngcrush');//图片压缩优化技术
 
//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function() {
    gulp.src('./less/styles.less') //该任务针对的文件        
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('./dist/css')); //将会在dist/css下生成styles.css
});

gulp.task('testImages',function(){
    gulp.src('./images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('./dist/images'));//将会在dist/images/下生成所有压缩图片
});

gulp.task('testHtml', function() {
    gulp.src('./index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));//将会在dist下生成index.html
});

gulp.task('default', ['testLess', 'testHtml','testImages']); //定义默认任务
