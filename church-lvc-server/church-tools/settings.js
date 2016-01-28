const db = {
	'name': 'church'
}

const connection = {
	'port': process.env.PORT || 8080
}

const configuration = {
	'db': db,
	'connection': connection
}
module.exports = configuration;