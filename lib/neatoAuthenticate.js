var botvac = require('node-botvac');
const Promise = require('bluebird');
var account_username = ""
var account_password = ""

function auth() {
    return gladys.param.getValues(['NEATO_ACCOUNT_USERNAME', 'NEATO_ACCOUNT_PASSWORD']).spread((au, ap) => {
        account_username = au;
        account_password = ap;
    })
}

module.exports = new Promise(
    (resolve, reject) => { 
        auth();
        console.debug("INITIALISING_ACCOUNT")

    const client = new botvac.Client();
     gladys.param.getValues(['NEATO_ACCOUNT_USERNAME', 'NEATO_ACCOUNT_PASSWORD'])
        client.authorize(param[0], param[1], false, function (error) {
                if (error) {
                    console.error(error);
                    reject(error);
                }
                console.debug("ACCOUNT_INITALISED")
                resolve(client);
            });


    
   
          
   
});


