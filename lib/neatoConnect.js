var botvac = require('node-botvac');

module.exports = function(){
 
    var client = new botvac.Client();
    //Load parameters from Gladys, user should have set NEATO_ACCOUNT_USERNAME, NEATO_ACCOUNT_PASSWORD
    //return gladys.param.getValues(['NEATO_ACCOUNT_USERNAME', 'NEATO_ACCOUNT_PASSWORD']).spread((account_username, account_password) => {

            
        client.authorize(account_username, account_password, false, function (error) {
            if (error) {
                console.log(error);
                return;
            }

        return client;
    });
//});

}