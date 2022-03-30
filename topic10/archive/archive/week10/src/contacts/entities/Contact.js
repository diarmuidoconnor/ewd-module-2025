export default class {
    constructor(id = undefined, userName, name, type, dob, phone, password,email) {
        this.id = id;
        this.userName=userName; //unique, >5 characters
        this.name=name;
        this.type=type; //business, friend, family
        this.dob=dob;//date of birth dd/mm/yyyy
        this.phone=phone; 
        this.password = password;// >6 chars and must contain special char and number
        this.email = email;
      }
    }