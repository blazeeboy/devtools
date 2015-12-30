/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'devtools',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' www.google-analytics.com use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com *.togetherjs.com togetherjs.com",
      'font-src': "'self' data: use.typekit.net *.togetherjs.com togetherjs.com",
      'connect-src': "'self' *.togetherjs.com togetherjs.com *.ytimg.com",
      'img-src': "'self' www.facebook.com p.typekit.net www.google-analytics.com *.togetherjs.com togetherjs.com avatars.githubusercontent.com",
      'style-src': "'self' 'unsafe-inline' use.typekit.net *.togetherjs.com togetherjs.com",
      'frame-src': "'self' s-static.ak.facebook.com static.ak.facebook.com www.facebook.com *.togetherjs.com togetherjs.com docs.google.com",
      "media-src": "'self' togetherjs.com *.togetherjs.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/devtools';
  }

  if (environment === 'chrome') {
    ENV.baseURL = '/app';
  }

  return ENV;
};
