export interface AuthContextInterface {
    token: string | null;
    authenticate: ((username: string, password: string) => void);
    signout: () => void;
  }