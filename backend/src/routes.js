const { Router } = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const OngValidator = require('./validators/OngValidator');
const ProfileValidator = require('./validators/ProfileValidator');
const IncidentValidator = require('./validators/IncidentValidator');
const SessionValidator = require('./validators/SessionValidator');

const routes = Router();

routes.post('/session', SessionValidator, SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidator, OngController.store);

routes.get('/incidents', IncidentController.index);

routes.post('/incidents',
  IncidentValidator.store,
  IncidentController.store);

routes.delete('/incidents/:id',
  IncidentValidator.delete,
  IncidentController.delete);

routes.get('/profile', ProfileValidator, ProfileController.index);

module.exports = routes;
