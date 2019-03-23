(function() {
    'use strict';
  
    angular
      .module('gladys')
      .controller('neatoCtrl', neatoCtrl);
  
    neatoCtrl.$inject = ['neatoService', 'paramService', '$scope'];
  
    function neatoCtrl(neatoService, paramService, $scope) {
      /* jshint validthis: true */
      var vm = this;
  
      vm.saveConfig = saveConfig;


  
      function saveConfig(){
      var neatoDevice = {
        'neatoName': friendlyName.trim()
      }
  

        return neatoService.saveConfig(neatoService)
          .then(function(answer) {
            if (answer.status == 200) {
              if (answer.data === 'SAVE_SUCCESS') {
                neatoService.successNotificationTranslated('CONFIG_SAVE');
              } else {
                neatoService.errorNotificationTranslated('CONFIG_UNSAVE')
              }
            } else {
                neatoService.errorNotificationTranslated('CONFIG_UNSAVE')
            }
          })
      }
    }
  })();