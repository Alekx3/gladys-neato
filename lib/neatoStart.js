const neatoGetRobot = require('./neato/neatoGetRobot.js');
const neatoAuthenticate = require('./neatoAuthenticate');
const neatoStartCleaning = require('./neato/neatoStartRobot')
//

var Promise = require('bluebird');


module.exports = function() {

    var botStartable = null;
    var storeObj = ""


function checkBotStatus(robotInformation)  {
        return new Promise(
            (resolve, reject) => { 
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
        

