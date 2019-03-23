module.exports = function (sails) {

    var getRobot = require('./lib/getRobot');
    var test = require('./lib/test');
    var configure = require('./lib/setup');

    return {
        test,
        getRobot,
        configure
    };
};