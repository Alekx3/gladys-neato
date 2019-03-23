(function() {
    'use strict';
  
    angular
      .module('gladys')
      .factory('neatoService', neatoService);
  
      neatoService.$inject = ['$http', 'Notification', '$translate'];
  
    function neatoService($http, Notification, $translate) {
  
      var service = {
        saveConfig: saveConfig,
        successNotificationTranslated: successNotificationTranslated,
        errorNotificationTranslated: errorNotificationTranslated
      };
  
      return service;
  
      function saveConfig(options) {
        return $http({ method: 'PATCH', url: '/neato/save/', data: options });
      }


      function successNotificationTranslated(key, complement) {
        return $translate(key)
          .then(function(text) {
            if (complement) text += complement;
            Notification.success(text);
          });
      }
  
      function errorNotificationTranslated(key, complement) {
        return $translate(key)
          .then(function(text) {
            if (complement) text += complement;
            Notification.error(text);
          });
      }
    }
})();