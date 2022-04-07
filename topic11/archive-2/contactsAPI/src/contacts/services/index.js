import Contact from '../entities/Contact';

export default {
  addContact: async  (userName,name, password,  type, dob, phone, email,{contactsRepository, authenticator}) => {
    password = await authenticator.encrypt(password);
    const contact = new Contact(undefined, userName,name,type, dob, phone, password,email);
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
  },
  authenticate: async (email, password, { contactsRepository, authenticator, tokenManager }) => {
    const contact = await contactsRepository.getByEmail(email);
    const result = await authenticator.compare(password, contact.password);
    if (!result) {
      throw new Error('Bad credentials');
    }
    const token = tokenManager.generate({ email: result.email });
    return token;
  }
};