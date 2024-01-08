import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.end('All Good!')
});

app.get('/api/dogs', (req, res) => {
  res.end('should return list of dogs')
});

app.listen(8080, () => {
  console.info('Express listening on port', 8080);
});