class IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export class User extends IUser {
  constructor(user: IUser) {
    super();
    const { id, email, first_name, last_name } = user;
    this.id = id;
    this.email = email;
    this.first_name = first_name;
  }

  get fullName() {
    return `${this.first_name} ${this.last_name}`;
  }
}
