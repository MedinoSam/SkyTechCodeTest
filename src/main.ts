
import express from 'express'

import { Router, Request, Response } from 'express'
import movieRouter from './controllers/movieController';
import config from './config/config';


const app = express();

app.use(express.json())


app.use('/api/filmes', movieRouter);


app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
})

