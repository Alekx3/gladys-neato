module.exports = function (sails) {

    var getRobot = require('./lib/getRobot');
    var test = require('./lib/test');
    var setup = require('./lib/setup');
    var exec = require('./lib/exec');
    
    return {
        test,
        setup,
        getRobot,
        exec
    };
};