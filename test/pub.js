var client = require('../')('rabbitmq')

client.pub('channel-abc', 'HEY YO!', function (err) {
  if (err) throw new Error(err)
  else console.log('published')
})
