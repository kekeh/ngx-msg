var gulp = require('gulp');
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var sequence = require('run-sequence');
var cleancss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var fs = require('fs');
var tslint = require('gulp-tslint');
var shell = require('gulp-shell');
var jeditor = require("gulp-json-editor");

var str1 = '// webpack1_';
var str2 = '// webpack2_';
var str3 = '/*';
var str4 = '*/';

/*
*
* Gulp tasks to build src and bundle versions.
*  - Minifies the css file.
*  - Minifies the html template file.
*  - Add html template and styles as inline templates to the ngx-msg.component.
*  - Creates npmdist folder - contain files needed to publish to npm.
*
*/

gulp.task('clean', function () {
    return gulp.src(['./build-example', './tmp', './test-output', './.tmpbuild', './npmdist'], {read: false}).pipe(clean());
});

gulp.task('backup.component.tmp', function() {
    return gulp.src('./src/ngx-msg/ngx-msg.component.ts').pipe(gulp.dest('./tmp'));
});

gulp.task('minify.css', function() {
    return gulp.src('./src/ngx-msg/ngx-msg.component.css')
        .pipe(cleancss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./tmp'));
});

gulp.task('minify.html', function() {
    return gulp.src('./src/ngx-msg/ngx-msg.component.html')
        .pipe(htmlmin({collapseWhitespace: true, caseSensitive: true}))
        .pipe(gulp.dest('./tmp'));
});

gulp.task('inline.template.and.styles.to.component', function() {
    var styles = fs.readFileSync('./tmp/ngx-msg.component.css', 'utf-8');
    var htmlTpl = fs.readFileSync('./tmp/ngx-msg.component.html', 'utf-8');

    styles = styles.split('\\e').join('\\\\e');

    return gulp.src(['./src/ngx-msg/ngx-msg.component.ts'])
        .pipe(replace(str1, str3))
        .pipe(replace(str2, str4))
        .pipe(replace('styles: [ngxMsgStyles],', 'styles: [' + '`' + styles + '`' + '],'))
        .pipe(replace('template: ngxMsgTpl', 'template: `' + htmlTpl + '`' + ','))
        .pipe(gulp.dest(function(file) {
            return file.base;
        }));
});

gulp.task('ngc.compile.publish', shell.task([
    'npm run ngc'
]));

gulp.task('copy.build.to.npmdist.directory', function() {
    return gulp.src(
        [
            '!./.tmpbuild/src/*.spec.*',
            './.tmpbuild/src/**/*.*'
        ]).pipe(gulp.dest('./npmdist/src/'));
});

gulp.task('delete.tmpbuild.folder', function () {
    return gulp.src(['./.tmpbuild'], {read: false}).pipe(clean());
});

gulp.task('build.bundle', shell.task([
    'npm run bundle'
]));

gulp.task('copy.files.to.npmdist.root.dir', function() {
    return gulp.src(
        [
            './LICENSE',
            './FONT-LICENSE',
            './package/README.md',
            './package/index.d.ts',
            './package/index.js'
        ]).pipe(gulp.dest('./npmdist'));
});

gulp.task('edit.package.json.and.copy.to.npmdist.root.dir', function () {
    gulp.src("./package.json")
        .pipe(jeditor(function(json) {
            json.scripts = {};
            json.devDependencies = {};
            json.files = [
                'index.d.ts', 'index.js', 'LICENSE', 'FONT-LICENSE', 'package.json', 'README.md', 'src', 'bundles'
            ];
            return json;
        }))
        .pipe(gulp.dest("./npmdist"));
});

gulp.task('delete.modified.component', function () {
    return gulp.src(['./src/ngx-msg/ngx-msg.component.ts'], {read: false}).pipe(clean());
});

gulp.task('restore.original.component', function() {
    return gulp.src('./tmp/ngx-msg.component.ts').pipe(gulp.dest('./src/ngx-msg/'));
});

gulp.task('delete.tmp', function () {
    return gulp.src(['./tmp'], {read: false}).pipe(clean());
});

gulp.task('tslint', function () {
    return gulp.src([
        "src/ngx-msg/directives/*.ts",
        "src/ngx-msg/interfaces/*.ts",
        "src/ngx-msg/services/*.ts",
        "src/ngx-msg/index.ts",
        "src/ngx-msg/ngx-msg.component.ts",
        "src/ngx-msg/ngx-msg.module.ts"])
        .pipe(tslint({
            configuration: "tslint.json"
        }))
        .pipe(tslint.report({
            emitError: false
        }));
});

gulp.task('all', function(cb) {
    sequence(
        'clean',
        'backup.component.tmp',
        'minify.css',
        'minify.html',
        'inline.template.and.styles.to.component',
        'ngc.compile.publish',
        'copy.build.to.npmdist.directory',
        'delete.tmpbuild.folder',
        'build.bundle',
        'copy.files.to.npmdist.root.dir',
        'edit.package.json.and.copy.to.npmdist.root.dir',
        'delete.modified.component',
        'restore.original.component',
        'delete.tmp',
        'tslint',
        cb);
});
