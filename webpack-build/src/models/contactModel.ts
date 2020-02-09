import PhoneModel from 'models/phoneModel';
import AddressModel from 'models/addressModel';


export default class ContactModel {
    email!: string;
    phones!: PhoneModel[];
    addresses!: AddressModel[] | null;
}