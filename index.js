module.exports = function (sails) {

    var getRobot = require('./lib/getRobot');
    var test = require('./lib/test');
    var setup = require('./lib/setup');

    return {
        test,
        setup,
        getRobot,
        configure
    };
};