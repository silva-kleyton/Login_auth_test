import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

/**
 * User
 */

routes.post('/users', (req, res) => res.json({ id: 1 }));

export default routes;
