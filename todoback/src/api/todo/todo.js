const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    descricao: {type: String, required: true},
    concluido: {type: Boolean, required: true, default: false},
    arquivado: {type: Boolean, require: true, default: false},
    dtCriacao: {type: Date, default: Date.now}
})

module.exports = restful.model('Todo', todoSchema)