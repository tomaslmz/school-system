import { Router } from 'express';
import controller from '../controllers/user';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/create', controller.create);

router.get('/list', loginRequired, controller.read);

router.delete('/delete/:id', loginRequired, controller.delete);

router.patch('/update/:id', loginRequired, controller.update);

export default router;
