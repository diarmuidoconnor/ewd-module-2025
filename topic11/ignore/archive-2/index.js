import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import usersRouter from './api/users';
import swaggerUi from 'swagger-ui-express';
import yaml from 'js-yaml';
import fs from 'fs';
import 'dotenv/config';
import { ServerError } from './responses';
import './db';
import './seedData';

const app = express();
const port = process.env.PORT;
const swaggerDocument = yaml.load(fs.readFileSync('./../movie-api-yaml/swagger.yaml', 'utf8'));

const errorHandler = (err, req, res, next) => {
  ServerError.status_message = err.message;
  res.status(500).json(ServerError);
  next();
};

app.use(express.json());

app.use('/api/movies', moviesRouter);
app.use('/api/genres', genresRouter);
//Users router
app.use('/api/users', usersRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});