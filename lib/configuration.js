var Promise = require('bluebird');

function createDevice(deviceName) {
  return new Promise(
    (resolve, reject) => { 
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
    .then(function(params){
      resolve(device);
    })
    .catch(function(error) {
      console.log(error);
      reject(error);
    })
    
    });
    
     
}

function storeDeviceName(deviceName) {
  return new Promise(
    (resolve, reject) => { 
  var param = {
    name: "NEATO_NAME",
    value: deviceName
  }
   var nameDevice = gladys.param.setValue(param);
   resolve(nameDevice);
})
   
}

function sendConfirmation(deviceName) {
  return new Promise(
    (resolve, reject) => { 
  var options = {
    title: "Neato Configuration",
    text: "Neato is now configured - Welcome "+deviceName,

}

   var sendMessage = gladys.notification.create(options);
   resolve(sendMessage);


  })
}

module.exports = function (deviceName) { 
    const setupBot = function () {
      createDevice()
          .then(storeDeviceName(deviceName))
          .then(sendConfirmation(deviceName))
          .catch(error => console.error(error.message))
  };

  setupBot();

  
  }
