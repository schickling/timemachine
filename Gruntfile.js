module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/timemachine.js'
      ]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
  });

  grunt.registerTask('test', [
    'jshint',
    'karma'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};