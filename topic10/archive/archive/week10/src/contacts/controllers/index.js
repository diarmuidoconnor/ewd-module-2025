import contactsService from "../services";

export default (dependencies) => {

    const createContact = async (request, response, next) => {
        const { userName, name, password, type, dob, phone, } = request.body;
        const contact = await contactsService.addContact(userName, name, password, type, dob, phone,  dependencies);
        response.status(201).json(contact)

    };  

    const getContact = async (request, response, next) => {
        const id = request.params.id; //gets id param from URL
        const contact = await contactsService.getContact(id, dependencies);
        response.status(200).json(contact);
    };

    const listContacts = async (request, response, next) => {
        // Treatment
        const contacts = await contactsService.find(dependencies);
        //output
        response.status(200).json(contacts);
    };
    return {
        createContact,
        getContact,
        listContacts
    };

}
