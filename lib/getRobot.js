const neatoGetRobot = require('./neato/neatoGetRobot.js');
const neatoAuthenticate = require('./neatoAuthenticate');
var Promise = require('bluebird');


module.exports = function () {

   const retrieveBotInfo = function () {
        neatoAuthenticate()
            .then(result => neatoGetRobot(result)
                .then(botInfo => console.log(botInfo)           
            ))
            .then(sendPm)       
            .catch(error => console.error(error.message))
    };
    
    retrieveBotInfo();

  


}
        

