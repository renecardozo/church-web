const db = {
	'name': 'church'
}

const connection = {
	'port': process.env.PORT || 8080
}
const client_connection = {
    folder: '../church-lvc-client'
}

const configuration = {
	'db': db,
	'connection': connection,
    'client_connection': client_connection 
}
module.exports = configuration;