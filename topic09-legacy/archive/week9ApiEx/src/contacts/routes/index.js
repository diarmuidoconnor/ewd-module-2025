import express from 'express';
import {listContacts, getContact, createContact} from './../controllers'

const router = express.Router()

router.get('/', listContacts);

// get a contact
router.get('/:id', getContact);

router.post('/', createContact);


export default router;