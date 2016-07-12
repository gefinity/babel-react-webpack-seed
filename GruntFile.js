"use strict";

module.exports = function (grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({

        publicDir: "./public",
        tmpDir: "./.tmp",

        clean: {
            dev: [
                "<%= tmpDir %>/*"
            ]
        },

        copy: {
            normalise: {
                src: "node_modules/normalize.css/normalize.css",
                dest: "<%= tmpDir %>/css/normalise.css"
            }
        },

        connect: {
            dev: {
                options: {
                    port: 4000,
                    base: ["<%= tmpDir %>", "<%= publicDir %>"],
                    livereload: true,
                    open: true
                }
            }
        },

        watch: {
            index: {
                files: ["<%= publicDir %>/index.html"],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    "<%= tmpDir %>/js/**/*.js"
                ],
                tasks: [],
                options: {
                    livereload: true
                }
            }
        },

        webpack: {
            options: require("./webpack.config.js"),
            dev: {
                devtool: "source-map",
            },
            watch: {
                watch: true,
                keepalive: true,
                devtool: "source-map",
                //devtool: "eval-source-map",
                //devtool: "eval-cheap-module-source-map"
            },
            prod: {
                devtool: "source-map",
            }
        },
        
        concurrent: {
            dev: ["webpack:watch", "watch"],
            options: {
                logConcurrentOutput: true
            }
        }

    });
    
    grunt.registerTask("default", [
        "clean:dev",
        "copy:normalise",
        "webpack:dev",
        "connect:dev",
        "concurrent:dev"
    ]);

};