var gulp = require('gulp');
var sass = require('gulp-sass');
var sassdoc = require('sassdoc');
var styledown = require('gulp-styledown');

gulp.task('default', function () {
	gulp.src('./src/css/**/*.scss')
		.pipe(sassdoc({
			dest: './documentation/api'
		}))
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'));

	gulp.src('./src/css/**/*.scss')
		.pipe(styledown({
			config: 'config.md',
			filename: 'index.html'
		}))
		.pipe(gulp.dest('./documentation/style-guide/'));
});