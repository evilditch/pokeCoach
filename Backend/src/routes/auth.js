import express from 'express';
import { Auth } from "../models/index.js";

const router = express.Router();

router.post('/login', async (req, res) => {
    const body = req.body;

    const user = await Auth.findOne({
        where:{
            email: body.email
        },
        attributes: {exclude: ['secretKey']}
    });
    console.log(user.dataValues.password);

    if (user) {
        if (user.dataValues.password == body.password) {
            res.status(200).json(user);
        }
    } else {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }
});

router.post('/Signin', async (req,res) => {
    const body = req.body;

    const isUser = await Auth.findByPk(body.email);

    if(isUser){
        return res.status(401).json({
            error: 'Email is already in use'
        })
    }else{
        const newUser = await Auth.create(body);
        res.json(newUser);
    }
})

export default router;