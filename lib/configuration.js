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
    .then(function(newDevice){
      resolve(newDevice);
    })
    .catch(function(error) {
      console.log(error);
      reject(error);
    });
    
    });
    
     
}

function storeDeviceName(deviceName) {
  return new Promise(
    (resolve, reject) => { 
  var param = {
    name: "NEATO_NAME",
    value: deviceName
  }
   gladys.param.setValue(param)
   .then(function(param){
    resolve(param);
  })
  .catch(function(error) {
    console.log(error);
    reject(error);
  });
})
   
}

function sendConfirmation(deviceName) {
  return new Promise(
    (resolve, reject) => { 
  var options = {
    title: "Neato Configuration",
    text: "Neato is now configured - Welcome "+deviceName,
  }

   gladys.notification.create(options)
   .then(function(options){
    resolve(options);
  })
  .catch(function(error) {
    console.log(error);
    reject(error);
  });

  })
}

module.exports = function (deviceName) { 
  if (deviceName.length) {
    const setupBot = function () {
      createDevice(deviceName)
          .then(storeDeviceName(deviceName))
          .then(sendConfirmation(deviceName))
          .catch(error => console.error(error.message))
  };


  setupBot();
}

  
  }
