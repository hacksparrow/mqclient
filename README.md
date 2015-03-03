# mqclient

Client for various message queues. Currently supports only RabbitMQ.

## Example

Subscriber

```
var mqClient = require('mqclient')

mqClient.sub('channel-abc', function (err, data) {
  if (err) throw new Error(err)
  else console.log(data)
})

```

Publisher

```
var mqClient = require('mqclient')

mqClient.pub('channel-abc', 'HEY HO!', function (err) {
  if (err) throw new Error(err)
  else console.log('published')
})
```
