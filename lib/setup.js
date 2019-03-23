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

function dtoreDeviceName(deviceName) {
  var param = {
    name: "NEATO_NAME",
    value: deviceName
  }
  gladys.param.setValue(param)
  .then(function(param){
      return param
  })
   
}


module.exports = function (deviceName) { 
    try {
      createDevice(deviceName)
      storeDeviceName(deviceName)
    }
    catch(error){
      console.log(error)
      throw error
    }

  
  }
