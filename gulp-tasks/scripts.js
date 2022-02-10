"use strict";

import { paths } from "../gulpfile.babel";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import gulp from "gulp";
import browsersync from "browser-sync";
import debug from "gulp-debug";

const webpackConfig = require("../webpack.config.js");

webpackConfig.mode = "development";
webpackConfig.devtool = "source-map";

gulp.task("scripts", () => {
    return gulp.src(paths.scripts.src)
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest(paths.scripts.dist))
        .pipe(debug({
            "title": "JS files"
        }))
        .pipe(browsersync.stream());
});
