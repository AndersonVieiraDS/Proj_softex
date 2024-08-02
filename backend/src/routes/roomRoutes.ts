import express from 'express';
import { createRoom, deleteRoom, findAllRoom, updateRoom } from '../controllers/roomController';

const router = express.Router();

router.post('/', createRoom);
router.get('/', findAllRoom);
router.put('/:id', updateRoom);
router.delete('/:id', deleteRoom);

export default router;