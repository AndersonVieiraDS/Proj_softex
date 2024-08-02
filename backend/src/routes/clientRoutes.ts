// routes/clientRoutes.js
import { Router } from 'express';
import { createClient, findAllClients, deleteClient, updateClient } from '../controllers/clientController';

const router = Router();

// Definindo as rotas
router.post('/', createClient);
router.get('/', findAllClients);
router.put('/:id', updateClient)
router.delete('/:id', deleteClient);

export default router;