import express from 'express';
import ContactsController from './../controllers';
import ContactsValidator from './../controllers/validation';

const createRouter = (dependencies) => {

const router = express.Router()
const contactsController = ContactsController(dependencies);
const contactsValidator = ContactsValidator(dependencies);

router.get('/', contactsController.listContacts);

// get a contact
router.get('/:id', contactsController.getContact);

router.post('/', contactsValidator.validateContact, contactsController.createContact);

return router;

}

export default createRouter;