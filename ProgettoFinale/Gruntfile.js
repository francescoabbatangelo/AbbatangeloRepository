module.exports = function (grunt) {
    grunt.initConfig({
        serve: { // Crea server web
            options: {
                port: 9000
            }
        },
        browserify: { // Mixer tra js e jquery
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
        cssmin: { //Minifica i css
            target: {
                src: ["node_modules/bootstrap/dist/css/bootstrap.min.css", "src/css/index.css"],
                dest: "dist/css/style.min.css"
            }
        },
        uglify: { //Minifica i js
            build: {
                src: "src/js/bundle-es5.js",
                dest: "dist/js/app.min.js"
            }

        },
        babel: { // da ema6 a ema5
            options: {
                presets: ['env']
            },
            dist: {
                files: {
                    'src/js/bundle-es5.js': 'src/js/bundle.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    //grunt.task.registerTask('build', ['browserify', 'serve']);

    // da less a css - aggiunge jquery nel js - rimane in ascolto per le modifiche js e css (compilatore)
    //grunt.task.registerTask('develop', ['less', 'browserify', 'watch']);


    // minimizzare css - aggiunge jquery nel js - da ECMA 6 a ECMA 5 - comprime js - avvia server
    //grunt.task.registerTask('build', ['cssmin', 'browserify', 'babel', 'uglify', 'serve']);

    grunt.task.registerTask('passo1_js', ['browserify']);
    grunt.task.registerTask('passo2_js', ['babel']);
    grunt.task.registerTask('passo3_js', ['uglify']);

    grunt.task.registerTask('min_mix_css', ['cssmin']);


};