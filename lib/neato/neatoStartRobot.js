var botvac = require('node-botvac');
const Promise = require('bluebird');


module.exports = function (client) { return new Promise(
            (resolve, reject) => { 
            client.getRobots(function (error, robots) {
                if (error) {
                    console.log('NO_BOTS_FOUNDABLE');
                    reject(error);
                }
                if (robots.length) {
                    //do something        
                    robots[0].getState(function (error, result) {
                        robots[0].startCleaning(false, 1, false, function (error, result) {

                            console.log(result);
                            resolve(result);
                         
                         });
                        
                    });
                }else{
                    reject("CANT_START");
                }
            })
       
    });
}


