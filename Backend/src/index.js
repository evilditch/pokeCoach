import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './util/db.js';
import { PORT } from './util/config.js';

const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}

start();