var rabbitHub = require('rabbitmq-nodejs-client')

module.exports = function (mqType) {

  if (mqType == 'rabbitmq') {

    return function (channel, message, callback) {

      var pubHub = rabbitHub.create( { task: 'pub', channel: channel } )
      pubHub.on('connection', function(hub) {

        hub.send(message)
        callback(null)

      })
      pubHub.connect()

    }

  }

}
