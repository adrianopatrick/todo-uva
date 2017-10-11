const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidaors: true})

module.exports = Todo