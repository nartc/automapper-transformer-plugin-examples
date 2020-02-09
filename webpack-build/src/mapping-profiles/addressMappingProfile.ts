import { AutoMapper, MappingProfileBase } from '@nartc/automapper';

import AddressModel from 'models/addressModel';
import AddressViewModel from 'view-models/addressViewModel';
import stringHelper from 'helpers/stringHelper';


export default class AddressMappingProfile extends MappingProfileBase {
    constructor(mapper: AutoMapper) {
        super();

        mapper.createMap(AddressModel, AddressViewModel)
            .forMember(d => d.street, o => o.mapFrom(s => stringHelper.joinNonEmpty(' ', s.line1, s.line2)));
    }
}
