const neatoGetRobot = require('./neato/neatoGetRobot.js');
const neatoAuthenticate = require('./neatoAuthenticate');
const neatoStartCleaning = require('./neato/neatoStartRobot')
const neatoStopCleaning = require('./neato/neatoPauseRobot')
const neatoDeckRobot = require('./neato/neatoDeckRobot')
//

var Promise = require('bluebird');


module.exports = function exec(params) {

    var topic = params.deviceType.deviceTypeIdentifier;
    console.log(topic);
    var botStartable = null;
    var botDockable = null;
    var storeObj = ""


function checkBotStatus(robotInformation)  {
        return new Promise(
            (resolve, reject) => { 
        console.log('Check Actual Bot Status')
        info = robotInformation 
        if(info.availableCommands.start == true) {
            console.log(info.availableCommands.start);
            botStartable = true;
            resolve();
        }else{
            if(info.availableCommands.pause)
            botStartable = false;
            if(info.availableCommands.goToBase){
                botDockable = true
                resolve()
            }else{
                botDockable = false
                resolve()
            }
        }
        
        

    })
}

    function getBotToWork(client) {
        return new Promise(
            (resolve, reject) => { 
        if(botStartable) {
            neatoStartCleaning(client);
            console.log("STARTING_NEATO");
            resolve();

        }else{
            resolve();

        }

    })
    }


   const askBot = function () {
        neatoAuthenticate()
            //.then(result => console.log(result))
            .then(result => Promise.all([
                storeObj = result, 
                neatoGetRobot(result)
                .then(botInfo => checkBotStatus(botInfo))
                .then(botinfo => getBotToWork(storeObj))
            
            ])
            )
            .then(fulfilled => [storeObj = "", console.log("NEATO_COMPLETED")]) 
            .catch(error => console.log(error.message)); 
    };
    
    askBot();

  


}
        

