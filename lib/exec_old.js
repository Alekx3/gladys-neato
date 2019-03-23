var neatoGetRobot = require('./neato/neatoGetRobot.js/index.js');
var startBot = require('./neatoStartCleaning.js');
var stopBot = require('./neatoStopCleaning.js');
const neatoAuthenticate = require('./neatoAuthenticate');

var Promise = require('bluebird');


module.exports = function exec(params) {
    var botStartable = false;
    var botDockable = false;


    const neatoGetRobot = require('./neato/neatoGetRobot.js/index.js');
    const checkBotStatus = function (info) {
        console.log('Check Actual Bot Status')
        const message = info
        if(info.availableCommands.start) {
            botStartable = true;
        }else{
            if(info.availableCommands.pause)
            botStartable = false;
            if(info.availableCommands.goToBase){
                botDockable = true
            }
        }
        
        return Promise.resolve(message);
    };

    const getBotToWork = function (info) {
        if(botStartable) {
            startBot();
        }else{
            stopBot();

        }
    }

    const askBot = function () {
        neatoGetRobot
            .then(checkBotStatus)
            //.then(getBotToWork)
            .then(fulfilled => console.log("ALL DONE CAPTAIN!")) 
            .catch(error => console.log(error.message)); 
    };
    
    askBot();

  


}
        

