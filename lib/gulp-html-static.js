'use strict';
var through = require('through2');

function replace(options) {
	console.log("Starting 'gulp-replace' ...");
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
        	cb(null, file);
        };
        if (file.isBuffer()) {
        	var data = Buffer.concat([file.contents]).toString();
        	var arr = [];

        	if (typeof options == 'object') {
        		for(var name in options){
                    var name2 = name.replace(/[\[\]\{\}\\\/\$]/g,function (str,index){
                        return '\\'+str;
                    });
        			arr.push({
                        "start": name,
        				"last":  name2,
        				"end": 	options[name]
        			});
	        	}
        	};
            
    		for (var i = 0; i < arr.length; i++) {
                if(typeof arr[i]["end"] === 'function'){
                    var re = new RegExp(arr[i]["last"],'g');
                    data = data.replace(re,arr[i]["end"]);
                }else if(typeof arr[i]["end"] === 'string'){
                    var re = new RegExp('\\b(src|href)=["\']'+arr[i]["last"],'g');
                    data = data.replace(re,function (str,index){
                        return str.substring(0,str.length-arr[i]["start"].length) + arr[i]["end"];
                    });
                }
                
    		};
            
        	file.contents = new Buffer(data);
        	cb(null, file);
        }else{
        	cb(null, file);
        };
    },function (cb){
        console.log("Finished 'gulp-replace'");
        cb && cb();
    });
}

module.exports = replace;
