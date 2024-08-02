import express from 'express';
import { createUser, deleteUser, findAllUsers, updateUser } from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
router.get('/', findAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;