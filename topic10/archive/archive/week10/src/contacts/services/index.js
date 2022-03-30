import Contact from '../entities/Contact';

export default {
  addContact: async  (userName,name, password,  type, dob, phone,{contactsRepository}) => {
    const contact = new Contact(undefined, userName,name,type, dob, phone, password);
    return contactsRepository.persist(contact);
  },
  getContact: (id, {contactsRepository}) => {
    return contactsRepository.get(id);
  },
  find: ({contactsRepository})=>{
    return contactsRepository.find();
  },
  findByUserName: (userName, {contactsRepository})=>{
    return contactsRepository.getByUserName(userName);
  }
};