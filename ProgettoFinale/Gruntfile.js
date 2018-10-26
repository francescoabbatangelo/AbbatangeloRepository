module.exports = function (grunt) {
    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        },
        browserify: {
            dist: {
                files: {
                    'src/js/bundle.js': 'src/js/index.js'
                }
            }
        },
        watch: {
            files: {
                files: 'src/js/index.js',
                tasks: 'browserify'
            }
        },
        cssmin: {
            target: {
                src: ["node_modules/bootstrap/dist/css/bootstrap.min.css", "src/css/index.css"],
                dest: "dist/css/style.min.css"
            }
        },
        uglify: {
            build: {
                src: "src/js/bundle-es5.js",
                dest: "dist/js/app.min.js"
            }

        },
        babel: {
            options: {
                presets: ['env']
            },
            dist: {
                files: {
                    'src/js/bundle-es5.js': 'src/js/bundle.js'
                }
            }
        },
        less: {
            target: {
                src: "src/css/index.less",
                dest: "src/css/index.css"
            }
        },
    });
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-less');


    grunt.task.registerTask('develop', ['less', 'browserify', 'watch']);
    //grunt.task.registerTask('build', ['cssmin', 'browserify', 'babel', 'uglify', 'serve']);

    grunt.task.registerTask('passo1_js', ['browserify']);
    grunt.task.registerTask('passo2_js', ['babel']);
    grunt.task.registerTask('passo3_js', ['uglify']);

    grunt.task.registerTask('less_css', ['less']);
    grunt.task.registerTask('min_mix_css', ['cssmin']);

    grunt.task.registerTask('js', ['browserify','babel','uglify']);
    grunt.task.registerTask('css', ['less','cssmin']);
};

// cssmin: Minimizza il CSS
// browserify: Unisce i file JS. (Nel nostro caso jquery e il js)
// babel: Trasforma il codice da ECMA 6 a ECMA 5
// uglify: Comprime i file JS. Diventano .min
// serve: Crea un webserver
// less: Trasforma i file LESS in CSS
// watch: Controlla quello per cui è configurato (Nel nostro caso controlla l'index.js)