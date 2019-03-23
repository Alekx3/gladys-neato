const neatoGetRobot = require('./neato/neatoGetRobot.js');
const neatoAuthenticate = require('./neatoAuthenticate');


//
var startBot = require('./neatoStartCleaning.js');
var stopBot = require('./neatoStopCleaning.js');

var Promise = require('bluebird');


module.exports = function exec(params) {
    var botStartable = false;
    var botDockable = false;
    var storeObj = ""


    function checkBotStatus(robotInformation)  {
        console.log('Check Actual Bot Status')
        info = robotInformation 
        if(info.availableCommands.start) {
            botStartable = true;
        }else{
            if(info.availableCommands.pause)
            botStartable = false;
            if(info.availableCommands.goToBase){
                botDockable = true
            }
        }
        
        return Promise.resolve(info);
    }

    function getBotToWork(client) {
        if(botStartable) {
            
            console.log("I could start the bot now, if I wanted");
        }else{
            console.log("I could stop the bot, if I wanted");

        }
    }


   const askBot = function () {
        neatoAuthenticate()
            //.then(result => console.log(result))
            .then(result => Promise.all([storeObj = result, neatoGetRobot(result)
                .then(botInfo => checkBotStatus(botInfo)
                
            )]))
            .then(getBotToWork(storeObj)
            
            
            
            
            )
            .then(fulfilled => [storeObj = "", console.log("Operation Succedeed")]) 
            .catch(error => console.log(error.message)); 
    };
    
    askBot();

  


}
        

