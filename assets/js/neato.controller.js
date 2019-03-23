(function() {
    'use strict';
  
    angular
      .module('gladys')
      .controller('neatoCtrl', neatoCtrl);
  
    neatoCtrl.$inject = ['neatoService', 'paramService', '$scope'];
  
    function neatoCtrl(neatoService, paramService, $scope) {
      var vm = this;
      vm.ready = false;
      vm.botName = "";
      vm.saveConfig = saveConfig;

      activate()

      function activate() {
        vm.ready = true;
      }
  
      function saveConfig(){
      var neatoDevice = {
        'neatoName': vm.botName
      }



        return neatoService.saveConfig(neatoDevice)
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