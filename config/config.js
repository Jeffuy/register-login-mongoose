require('dotenv').config();

const config = {
	DB_PWD: process.env.DB_PWD,
	DB_USER: process.env.DB_USER,
	SESSION_SECRET: process.env.SESSION_SECRET,
}

module.exports = { config }

