"use strict";

let gulp = require('gulp');


gulp.task('default',['serve']);

gulp.task('serve',()=>{
	require('./main.js');
});