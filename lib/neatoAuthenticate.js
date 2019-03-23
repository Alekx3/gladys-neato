var botvac = require('node-botvac');
const Promise = require('bluebird');
var account_username = ""
var account_password = ""


module.exports = function () { return Promise(
    (resolve, reject) => { 
        var account_username = ""
        var account_password = ""
        gladys.param.getValues(['NEATO_ACCOUNT_USERNAME', 'NEATO_ACCOUNT_PASSWORD']).spread((au, ap) => {
            account_username = au
            account_password = ap
        })
       
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
        



    
   
          

})
}


