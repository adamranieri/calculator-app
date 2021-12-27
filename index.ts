import express from 'express';
import { add } from './calc-functions';

const app = express();

app.get('/add/:num1/:num2', (req,res)=>{
    const {num1,num2} = req.params;
    const sum = add(Number(num1), Number(num2));
    res.send(sum)
})


app.listen(3000, () => console.log("Application started"));