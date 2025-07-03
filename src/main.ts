
import express from 'express'

import { Router, Request, Response } from 'express'
import movieRouter from './routes/movieRoutes';


const app = express();

app.use(express.json())


app.use('/api/filmes', movieRouter);


app.listen(3000, () => {
  console.log('rodando na porta 3000')
});

