var botvac = require('node-botvac');


    var client = new botvac.Client();

    var account_username = ""
    var account_password = ""
    gladys.param.getValues(['NEATO_ACCOUNT_USERNAME', 'NEATO_ACCOUNT_PASSWORD']).spread((account_username, account_password));

module.exports = new Promise(
        (resolve, reject) => { 
            //var robotInformation;
            client.authorize(account_username, account_password, false, function (error) {
                if (error) {
                    console.log(error);
                    //return;
            }

            client.getRobots(function (error, robots) {
                if (error) {
                    console.log(error);
                    //return;
                }
                if (robots.length) {
                    //do something        
                    robots[0].getState(function (error, result) {
                        resolve(result);
                    });
                }
            });

        });          
       
    });


    /*const returnBot = function () {
        getBotInfo
            .then(fulfilled => r(fulfilled)) // fat arrow
            .catch(error => console.log(error.message)); // fat arrow
    };


    
    function r(d) {
        return(d);
    }*/


    
    //Load parameters from Gladys, user should have set NEATO_ACCOUNT_USERNAME, NEATO_ACCOUNT_PASSWORD
    //   return gladys.param.getValues(['NEATO_ACCOUNT_USERNAME', 'NEATO_ACCOUNT_PASSWORD']).spread((account_username, account_password) => {

 /*   client.getRobots(function (error, robots) {
        if (error) {
            console.log(error);
            return;
        }
        if (robots.length) {
            //do something        
            robots[0].getState(function (error, result) {
                robotInformation = result;

                return;
            });
        }
    });

});*/

//});


