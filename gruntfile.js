module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

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
		},

		styledown: {
			build: {
				files: {
					'./documentation/style-guide/grunt.html': ['src/css/modules/_buttons.scss']
				},
				options: {
					config: 'src/css/style-guide.scss',
					title: 'TEST Demo'
				}
			},
		},

		// concatenate any plugins or libraries in /vendor with your scripts
		// (we're really only moving a single file in this example, but whatevs.)
	    concat: {
	      dist: {
	        src: [
	          'src/js/style-guide.js',
	        ],
	        dest: 'dist/js/style-guide.js'
	      }
	    }

	});

	// this allows easier task management
	// see https://github.com/sindresorhus/load-grunt-tasks for details
	require('load-grunt-tasks')(grunt);

	// Default Task is basically a rebuild
	grunt.registerTask('default', ['sass', 'styledown', 'concat']);
};