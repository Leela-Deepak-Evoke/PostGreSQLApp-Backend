import * as service from '../services/clientServices.js';

// Get All Clients
export const getClients = async (req, res) => {
    try {
        const data = await service.getClients();

        res.status(200).json({
            success: true,
            data
        });

    } catch (err) {
        console.error('Error fetching clients:', err);

        res.status(500).json({
            success: false,
            message: 'Failed to fetch clients'
        });
    }
};

// Create Client
export const createClient = async (req, res) => {
    try {
        const clientData = req.body;

        const newClient = await service.createClient(clientData);

        res.status(201).json({
            success: true,
            message: 'Client created successfully',
            data: newClient
        });

    } catch (error) {
        console.error('Error creating client:', error);

        res.status(500).json({
            success: false,
            message: 'Failed to create client',
            error: error.message
        });
    }
};

// Update Client
export const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const clientData = req.body;

        const updatedClient = await service.updateClient(id, clientData);

        if (!updatedClient) {
            return res.status(404).json({
                success: false,
                message: 'Client not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Client updated successfully',
            data: updatedClient
        });

    } catch (error) {
        console.error('Error updating client:', error);

        res.status(500).json({
            success: false,
            message: 'Failed to update client',
            error: error.message
        });
    }
};

// Delete Client
export const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedClient = await service.deleteClient(id);

        if (!deletedClient) {
            return res.status(404).json({
                success: false,
                message: 'Client not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Client deleted successfully',
            data: deletedClient
        });

    } catch (error) {
        console.error('Error deleting client:', error);

        res.status(500).json({
            success: false,
            message: 'Failed to delete client',
            error: error.message
        });
    }
};