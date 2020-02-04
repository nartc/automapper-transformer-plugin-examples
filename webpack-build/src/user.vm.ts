import { AddressVm } from './address.vm';
import { ProfileVm } from './profile.vm';

export class UserVm {
  first!: string;
  last!: string;
  full!: string;
  profile!: ProfileVm;
  addresses!: AddressVm[];
}
