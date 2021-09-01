import { Router } from 'express';
import * as controllers from './controllers';
import * as routers from './routes';

const router = Router();

router.post(routers.login, controllers.login);

router.post(routers.signUp, controllers.signUp);

export default router;
