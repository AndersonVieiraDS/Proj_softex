import express from 'express';
import { createFloor, deleteFloor,  findAllFloor,  updateFloor } from '../controllers/floorController';

const router = express.Router();

router.post('/', createFloor);
router.get('/', findAllFloor);
router.put('/:id', updateFloor);
router.delete('/:id', deleteFloor);

export default router;