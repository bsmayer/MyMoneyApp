'use strict'

const restful  = require('node-restful');
const mongoose = restful.mongoose;

module.exports = new mongoose.Schema({
  name: { type: String, required: [true, 'Nome do débito é obrigatório'] },
  value: { type: Number, min: 0, required: [true, 'Valor do débito é obrigatório'] },
  status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
});
