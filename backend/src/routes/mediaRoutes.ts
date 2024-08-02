import express from 'express';
import { createMedia, deleteMedia,  findAllMedia,  findMediaById,  updateMedia } from '../controllers/mediaController';

const router = express.Router();
  
router.post('/', createMedia);
router.get('/', findAllMedia);
router.get('/:id', findMediaById);
router.put('/:id', updateMedia);
router.delete('/:id', deleteMedia);

export default router;