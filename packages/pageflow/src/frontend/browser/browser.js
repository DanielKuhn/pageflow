import $ from 'jquery';
import _ from 'underscore';

/**
 * Browser feature detection.
 *
 * @since 0.9
 */
pageflow.browser = (function(){
  var tests = {},
      results = {},
      ready = new $.Deferred();

  return {
    off: {},
    on: {},
    unset: {},

    /**
     * Add a feature test.
     *
     * @param name [String] Name of the feature. Can contain whitespace.
     * @param test [Function] A function that either returns `true` or
     *   `false` or a promise that resolves to `true` or `false`.
     * @memberof pageflow.browser
     */
    feature: function(name, test) {
      var s = name.replace(/ /g, '_');

      this.off[s] = function() {
        window.localStorage['override ' + name] = 'off';
        pageflow.log('Feature off: ' + name, {force: true});
      };

      this.on[s] = function() {
        window.localStorage['override ' + name] = 'on';
        pageflow.log('Feature on: ' + name, {force: true});
      };

      this.unset[s] = function() {
        window.localStorage.removeItem('override ' + name);
        pageflow.log('Feature unset: ' + name, {force: true});
      };

      tests[name] = test;
    },

    /**
     * Check whether the browser has a specific feature. This method
     * may only be called after the `#ready` promise is resolved.
     *
     * @param name [String] Name of the feature.
     * @return [Boolean]
     * @memberof pageflow.browser
     */
    has: function(name) {
      if (this.ready().state() != 'resolved') {
        throw 'Feature detection has not finished yet.';
      }

      if (results[name] === undefined) {
        throw 'Unknown feature "' + name +'".';
      }

      return results[name];
    },

    /**
     * A promise that is resolved once feature detection has finished.
     *
     * @return [Promise]
     * @memberof pageflow.browser
     */
    ready: function() {
      return ready.promise();
    },

    /** @api private */
    detectFeatures: function() {
      var promises = {};

      var asyncHas = function(name) {
        var runTest = function() {
          var value, underscoredName = name.replace(/ /g, '_');

          if (pageflow.debugMode() && location.href.indexOf('&has=' + underscoredName) >= 0) {
            value = location.href.indexOf('&has=' + underscoredName + '_on') >= 0;
            pageflow.log('FEATURE OVERRIDDEN ' + name + ': ' + value, {force: true});
            return value;
          }
          else if ((pageflow.debugMode() || pageflow.ALLOW_FEATURE_OVERRIDES) &&
                   window.localStorage &&
                   typeof window.localStorage['override ' + name] !== 'undefined') {
            value = (window.localStorage['override ' + name] === 'on');
            pageflow.log('FEATURE OVERRIDDEN ' + name + ': ' + value, {force: true});
            return value;
          }
          else {
            return tests[name](asyncHas);
          }
        };

        promises[name] = promises[name] || $.when(runTest(name));
        return promises[name];
      };

      asyncHas.not = function(name) {
        return asyncHas(name).pipe(function(result) {
          return !result;
        });
      };

      asyncHas.all = function(/* arguments */) {
        return $.when.apply(null, arguments).pipe(function(/* arguments */) {
          return _.all(arguments);
        });
      };

      $.when.apply(null, _.map(_.keys(tests), function(name) {
        return asyncHas(name).then(function(result) {
          var cssClassName = name.replace(/ /g, '_');

          $('body').toggleClass('has_' + cssClassName, !!result);
          $('body').toggleClass('has_no_' + cssClassName, !result);

          results[name] = !!result;
        });
      })).then(ready.resolve);

      return this.ready();
    }
  };
}());
