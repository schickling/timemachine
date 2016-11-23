module.exports = function(grunt) {

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
    uglify: {
      dist: {
        src: 'src/timemachine.js',
        dest: 'timemachine.min.js'
      },
    },
    copy: {
      dist: {
        files: [{
          src: 'src/timemachine.js',
          dest: 'timemachine.js'
        }]
      }
    },
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        commitFiles: ['package.json', 'bower.json'],
        tagName: '%VERSION%',
      },
    }
  });

  grunt.registerTask('build', [
    'test',
    'uglify',
    'copy'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'karma'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
