var client = require('../amqp')

setInterval(function () {

  client.pub('channel-abc', 'HEY HO!', function (err, msg) {
    if (err) throw new Error(err)
    else console.log('Published:', msg)
  })

}, 1000)

