'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        app: 'app',
        dist: 'dist',

        stylus: {
          compile: {
            options: {
              compress: false,
              use: [
                require('jeet')
              ]
            },
            files: {
              '<%%= app %>/css/style.css': '<%%= app %>/styl/style.styl'
            }
          }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%%= app %>/js/**/*.js'
            ]
        },

        clean: {
            dist: {
                src: ['<%%= dist %>/*']
            },
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd:'<%%= app %>/',
                    src: ['images/**', 'fonts/**', '**/*.html', '!**/*.styl', '!bower_components/**'],
                    dest: '<%%= dist %>/'
                }]
            },
        },
        
        uglify: {
            options: {
                preserveComments: 'some',
                mangle: false
            }
        },

        useminPrepare: {
            html: ['<%%= app %>/index.html'],
            options: {
                dest: '<%%= dist %>'
            }
        },

        usemin: {
            html: ['<%%= dist %>/**/*.html', '!<%%= app %>/bower_components/**'],
            css: ['<%%= dist %>/css/**/*.css'],
            options: {
                dirs: ['<%%= dist %>']
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['stylus']
            },
            stylus: {
                files: '<%%= app %>/styl/**/*.styl',
                tasks: ['stylus']
            },
            livereload: {
                files: ['<%%= app %>/**/*.html', '!<%%= app %>/bower_components/**', '<%%= app %>/js/**/*.js', '<%%= app %>/css/**/*.css', '<%%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'],
                options: {
                    livereload: true
                }
            }
        },

        connect: {
            app: {
                options: {
                    port: 9000,
                    base: '<%%= app %>/',
                    open: true,
                    livereload: true,
                    hostname: '127.0.0.1'
                }
            },
            dist: {
                options: {
                    port: 9001,
                    base: '<%%= dist %>/',
                    open: true,
                    keepalive: true,
                    livereload: false,
                    hostname: '127.0.0.1'
                }
            }
        },

        bowerInstall: {
            target: {
                src: [
                    '<%%= app %>/**/*.html'
                ]
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-bower-install');

    grunt.registerTask('compile-stylus', ['stylus']);
    grunt.registerTask('bower-install', ['bowerInstall']);
    grunt.registerTask('default', ['compile-stylus', 'bower-install', 'connect:app', 'watch']);
    grunt.registerTask('validate-js', ['jshint']);
    grunt.registerTask('server-dist', ['connect:dist']);
    grunt.registerTask('publish', ['compile-stylus', 'clean:dist', 'validate-js', 'useminPrepare', 'copy:dist', 'concat', 'cssmin', 'uglify', 'usemin']);

};