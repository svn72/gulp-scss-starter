"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import cleanCSS from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import plumber from "gulp-plumber";
import browsersync from "browser-sync";
import debug from "gulp-debug";
const sass = require('gulp-sass')(require('sass'));

gulp.task("styles", () => {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false,
            grid: true
        }))
        .pipe(cleanCSS({
            format: 'beautify',
            compatibility: "*",
            level: {
                1: {
                    specialComments: 0,
                    removeEmpty: true,
                },
                2: {
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            }
        }))
        .pipe(plumber.stop())
        .pipe(sourcemaps.write("./maps/"))
        .pipe(gulp.dest(paths.styles.dist))
        .pipe(debug({
            "title": "CSS files"
        }))
        .on("end", browsersync.reload);
});

gulp.task("additionalStyles", () => {
    return gulp.src(paths.additionalStyles.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false,
            grid: true
        }))
        .pipe(cleanCSS({
            format: 'beautify',
            compatibility: "*",
            level: {
                1: {
                    specialComments: 0,
                    removeEmpty: true,
                },
                2: {
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            }
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.additionalStyles.dist))
        .pipe(debug({
            "title": "CSS blocks"
        }))
        .on("end", browsersync.reload);
});
