const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const svgmin = require("gulp-svgmin");
const cheerio = require("gulp-cheerio");
const replace = require("gulp-replace");

module.exports = function sprite() {
  return gulp
    .src("src/img/sprite/*.svg")
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(replace("&gt;", ">"))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "sprite.svg",
            render: {
              scss: {
                dest: "../../src/styles/utils/_sprite.scss",
                template: "gulp/svg-template.scss",
              },
            },
          },
        },
      })
    )
    .pipe(gulp.dest("build/"));
};
