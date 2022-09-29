module.exports = function(grunt) {

  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

var PathConfig = require('./grunt-settings.js');

  // tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: PathConfig,

    //clean files
    clean: {
      options: { force: true },
      temp: {
        src: ["<%= config.cssDir %>**/*.map", "<%= config.imgDir %>", "<%= config.cssMainFileDir %><%= config.cssMainFileName %>.css.map", "./jpgtmp.jpg"]
      }
    },

    //sass
    sass: {
      options: PathConfig.hasBower,
      dev: {
        options: {
          implementation: sass,
          sourceMap: true,
          style: 'nested'
        },
        files: [
          {
            expand: true,
            cwd: '<%= config.sassDir %>',
            src: ['**/*.scss', '!<%= config.sassMainFileName %>.scss'],
            dest: '<%= config.cssDir %>',
            ext: '.css'
          },
          {src: '<%= config.sassDir %><%= config.sassMainFileName %>.scss', dest: '<%= config.cssMainFileDir %><%= config.cssMainFileName %>.css'}
        ]
      },
      dist: {
        options: {
          implementation: sass,
          sourceMap: false,
          style: 'nested'
        },
        files: [
          {
            expand: true,
            cwd: '<%= config.sassDir %>',
            src: ['**/*.scss', '!<%= config.sassMainFileName %>.scss'],
            dest: '<%= config.cssDir %>',
            ext: '.css'
          },
          {src: '<%= config.sassDir %><%= config.sassMainFileName %>.scss', dest: '<%= config.cssMainFileDir %><%= config.cssMainFileName %>.css'}
        ]
      },
      min: {
        options: {
          implementation: sass,
          sourceMap: false,
          outputStyle: 'compressed'
        },
        files: [
          {
            expand: true,
            cwd: '<%= config.sassDir %>',
            src: ['**/*.scss', '!<%= config.sassMainFileName %>.scss'],
            dest: '<%= config.cssDir %>',
            ext: '.min.css'
          },
          {src: '<%= config.sassDir %><%= config.sassMainFileName %>.scss', dest: '<%= config.cssMainFileDir %><%= config.cssMainFileName %>.min.css'}
        ]
      }
    },

    //watcher project
    watch: {
      options: {
        debounceDelay: 1,
        // livereload: true,
      },
      css: {
        files: ['<%= config.sassDir %>**/*.scss'],
        tasks: ['sass:dev'],
        options: {
            spawn: false,
        }
      }
    },

    //Keep multiple browsers & devices in sync when building websites.
    browserSync: {
      dev: {
        bsFiles: {
          src : ['*.html', '*.php', '<%= config.cssDir %>*.css', '*.css']
        },
        options: {
          // server: {
          //   baseDir: "../",
          //   index: "index.html",
          //   directory: true
          // },
          proxy: '<%= config.browserSyncUrl %>',
          open: 'external',
          host: '<%= config.browserSyncUrl %>',
          watchTask: true
        }
      }
    },


  });

// run task
//dev 
  //watch
  grunt.registerTask('w', ['watch']);
  //browser sync
  grunt.registerTask('bs', ['browserSync']);

  //watch + browser sync
  grunt.registerTask('dev', ['browserSync', 'watch']);
  
  grunt.registerTask('default', ['dev']);

//finally 
  //css beautiful
  grunt.registerTask('cssbeauty', ['sass:dist']);

  //final build
  grunt.registerTask('dist', ['clean:temp', 'cssbeauty']);

};
