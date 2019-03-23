module.exports = function (sails) {

    var getRobot = require('./lib/getRobot');
    var test = require('./lib/test');
    var configure = require('./lib/configuration');

    return {
        test,
        getRobot,
        configure
    };
};