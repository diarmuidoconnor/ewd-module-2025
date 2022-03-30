import Contact from '../../entities/Contact';
import mongoose from 'mongoose';
import ContcactRepository from '../Repository';

export default class extends ContcactRepository {

    constructor() {
        super();
        const contactSchema = new mongoose.Schema({
            password: String,
            phone: String,
            type: String,
            dob: String,
            userName: String,
            name: String,
        });
        this.model = mongoose.model('Contacts', contactSchema);
    }

    async persist(contactEntity) {
        const { email, password, phone, type, dob, userName, name } = contactEntity;
        const mongooseContact = new this.model({ email, password, phone, type, dob, userName, name });
        await mongooseContact.save();
        return new Contact(mongooseContact.id, mongooseContact.userName, mongooseContact.name, mongooseContact.type, mongooseContact.dob, mongooseContact.phone, mongooseContact.password,mongooseContact.email);
    }


    async get(contactId) {
        const mongooseContact = await this.model.findById(contactId);
        return new Contcact(mongooseContact.id, mongooseContact.userName, mongooseContact.name, mongooseContact.email, mongooseContact.password);
    }

    async find() {
        const Contacts = await this.model.find();
        return Contacts.map((mongooseContact) => {
            return new Contact(mongooseContact.id, mongooseContact.name, mongooseContact.userName, mongooseContact.email, mongooseContact.password);
        });
    }
}