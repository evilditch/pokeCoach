import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './util/db.js';
import { PORT } from './util/config.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import challengeRouter from './routes/challenge.js';
import { unknownEndpoint, errorHandler } from "./util/middleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/challenge', challengeRouter);


app.use(unknownEndpoint);
app.use(errorHandler);


const start = async () => {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}

start();