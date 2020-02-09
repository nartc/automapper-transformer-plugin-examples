import AddressViewModel from 'view-models/addressViewModel';


export default class ContactViewModel {
    email!: string;
    phones!: string[];
    addresses!: AddressViewModel[] | null;
}