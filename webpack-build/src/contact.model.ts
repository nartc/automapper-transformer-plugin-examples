import Phone from './phone.model';
import Address from './address.model';


export default class Contact {
    email!: string;
    phones!: Phone[];
    addresses!: Address[] | null;
}