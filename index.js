module.exports = function (sails) {

    var getRobot = require('./lib/getRobot');
    var test = require('./lib/test');
    var startRobot = require('./lib/startRobot');
    var setup = require('./lib/setup');
    var exec = require('./lib/exec');
    
    return {
        test,
        setup,
        getRobot,
        startRobot,
        exec
    };
};