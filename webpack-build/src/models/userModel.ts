import { AutoMap } from '@nartc/automapper';

import ContactModel from 'models/contactModel';
import Gender from 'constants/gender';


export default class UserModel {
  firstName!: string;
  lastName!: string;
  middleName!: string | null;
  isActive!: boolean;
  contact!: ContactModel | null;
  age?: number;
  @AutoMap() // enums can be supported only with the @AutoMap decorator
  gender!: Gender | null;
}
