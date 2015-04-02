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
	// typically you'd glob everything here, but for this demo, we're keeping it pointed
	return gulp.src('./src/css/modules/*.scss')
		.pipe(styledown({
			config: './src/css/style-guide.scss',
			filename: 'gulp.html'
		}))
		.pipe(gulp.dest('./documentation/style-guide/'));
});

gulp.task('default', ['sassdoc', 'styledown']);