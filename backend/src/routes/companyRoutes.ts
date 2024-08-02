import express from 'express';
import { findAllCompany } from '../controllers/companyController';

const router = express.Router();

router.get('/', findAllCompany);

export default router;