const { config } = require('./config');


module.exports = {
	mongoURI: `mongodb+srv://${config.DB_USER}:${config.DB_PWD}@cluster0.0qbvz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}

