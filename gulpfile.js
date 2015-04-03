var gulp = require('gulp');
var sass = require('gulp-sass');
var sassdoc = require('sassdoc');
var styledown = require('gulp-styledown');

gulp.task('sassdoc', function() {
	return gulp.src('./src/css/**/*.scss')
		.pipe(sassdoc({
			dest: './documentation/sassdoc-gulp',
			theme: './sassdoc-theme-example'
		}))
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('styledown', function() {
	// typically you'd glob everything here, but for this demo, we'll keep things obvious
	return gulp.src(['./src/css/style.scss', './src/css/**/*.scss'])
		.pipe(styledown({
			config: './src/css/style-guide.scss',
			filename: 'gulp.html'
		}))
		.pipe(gulp.dest('./documentation/style-guide/'));
});

gulp.task('default', ['sassdoc', 'styledown']);