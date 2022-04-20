import { Router } from 'express';
import * as controllers from './controllers';
import * as routes from './routes';

import { authJwt } from 'middlewares';

const router = Router();

const { verifyToken, isAdmin, isModerator } = authJwt;

router.get(routes.allAccess, controllers.allAccess);
router.get(routes.userBoard, [verifyToken], controllers.userBoard);
router.get(routes.adminBoard, [verifyToken, isAdmin], controllers.adminBoard);
router.get(
  routes.moderatorBoard,
  [verifyToken, isModerator],
  controllers.moderatorBoard,
);

export default router;
