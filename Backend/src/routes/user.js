import express from 'express';
import { Challenge, User } from "../models/index.js";

const router = express.Router();

router.post('/', async (req,res) => {
    const body = req.body;

    const newUser = await User.create(body);
    res.json(newUser);
});

router.get('/:id', async (req,res) => {
    const id = req.params.id;

    const challenges = await User.findOne({
        where:{
            id: id
        },
        attributes: {
            exclude:  ['id', 'username', 'email']
        },
        include: {
                model: Challenge,
                attributes: {exclude: ['id', 'userId']}
            }
    });

    if(challenges){
        res.json(challenges);
    }else{
        res.status(404).json({message: "Either there is no challenges for this user, or user does not exists"});
    }
    
});

export default router;