var botvac = require('node-botvac');
const Promise = require('bluebird');
var account_username = ""
var account_password = ""


module.exports = new Promise(
    (resolve, reject) => { 
        const botvac = require('node-botvac');
            const client = new botvac.Client();
             client.authorize(account_username,account_password, false, function (error) {
                if (error) {
                    const reason = new Error(error);
                    reject(reason);
                }
                console.debug("ACCOUNT_INITALISED")
                resolve(client);
            });


    
   
          
   
});


