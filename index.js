module.exports = function (sails) {

    var getRobot = require('./lib/neato/neatoGetRobot.js');
    var startCleaning = require('./lib/neato/neatoStartCleaning.js');
    var stopCleaning = require('./lib/neato/neatoStopCleaning.js');
    //To add Setup & Exec

    return {
        setup,
        exec,
        getRobot,
        startCleaning,
        stopCleaning
    };
};