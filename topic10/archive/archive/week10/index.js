import express from 'express';
import createContactsRouter from './src/contacts/routes';
//import ContactsRepository from './src/contacts/repositories/in-memory/ContactsRepository';
import ContactsRepository from './src/contacts/repositories/mongo/ContactsRepository';
import contactsSchema from './src/contacts/validators';
import db from './src/config/db';

const app = express();
db.init();
const dependencies = {
    contactsRepository : new ContactsRepository(),
    contactsValidator: contactsSchema
};

const errorHandler1 = (err, req, res, next) => {
    console.log('in error handler');
    console.log(err);
    res.status(500).end('something went wrong!');
}

//Application Middleware
app.use(express.json());
app.get('/', (req, res) => { res.end('All Good!') });

//Route Middleware
app.use('/api/contacts',createContactsRouter(dependencies))
app.use(errorHandler1)
app.listen(8080, () => {
    console.info('Express listening on port', 8080);
});