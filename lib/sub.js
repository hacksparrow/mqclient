var rabbitHub = require('rabbitmq-nodejs-client')

module.exports = function (mqType) {

  if (mqType == 'rabbitmq') {

    return function (channel, callback) {

      var subHub = rabbitHub.create( { task: 'sub', channel: channel } )
      subHub.once('connection', function(hub) {
        hub.on('message', function(msg) {
          callback(null, msg)
        }.bind(this))

      })

      subHub.connect()

    }

  }

}
