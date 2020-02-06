import { AutoMap } from '@nartc/automapper';

import ContactVm from './contact.model';
import Gender from './gender';


export default class UserVm {
  fullName!: string;
  isActive!: boolean;
  contact!: ContactVm | null;
  age?: number;
  @AutoMap()
  gender!: Gender | null;
}
