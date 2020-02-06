import { AutoMap } from '@nartc/automapper';

import Contact from './contact.model';
import Gender from './gender';


export default class User {
  firstName!: string;
  lastName!: string;
  middleName!: string | null;
  isActive!: boolean;
  contact!: Contact | null;
  age?: number;
  @AutoMap() // enums can be supported only with the @AutoMap decorator
  gender!: Gender | null;
}
