
# [gulp-html-static](https://github.com/zhe-he/gulp-html-static)

> replace resources in html template.

## Install
```sh
npm install gulp-html-static --save
```
```git
git clone git@github.com:zhe-he/gulp-html-static.git
```

## demo
```test
npm run build
```

## gulpfile
```js
var gulp = require('gulp');
var static = require('gulp-html-static');

gulp.task('static', function () {
    return gulp.src('templates/**/*.html')
        .pipe( static({
            '/src/js/':  'http://static.xxx.com/src/js/',
            '/link/img/': 'http://static.xxx.com/img/',
        	'/${': 'http://static.xxx.com/${',
        	'other': function (str,index){
        		return "/change/"+str;
        	}
        
        }) )
        .pipe( gulp.dest('dist') );
});
```

### Options


```
"/src/js/" => "http://static.xxx.com/src/js/"
"/link/img/" => "http://static.xxx.com/img/"
"/${" => "http://static.xxx.com/${"
"other" => "return string"
```

## License

[MIT](http://opensource.org/licenses/MIT) © [zhe-he](mailto:luanhong_feiguo@sina.com)
