
import AuthenticationService from '../AuthenticationService';

export default class extends AuthenticationService {

  async compare(password, encryptedPassword) {
    try {
      // Compare password
      const result = password == encryptedPassword;
      return Promise.resolve(result);
    } catch (error) {
      return Promise.resolve(false);
    }
  }
}