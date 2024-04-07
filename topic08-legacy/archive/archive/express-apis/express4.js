import express from 'express';
import dogsRouter from './api/dogs';

const app = express();

// parse application/json
app.use(express.json())

app.use('/api/dogs', dogsRouter);

app.listen(8080, () => {
  console.info('Express listening on port', 8080);
});