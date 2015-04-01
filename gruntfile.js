module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		styledown: {
			build: {
				files: {
					'dist/styleguide/index.html': ['src/style-guide.scss']
				},
				options: {
					css: ['dist/css/style.css', 'dist/css/style-guide.css'],
					js: 'dist/js/style-guide.js',
					title: 'Style Guide'
				}
			},
		},

		// set up sass task for initial sass processing
		sass: {
			dist: {
				options: {
					style: 'expanded',
				},
				files: {
					// destination : source
					'dist/css/style.css': 'src/css/style.scss',
					'dist/css/style-guide.css': 'src/css/style-guide.scss'
				},
			}
		}

	});

	// this allows easier task management
	// see https://github.com/sindresorhus/load-grunt-tasks for details
	require('load-grunt-tasks')(grunt);

	// Default Task is basically a rebuild
	grunt.registerTask('default', [ 'jshint', 'concat', 'uglify', 'sass', 'autoprefixer', 'cssmin', 'imagemin']);

	// dev task does it all, polls for updates, and starts up the livereload server
	grunt.registerTask('dev', ['connect', 'watch']);

};