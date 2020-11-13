import { Router } from 'express';

import OngsController from './controllers/OngsController';
import EventsController from './controllers/EventsController';


const routes = Router();



routes.get('/ongs', OngsController.index);
routes.get('/ongs/:id', OngsController.show);
routes.post('/ongs', OngsController.create);


routes.get('/events', EventsController.index);
routes.post('/events/search/:id', EventsController.show);
routes.delete('/events/:id', EventsController.delete);
routes.post('/events', EventsController.create);



export default routes;