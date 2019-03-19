var neatoGetRobot = require('./neato/neatoGetRobot.js');
var startBot = require('./neato/neatoStartCleaning.js');
var stopBot = require('./neato/neatoStopCleaning.js');

var Promise = require('bluebird');


module.exports = function exec(params) {
    var botStartable = false;
    var botDockable = false;


    const neatoGetRobot = require('./neato/neatoGetRobot.js');
    const checkBotStatus = function (info) {
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
            .then(getBotToWork)
            .then(fulfilled => console.log("ALL DONE CAPTAIN!")) // fat arrow
            .catch(error => console.log(error.message)); // fat arrow
    };
    
    askBot();

  


}
        

