var cors_proxy = require('cors-anywhere')

var host = process.env.HOST || '0.0.0.0'

var port = process.env.PORT || 8080

cors_proxy.createServer({
	originWitelist: []
}).listen(port, host, function() {
	console.log('running on port ' + port)
})
