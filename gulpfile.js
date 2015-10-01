/// <vs BeforeBuild='compile' />
var gulp = require('gulp');
var tsd = require('gulp-tsd'); //https://www.npmjs.com/package/gulp-tsd
var ts = require('gulp-typescript'); //https://www.npmjs.com/package/gulp-typescript/
//var tsc = require('gulp-tsc'); //Alternative approach to gulp-typescript https://www.npmjs.com/package/gulp-tsc
var eventStream = require('event-stream');
//var concat = require('gulp-concat');
var concat = require('gulp-concat-sourcemap');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var karma = require('karma').server;
var browserSync = require('browser-sync');
//var changed = require('gulp-changed');
var newer = require('gulp-newer');
//var notify = require("gulp-notify"); opens a toast-window
var print = require('gulp-print');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');

var reload = browserSync.reload;

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: true,
	sortOutput: true
});

var tsTests = ts.createProject({
    declarationFiles: false,
    noExternalResolve: false,
    sortOutput: true
});

/**
 * Get typescript-typings from github for external components listed in tsd.json
 */
gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

/**
 * Install required files (get Typescript-Typings)
 */
gulp.task('install', ['tsd']);

/**
 * Compile sources once, prepare SourceMaps and uglify in parallel
 */
gulp.task('compile', function (callback) {
    runSequence('compileTS', ['repairSourcemaps', 'uglify']
        , callback);
});

/**
 * compile Typescript to Javascript
 */
gulp.task('compileTS', function () {
    var tsResult = gulp.src(['app/**/*.ts', 'typings/**/*.ts'])
                           .pipe(newer('release/js/app.min.js'))
                           .pipe(sourcemaps.init()) //This means sourcemaps will be generated
                           .pipe(ts(tsProject))

    return tsResult.js
                .pipe(concat('app.js')) //You can use other plugins that also support gulp-sourcemaps
                .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../../app/' })) //Now the sourcemaps are added to the .js file
                .pipe(gulp.dest('release/js'))
				//This will minify and rename to foo.min.js
				//see: https://github.com/gulpjs/gulp/blob/master/docs/recipes/minified-and-non-minified.md
});

/**
 * repair SourceMaps to make Typescript-Debugging in VisualStudio possible
 */
gulp.task('repairSourcemaps', function () {
    var workingDir = process.cwd().replace(/\\/g,'/') + '/';
    console.log('Our Working-Directory that will be removed from the paths in the map-file: ' + workingDir);
    return gulp.src('release/js/app.js.map')
                //.pipe(replace('c:/Develop/Web related/KingBolt/KingBoltDemo/',''))
                .pipe(replace(workingDir,''))
                .pipe(print(function (filepath) {
                    return "repairSourcemap: " + filepath;
                }))
                .pipe(gulp.dest('release/js'))
});


/**
 * compress app.js and genereate app.min.js
 */
gulp.task('uglify', function () {
	return gulp.src('release/js/app.js')
				.pipe(uglify())
				.pipe(rename({ extname: '.min.js' }))
				.pipe(gulp.dest('release/js'));
});


/**
 * Compile tests from Typescript to Javascript once
 */
gulp.task('compileTests', function() {
    var tsResult = gulp.src(['test/**/*.spec.ts'])
                       //.pipe(changed('release/test'))
                       .pipe(newer('release/test/tests.js'))
                       .pipe(ts(tsTests));

    return tsResult.js
                .pipe(concat('tests.js'))
                //.pipe(newer('release/test'))
                .pipe(gulp.dest('release/test')) //here we write the normal output

});


/**
 * Compile sources and tests once
 */
gulp.task('compileAll', ['compile','compileTests']);


/**
 * Run Karma-test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});


/**
 * Watch for changed Typescript-files and repeat Tests if files were modified.
 */
gulp.task('watchTest', ['compileAll'], function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done);
});

/**
 * Watch for changed Typescript-files and compile automatically to js-files
 */
gulp.task('watch', function() {
    gulp.watch('**/*.ts', ['compile', 'compileTests']);
});


/**
 * Watch html-Files and app.js for Changes & Reload Webbrowser in case.
 */
gulp.task('serve', function () {
	browserSync({
	notify: false,
	// Customize the BrowserSync console logging prefix
	logPrefix: 'BrowserSync',
	server: {baseDir: "./"}
	});

  	gulp.watch(['./*.html'], reload);
	gulp.watch(['./release/js/app.js'], reload);
});

/**
 * Watch Source-Files (Typescript) for Changes, Recompile & Reload Webbrowser in case.
 */
gulp.task('watchServe', ['watch', 'serve']);

/**
 * Watch Sourcefiles, Compile to JavaScript if Typescript-files were modified, run UnitTests automatically and update Website
 */
gulp.task('default', ['watch', 'serve', 'watchTest']);
