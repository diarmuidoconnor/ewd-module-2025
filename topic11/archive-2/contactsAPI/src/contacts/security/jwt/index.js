import jwt from 'jsonwebtoken';
import SecurityTokenService  from '../securityTokenService';

export default  class extends SecurityTokenService {
  generate(payload) {
    return jwt.sign(payload, "ilikecake" );
  }
  decode(accessToken) {
    return jwt.verify(accessToken,  "ilikecake");
  }
}