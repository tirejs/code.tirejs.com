module.exports = function (grunt) {
  
  // Project configuration.
  grunt.initConfig({
    sizediff: {
      dist: {
        src: [
          'dist/tire.js',
          'dist/tire.min.js'
        ]
      }
    }
  });
	
	// Load the plugin that provides the "sizediff" task.
	grunt.loadNpmTasks('grunt-sizediff');
	
	// Default task(s).
	grunt.registerTask('default', ['sizediff']);
	
};
