import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import del from "del";
import browser from "gulp-browserify";
import babelify from "babelify";

sass.compiler = require("node-sass");

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js",
    dest: "src/static/js",
    watch: "assets/js/**/*.js",
  },
};

const clean = () => del("src/static");

const styles = () => {
  // 이 파일이 어떤식으로 바뀔 것인지에 대한 내용
  // 소스파일 위치 설정 후 파이프로 보내기
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));
};

const js = () =>
  gulp
    .src(paths.js.src)
    .pipe(
      browser({
        transform: babelify.configure({
          presets: ["@babel/preset-env"],
        }),
      })
    )
    .pipe(gulp.dest(paths.js.dest));

const watchFiles = () => {
  // styles가 변경되면 변경된 파일만 새로 컴파일
  // 파일의 변화를 감시
  gulp.watch(paths.styles.watch, styles); // gulp.watch(경로, 실행 함수)
  gulp.watch(paths.js.watch, js);
};

const dev = gulp.series([clean, styles, js, watchFiles]);

export default dev;
