'use strict';

angular.module('ui-common').directive('ysAutofocus', ['$timeout', function($timeout) {
  return {
    link: function(scope, element, attrs) {
      // Workaround for ui-mask:
      // Sometimes ui-mask isn't initialized when the input is focused,
      // placing the cursor in the incorrect position. This gives ui-mask
      // some time to initialize
      setTimeout(function() {
        element[0].focus();
      }, 100);
    }
  };
}]);
