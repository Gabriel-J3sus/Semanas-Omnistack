import { Router } from 'express';

import OngsController from './controllers/OngsController';
import EventsController from './controllers/EventsController';


const routes = Router();



routes.get('/ongs', OngsController.index);
routes.post('/ongs/login', OngsController.show);
routes.post('/ongs', OngsController.create);


routes.get('/events', EventsController.index);
routes.get('/events/fff/', EventsController.show);
routes.delete('/events/:id', EventsController.delete);
routes.post('/events', EventsController.create);



export default routes;