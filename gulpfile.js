const gulp = require('gulp');
const gulpStatic = require('./lib/gulp-html-static');
const del = require('del');

gulp.task('static', function (){
	return gulp.src(['demo/*.html','demo/*.jsp','demo/*.txt'])
		.pipe(gulpStatic({
        	"test/": "http://static.xxx.com/test/",
        	"/${": "http://static.xxx.com/${",
        	"other": function (str,index){
        		return "/change/"+str;
        	}
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('del:static', function (){
	return del(['dist']);
});