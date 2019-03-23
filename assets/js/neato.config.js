var translationsEN = {
    SAVE_SETTINGS: "Save & Configure Neato",
    SPECIFY_NAME: "Specify a name for your Bot",
    NEATO_NAME: "Name of your Neato Bot",
    CONFIG_SAVE: "Successfully configured",
    CONFIG_UNSAVE: "Error when saving your settings."
  };

  angular
    .module('gladys')
    .config(['$translateProvider', function($translateProvider) {
      // add translation table
      $translateProvider
        .translations('en', translationsEN)
  }]);