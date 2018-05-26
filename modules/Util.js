const md5 = require('md5');

var Util = function (){
  var getDate = function(){
    return new Date();
  }

  var buildKeyFromName = function(name){
    var date = new Date();
    var current_hour = date.getHours();

    const key = md5(name+date);

    return key;
  }

  return {
    getDate,
    buildKeyFromName,
  };

}
module.exports = Util;
