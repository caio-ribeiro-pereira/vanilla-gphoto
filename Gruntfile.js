module.exports = function(grunt) {

  var config = {

    // Clean folders ================================
    clean: {
      dist: ['dist/*']
    },

    // JSHint ========================================
    jshint: {
      dist: ["lib/vanilla-gphoto.js"]
    },

    // Minification ==================================
    uglify: {
      dist: {
        files: {
          "dist/vanilla-gphoto.min.js": ["lib/vanilla-gphoto.js"]
        }
      }
    },

    // Compress ======================================
    compress: {
      dist: {
        options: { mode: 'gzip', level: 9, pretty: true },
        files: [
          {expand: true, flatten: true, src: ['dist/*.js'], dest: 'dist', ext: '.min.gz.js'}
        ]
      }
    }

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask("default", ["clean", "jshint", "uglify", "compress"]);
};
