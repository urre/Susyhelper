module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['css/susyhelper.css'],

    sass: {
        dev: {
            options: {
                style: 'expanded',
                lineNumbers: true,
                debugInfo: true,
            },
        files: {
            'css/susyhelper.css': 'scss/susyhelper.scss',
            }
        },
        prod: {
            options: {
             style: 'compressed',
            },
        files: {
            'css/susyhelper.css': 'scss/susyhelper.scss',
            }
        }
    },

    autoprefixer: {
        dist: {
            files: {
                'css/susyhelper.css': 'css/susyhelper.css',
            }
        }
    },

    watch: {
        dev: {
            files: ['css/*', 'scss/*', 'scss/**/*', '*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
            tasks: ['sass:dev', 'autoprefixer'],
            options : {
                livereload : true
            }
        },
        prod: {
            files: ['css/*', 'scss/*', 'scss/**/*', '*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
            tasks: ['sass:prod', 'autoprefixer'],
            options : {
                livereload : true
            }
        },
    },

});

// Load multiple grunt tasks using globbing patterns https://github.com/sindresorhus/load-grunt-tasks
require('load-grunt-tasks')(grunt);

// Default tasks
grunt.registerTask('default', ['autoprefixer', 'clean']);

// Deploy task
grunt.registerTask('deploy', ['shell:deploy']);

};