import express from 'express';
import { Challenge } from "../models/index.js";

const router = express.Router();

router.post('/', async (req, res) => {

    const challenge = await Challenge.create({...req.body});
    res.json(challenge);
});

router.put('/:id', async (req,res) => {
    const id = req.params.id;

    const challenge = await Challenge.findByPk(id, {
        attributes: {
            exclude: ['userId']
        }
    });
    if(challenge){
        challenge.isPrimary = !challenge.isPrimary;
        await challenge.save();
        res.json(challenge);
    }else{
        res.status(404).end();
    }
});

export default router;