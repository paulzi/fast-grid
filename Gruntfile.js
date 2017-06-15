module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            example: {
                files: [{
                    expand: true,
                    cwd: 'docs',
                    src: ['*.scss'],
                    dest: 'docs',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass:example']);
};