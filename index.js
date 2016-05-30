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
        			arr.push({
        				"last": 	name,
        				"end": 	options[name]
        			});
	        	}
        	};
            
    		for (var i = 0; i < arr.length; i++) {
    			var re = new RegExp('\\bsrc="'+arr[i]["last"],'g');
                var re2 = new RegExp('\\bhref="'+arr[i]["last",'g']);
    			data = data.replace(re,'src="'+arr[i]["end"]).replace(re2,'href="'+arr[i]["end"]);
    		};
            
        	file.contents = new Buffer(data);
        	cb(null, file);
        }else{
        	cb(null, file);
        };
    });
}

module.exports = replace;
