const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Métodos HTTP //
// GET: Buscar info no backend
// POST: Criar info no backend
// PUT: Alterar info no backend
// DELETE: Deletar info no backend

// Tipos de parametros //
// Query Params: parametros nomeados enviados na rota após "?" (filtros, paginação)
// Route Params: parametros utilizados para identificar recursos (unicos)
// Request Body: corpo da requisisição, utilizado para criar ou alterar recursos

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);


module.exports = routes;