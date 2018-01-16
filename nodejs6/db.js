const Sequelize = require('sequelize')

// database name, user, password
const db = new Sequelize('userDB', 'userDB', 'userDB', {
    dialect: 'mysql',
    host: 'localhost'
})

// table users in db userDB
const Users = db.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
})

db.sync().then(() => console.log("db is ready"))

exports = module.exports = {
    db, Users
}

