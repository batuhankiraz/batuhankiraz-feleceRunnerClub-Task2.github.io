module.exports = function(grunt){

    //Configurate the Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json') ,
    /*
      concat: {
        js: {
          //source
          //destination
        },
        css: {
          //source
          //destination
        }
      },

      clean: {
      
        //build: ['path/to/dir/one', 'path/to/dir/two'],
        //release: ['path/to/another/dir/one', 'path/to/another/dir/two']
    
      }, 

      autoprefixer: {
        options: {
          // Task-specific options go here.
        },
        my_target: {
          // Target-specific file lists and/or options go here.
        },
      },

      */

      //LESS and WATCH

        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "css/main.css": "less/main.less" // destination file & source file
            }
          }
        },

        watch: {
          styles: {
            files: ['less/**/*.less'], // which files for watch
            tasks: ['less'],
            options: {
              nospawn: true
            }
          }
        }

    });

    // My Registered Tasks

    grunt.registerTask('My_LessWatcher',['less','watch']);
    
    // Felece Runner Club Task-2 Ordered Load Grunt-Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-browser-sync');

};