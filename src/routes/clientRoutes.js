import express from 'express';
import {
    getClients,
    createClient,
    updateClient,
    deleteClient
} from '../controllers/clientController.js';

const router = express.Router();

// Get All Clients
router.get('/', getClients);

// Create Client
router.post('/client', createClient);

// Update Client
router.put('/client/:id', updateClient);

// Delete Client
router.delete('/client/:id', deleteClient);

export default router;