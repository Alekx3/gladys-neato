module.exports = function (sails) {

    var setup = require('./lib/setup.js');
    //var exec = require('./lib/exec.js');
    var getRobot = require('./lib/getRobot');



    return {
        setup,
        //exec,
        getRobot,
    };
};