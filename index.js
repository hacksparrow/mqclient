var sub = require(__dirname + '/lib/sub.js')
var pub = require(__dirname + '/lib/pub.js')

var mqTypes = {
  rabbitmq: true
}

module.exports = function (mqType) {

  if (mqType.toLowerCase() in mqTypes) {

    var mq = mqTypes[mqType]

    return {

      sub: sub(mqType),
      pub: pub(mqType)

    }

  }
  else {
    throw new Error(mqType + ' not supported')
  }

}
