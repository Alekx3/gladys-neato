var botvac = require('node-botvac');


module.exports = function() {

    var client = new botvac.Client();
    //Load parameters from Gladys, user should have set NEATO_ACCOUNT_USERNAME, NEATO_ACCOUNT_PASSWORD
 return gladys.param.getValues(['NEATO_ACCOUNT_USERNAME', 'NEATO_ACCOUNT_PASSWORD']).spread((account_username, account_password) => {

    client.authorize(account_username, account_password, false, function (error) {
        if (error) {
            console.log(error);
            return;
    }

    client.getRobots(function (error, robots) {
        if (error) {
            console.log(error);
            return;
        }
        if (robots.length) {
            //Start cleaning      
            robots[0].getState(function (error) {
            
            robots[0].startCleaning(false, 1, false, function (error, result) {
               console.log(result);
            });
        });
        }
    });
});
});


}