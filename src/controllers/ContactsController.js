const Contacts = require('../models/contacts');

module.exports = {
  async store(req, res) { 
    const { nome, telefone, email, sexo } = req.body;

    let contact = await Contacts.findOne({ nome });

      if(!contact) {
        contact = await Contacts.create({ nome, telefone, email, sexo });
      }

      return res.json({ contact });
  },

  async show(req, res) { 
    const contact = await Contacts.find({});

    return res.json(contact);
  },

  async update(req, res) { 
    const { nome, telefone, email, sexo } = req.body
    const { contact_id } = req.params;
    const contact = await Contacts.findByIdAndUpdate(contact_id, { nome, telefone, email, sexo });

    return res.json(contact);
  },

  async delete(req, res) {
    const { contact_id } = req.params;
    const contact = await Contacts.findByIdAndDelete(contact_id);

    return res.json(contact);
  }
}