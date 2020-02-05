import PhoneVm from './phone.vm';
import AddressVm from './address.model';


export default class Contact {
    email!: string;
    phones!: PhoneVm[];
    addresses!: AddressVm[] | null;
}