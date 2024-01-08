import express from 'express';

const app = express();

const middleware1 = (req,res,next)=>{
  console.log('in middleware 1');
  next();
}

app.use(middleware1);
app.get('/', (req,res)=>{res.end('All Good!')});
app.listen(8080, () => {
  console.info('Express listening on port', 8080);
});