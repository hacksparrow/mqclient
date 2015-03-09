var client = require('../amqp')

client.sub('channel-abc', function (err, data) {
  if (err) throw new Error(err)
  else console.log('Data:', data)
})
