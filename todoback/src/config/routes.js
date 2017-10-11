const express = require('express')

module.exports = (server) => {

    const router = express.Router()
    server.use('/api', router)

    const todoApi = require('../api/todo/todoApi')
    todoApi.register(router, '/todos')
}