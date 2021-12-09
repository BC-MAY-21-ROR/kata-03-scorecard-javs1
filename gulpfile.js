const {dest, sass, watch} = require('gulp');
const sass = require('gulp-sass')

function css(){
  return sass('_sass/**/*.scss')
    .pipe(sass({
      outputStyle:'expanded'
    }))
    .pipe(dest('./css'))
}

function watcharchivos(){
  watch('_sass/**/*.scss',css);
}

exports.watcharchivos = watcharchivos;
exports.css = css;