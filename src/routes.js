const express = require('express');
const routes = express.Router();

const ContactsController = require('./controllers/ContactsController');

routes.get('/contacts/listen', ContactsController.show);
routes.post('/contacts/create', ContactsController.store);
routes.put('/contacts/:contacts_id/update',ContactsController.update);
routes.delete('/contacts/:contacts_id/delete',ContactsController.delete);

module.exports = routes;