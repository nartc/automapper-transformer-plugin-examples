import { AutoMap } from '@nartc/automapper';

import ContactViewModel from 'view-models/contactViewModel';
import Gender from 'constants/gender';


export default class UserViewModel {
  fullName!: string;
  isActive!: boolean;
  contact!: ContactViewModel | null;
  age?: number;
  @AutoMap()
  gender!: Gender | null;
}
