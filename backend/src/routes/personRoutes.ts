import express from 'express';
import { findAllPerson } from '../controllers/personController';

const router = express.Router();

router.get('/', findAllPerson);

export default router;