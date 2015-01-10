module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({
    clean: {
      options: {},
      build: ["public"]
    },
    uglify: {
      options: {
        mangle: false,
      },
      js: {
        options: {
          sourceMap: true, 
          sourceMapIncludeSources: true,
          compress : {
            drop_debugger: false
          }
        },
        files: {
          'public/js/main.min.js': ['dev/js/lib/**/*.js', 'dev/js/**/*.js']
        }
      },
      jsProd: {
        files: {
          'public/js/main.min.js': ['dev/js/lib/**/*.js', 'dev/js/**/*.js']
        }
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: "MyApp.Templates",
          processName: function(filePath) {
            return filePath.replace(/^dev\/templates\//, '').replace(/\.hbs$/, '');
          },
        },
        files: {
          "dev/js/00-templates.js": "dev/templates/**/*.hbs"
        }
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap: 'inline'
        },
        files: [
          {
            expand: true,
            cwd: 'dev/css/',
            src: ['**/*.scss'],
            dest: 'public/css/',
            ext: '.css',
          }
        ],
      },
      distProd: {
        options: {
          sourcemap: 'none'
        },
        files: [
          {
            expand: true,
            cwd: 'dev/css/',
            src: ['**/*.scss'],
            dest: 'public/css/',
            ext: '.css',
          }
        ],
      }
    },
    watch: {
      options: {
        livereload: false
      },
      js: {
        files: ['dev/js/**/*.js'],
        tasks: ['uglify:js'],
        options: {
        }
      },
      templates: {
        files: ['dev/templates/**/*.hbs'],
        tasks: ['handlebars:compile'],
      },
      scss: {
        files: ['dev/css/*.scss'],
        tasks: ['sass:dist'],
        options: {
        }
      },
      css: {
        options: {
          livereload: true
        },
        files: ['public/**/*.css']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask("dev", ['clean:build', 'handlebars:compile', 'uglify:js', 'sass:dist']);
  grunt.registerTask("prod", ['clean:build', 'handlebars:compile', 'uglify:jsProd', 'sass:distProd']);
 
};

