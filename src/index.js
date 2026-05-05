import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import clientRoutes from './routes/clientRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.use('/api/clients', clientRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

