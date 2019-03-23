const neatoGetRobot = require('./neato/neatoGetRobot.js');
const neatoAuthenticate = require('./neatoAuthenticate');
const neatoStartCleaning = require('./neato/neatoStartRobot')

//
var startBot = require('./neatoStartCleaning.js');
var stopBot = require('./neatoStopCleaning.js');

var Promise = require('bluebird');


module.exports = function exec(params) {
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
            console.log("I could start the bot now, if I wanted");
            resolve();

        }else{
            console.log("I could stop the bot, if I wanted");
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
            .then(fulfilled => [storeObj = "", console.log("Operation Succedeed")]) 
            .catch(error => console.log(error.message)); 
    };
    
    askBot();

  


}
        

