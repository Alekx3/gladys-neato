var botvac = require('node-botvac');
const Promise = require('bluebird');

module.exports = function () { return new Promise(
    (resolve, reject) => { 
        gladys.param.getValues(['NEATO_ACCOUNT_USERNAME', 'NEATO_ACCOUNT_PASSWORD']).spread((au, ap) => {
            const botvac = require('node-botvac');
            const client = new botvac.Client();
             client.authorize(au,ap, false, function (error) {
                if (error) {
                    const reason = new Error(error);
                    reject(reason);
                }
                console.debug("ACCOUNT_INITALISED")
                resolve(client);
            });
        
        })
       
     
        



    
   
          

})
}


