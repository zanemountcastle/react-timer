var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
      browsers: ['Chrome'],
      singleRun: true,
      frameworks: ['mocha'],
      files: ['app/tests/**/*.test.jsx'], // all files in tests or subfolders with .test
      preprocessors: {
        'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
      },
      reporters: ['mocha'],
      client: {
        mocha: {
          timeout: '5000' // fail after 5 seconds
        }
      },
      webpack: webpackConfig,
      webpackServer: {
        noInfo: true
      }
  });
};
