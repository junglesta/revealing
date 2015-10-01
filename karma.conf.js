module.exports = function(config) {
  config.set({
	//browsers : ['Chrome'],
	browsers : ['PhantomJS'],

    frameworks: ['jasmine'],

    files: [
		'bower_components/angular/angular.js',
		'bower_components/angular-aria/angular-aria.js',
		'bower_components/angular-animate/angular-animate.js',
		'bower_components/hammerjs/hammer.js',
		'bower_components/angular-material/angular-material.js',
      	'bower_components/angular-route/angular-route.js',
      	'bower_components/angular-mocks/angular-mocks.js',
		'release/js/app.min.js',
		'release/test/tests.js'
    ],

	plugins : [
		//'karma-chrome-launcher',
		'karma-phantomJS-launcher',
		'karma-jasmine'
		]
  });
};
