import express from 'express';
import dogs from './dogs';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ dogs: dogs });
});

// get a dog
router.get('/:id', (req, res) => {
  const id = req.params.id; //gets id param from URL
  //usually retrieve details for customer but for now just return id
  return res.status(200).end(`id parameter from URL is ${id}`);
});

router.post('/', (req, res) => {
  console.log(req.body);
  req.body.date=new Date();
  //just echo the request json body in the response
  dogs.push(req.body)
  res.json(req.body).end();
});

export default router;
