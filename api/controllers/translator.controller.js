/**
 * Created by a598519 on 21-02-2017.
 */

var Client = require('node-rest-client').Client;

var client = new Client();

module.exports.getTranslation=function(req,res)
{
  var targetLanguage = req.body.lang;
  var phrase =req.body.phrase;
  
};