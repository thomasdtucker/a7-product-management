class ICredentials {
  token: string;
}
export class Credentials extends ICredentials {
  constructor(credentials: Credentials) {
    super();
    const {token} = credentials;
    this.token = token;
  }
}
