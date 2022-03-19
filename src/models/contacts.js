const restful = require('node-restful');
const mongoose = restful.mongoose;

const contactsSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: Number, required: true },
  email: { type: String, min: 2, max: 2 },
  sexo: { type: String, min: 0 }
});

module.exports = restful.model('contacts', contactsSchema);