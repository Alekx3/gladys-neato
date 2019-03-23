var botvac = require('node-botvac');

module.exports = new Promise(
    (resolve, reject) => { 
        console.debug("INITIALISING_ACCOUNT")

    const client = new botvac.Client();
    gladys.param.getValues(['NEATO_ACCOUNT_USERNAME', 'NEATO_ACCOUNT_PASSWORD'])
        .then(function(param){
            client.authorize(param[0], param[1], false, function (error) {
                if (error) {
                    console.error(error);
                    reject(error);
                }
                console.debug("ACCOUNT_INITALISED")
                resolve(client);
            });
         }
         .catch(error => console.error(error.message)))
    
   
          
   
});


