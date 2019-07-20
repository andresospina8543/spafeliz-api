const Sequelize = require('sequelize')

const conn = new Sequelize('LFn1jLFJUO', 'LFn1jLFJUO', 'TBojbGYz0O', {
    host: 'remotemysql.com',
    dialect: 'mysql'
})

conn.authenticate()
.then(() => {
    console.log('Connection ok')
})
.catch((err) => {
    console.log('Connection error' + err)
})

module.exports = conn;