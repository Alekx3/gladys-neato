module.exports = function(){

    return gladys.param.getValue("NEATO")
      .then(function(param){
  
        //Setup new Device
        var newDevice = {
          device: {
            name: 'Moku',
            protocol: 'wifi',
            service: 'neato',
            identifier: "0"
          },
          types: [
            {
              type: 'binary',
              //Cant't find "Vacuum" so will use outlet
              category: 'outlet',
              sensor: false,
              min: 0,
              max: 1
            }
          ]
        };
  
        gladys.device.create(newDevice);
  
      })
      .catch(function(err){
        return Promise.reject(new Error('No device found.'));
      });
  };