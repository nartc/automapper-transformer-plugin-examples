import ContactVm from './contact.model';


export default class UserVm {
  fullName!: string;
  isActive!: boolean;
  contact!: ContactVm | null;
  age?: number;
}
