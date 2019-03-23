var botvac = require('node-botvac');
const Promise = require('bluebird');
var account_username = ""
var account_password = ""


module.exports = new Promise(
    (resolve, reject) => { 
        console.debug("INITIALISING_ACCOUNT")

    const client = new botvac.Client();
             client.authorize(param[0], param[1], false, function (error) {
                if (error) {
                    console.error(error);
                    reject(error);
                }
                console.debug("ACCOUNT_INITALISED")
                resolve(client);
            });


    
   
          
   
});


