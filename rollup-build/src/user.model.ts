import { AutoMap } from '@nartc/automapper';
import {Type, Expose} from 'class-transformer';
import { Address } from './address.model';
import { Profile } from './profile.model';

export class User {
  firstName!: string;
  lastName!: string;
  profile!: Profile;
  addresses!: Address[];
}
