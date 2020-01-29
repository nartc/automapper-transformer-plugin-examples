import { AutoMap } from '@nartc/automapper';
import { Profile } from './profile.model';

export class User {
  firstName!: string;
  lastName!: string;
  profile!: Profile;
}
