import express from 'express';
import dogsRouter from './api/dogs';
import bodyParser from 'body-parser';

const app = express();

// parse application/json
app.use(bodyParser.json())

app.use('/api/dogs', dogsRouter);

app.listen(8080, () => {
  console.info('Express listening on port', 8080);
});