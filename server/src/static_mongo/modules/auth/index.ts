import { Router } from 'express';
import * as controllers from './controllers';
import * as routes from './routes';

const router = Router();

router.post(routes.login, controllers.login);

router.post(routes.signUp, controllers.signUp);

export default router;
