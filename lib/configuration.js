var Promise = require('bluebird');

function createDevice(deviceName) {

    var newDevice = {
      device: {
        name: deviceName,
        protocol: 'wifi',
        service: 'neato',
        identifier: "0"
      },
      types: [
        {
          type: 'binary',
          category: 'vacuum',
          sensor: false,
          min: 0,
          max: 1
        }
      ]
    };

    gladys.device.create(newDevice)
    .then(function(device){
       console.log("Created Device "+device)
       return device
    })
    .catch(function(err){
        console.log(err);
        throw err;
        
    });
     
}

function storeDeviceName(deviceName) {
  var param = {
    name: "NEATO_NAME",
    value: deviceName
  }
  gladys.param.setValue(param)
  .then(function(param){
      return param
  })
   
}

function sendConfirmation(deviceName) {

  var options = {
    title: "Neato Configuration",
    text: "Neato is now configured - Welcome "+deviceName,

}

gladys.notification.create(options)
    .then(function(notification){
    })
    .catch(function(err){
      console.log(error)
    });
}

module.exports = function (deviceName) { 
    try {
      createDevice(deviceName);
      storeDeviceName(deviceName);
      sendConfirmation(deviceName);
    }
    catch(error){
      console.log(error)
    }

  
  }
