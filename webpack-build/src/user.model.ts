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
  // @AutoMap(() => Gender) // enum hasn't supported 
  // gender!: Gender | null; // TypeError: Cannot read property 'transformFlags' of undefined
}
