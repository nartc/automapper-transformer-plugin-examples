import { AutoMapper, MappingProfileBase } from '@nartc/automapper';

import ContactModel from 'models/contactModel';
import ContactViewModel from 'view-models/contactViewModel';
import PhoneConverter from 'converters/phoneConverter';


export default class ContactMappingProfile extends MappingProfileBase {
    constructor(mapper: AutoMapper) {
        super();

        mapper.createMap(ContactModel, ContactViewModel)
            .forMember(d => d.phones, o => o.convertUsing(new PhoneConverter(), a => a.phones));
    }
}
