
import express from 'express'
import movieRouter from './routes/movieRouter';
import config from './config/config';


const app = express();

app.use(express.json())

app.use(movieRouter);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
})

