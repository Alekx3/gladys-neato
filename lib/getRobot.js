const neatoGetRobot = require('./neato/neatoGetRobot.js');
const neatoAuthenticate = require('./neatoAuthenticate');
var Promise = require('bluebird');


function sendPm() {
    gladys.message.send(1, "I have found Your Neato!")
    .then(function(message){
        // message sended
    })
    .catch(function(err){
        // something bad happened ! :/
    });

}

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
        

