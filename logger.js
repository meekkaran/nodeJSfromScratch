var url='http://mylogger.oi.log';

function log(message){
    //send a HTTP request
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint=url;