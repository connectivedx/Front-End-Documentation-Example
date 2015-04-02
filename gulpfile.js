var gulp = require('gulp');
var sass = require('gulp-sass');
var sassdoc = require('sassdoc');
var styledown = require('gulp-styledown');

gulp.task('sassdoc', function() {
	return gulp.src('./src/css/**/*.scss')
		.pipe(sassdoc({
			dest: './documentation/api',
			theme: 'sassdoc-theme-example'
		}))
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('styledown', function() {
	return gulp.src('./src/css/**/*.scss')
		.pipe(styledown({
			config: 'config.md',
			filename: 'index.html'
		}))
		.pipe(gulp.dest('./documentation/style-guide/'));
});

gulp.task('default', ['sassdoc', 'styledown']);