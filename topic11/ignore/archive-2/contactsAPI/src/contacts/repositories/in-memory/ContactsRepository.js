import ContactsRepository from '../Repository';

  export default class extends ContactsRepository {

    dataAsArray() {
      return Object.keys(this.data).map(key => this.data[key]);
    }

    constructor() {
      super();
      this.index = 1;
      this.data = {};
    }

    persist(userEntity) {
      const row = Object.assign({}, userEntity);
      const rowId = this.index++;
      row.id = rowId;
      this.data[rowId] = row;
      return row;
    }

    merge(userEntity) {
      let row = this.data[userEntity.id];
      Object.assign(row, userEntity);
      return Promise.resolve(row);
    }

    remove(userId) {
      delete this.data[userId];
      return Promise.resolve();
    }

    get(userId) {
      return Promise.resolve(this.data[userId]);
    }

    getByUserName(userName) {
      const users = this._dataAsArray();
      return Promise.resolve(users.find(contact => contact.userName === userName));
    }

    find() {
      return Promise.resolve(this.dataAsArray());
    }

  }