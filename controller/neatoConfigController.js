saveConfig = require('../lib/configuration.js');

module.exports = {

  saveConfig: function(req, res, next) {
     console.log(req)
    /*saveConfig(req.body)
      .then((result) => res.json(result))
      .catch(next);*/
  }
}