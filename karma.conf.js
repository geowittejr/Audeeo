// Karma configuration
// Generated on Sun Oct 02 2016 18:28:13 GMT-0400 (Eastern Daylight Time)
//https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1

module.exports = function(config) {

  var configuration = {

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'dist/src/**', included: false, watched: false, served: true},
      {pattern: 'node_modules/**', included: false, watched: false, served: true},
      'dist/test/**/*spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // set a custom launcher for Chrome on Travis
    // https://swizec.com/blog/how-to-run-javascript-tests-in-chrome-on-travis/swizec/6647
    customLaunchers: {
      Chrome_Travis_CI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // plugins that will be required by Karma
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  }

  //If we're on Travis CI, use the custom Chrome browser launcher
  if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_Travis_CI'];
  }

  config.set(configuration)
}
