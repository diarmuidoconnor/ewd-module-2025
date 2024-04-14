import express from 'express';
import contactsRouter from './src/contacts/routes'

const app = express();

const middleware1 = (req, res, next) => {
    console.log('in middleware 1');
    next();
}

const middleware2 = (req,res,next)=>{
    console.log('in middleware 2');
    next();
  }

const errorHandler1 = (err, req, res, next) => {
    console.log('in error handler');
    console.log(err);
    res.status(500).end('something went wrong!');
}

//Application Middleware
app.use(middleware1)
app.use(express.json());
app.get('/', (req, res) => { res.end('All Good!') });
app.use(errorHandler1)
//Route Middleware
app.use('/api/contacts',middleware2, contactsRouter)
app.listen(8080, () => {
    console.info('Express listening on port', 8080);
});