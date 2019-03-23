module.exports = function (sails) {

    //var setup = require('./lib/setup.js');
    //var exec = require('./lib/exec.js');
    var getRobot = require('./lib/getRobot');
    var test = require('./lib/test');


    return {
        //set\up,
        //exec,
        test,
        getRobot,
    };
};