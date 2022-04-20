import { Router } from 'express';
import * as controllers from './controllers';
import * as routes from './routes';

import { verifySignUp } from 'middlewares';

const router = Router();

router.post(routes.signIn, controllers.signIn);

router.post(
  routes.signUp,
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  controllers.signUp,
);

export default router;
