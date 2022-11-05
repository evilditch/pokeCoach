import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './util/db.js';
import { PORT } from './util/config.js';
import authRouter from './routes/auth.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);

const start = async () => {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}

start();