import express from 'express';

const app = express();

const middleware1 = (req,res,next)=>{
  console.log('in middleware 1');
  next(new Error("BOOM!")) //pass an error into middleware
  //next();
}

const errorHandler1=(err,req,res,next)=>{
  console.log('in error handler');
  console.log(err);
  res.status(500).end('something went wrong!');
}

app.use(middleware1);
app.get('/', (req,res)=>{res.end('All Good!')});
app.use(errorHandler1);
app.listen(8080, () => {
  console.info('Express listening on port', 8080);
});