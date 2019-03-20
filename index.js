module.exports = function (sails) {

    var setup = require('./lib/setup.js');
    var setup = require('./lib/exec.js');
    var getRobot = require('./lib/neato/neatoGetRobot.js');
    var startCleaning = require('./lib/neato/neatoStartCleaning.js');
    var stopCleaning = require('./lib/neato/neatoStopCleaning.js');


    return {
        setup,
        exec,
        getRobot,
        startCleaning,
        stopCleaning
    };
};