import { Router } from 'express';
import UserController from './app/controllers/User';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome API Login_Auth' }));

/**
 * User
 */

routes.post('/users', UserController.store);

export default routes;
