import { AutoMapper, MappingProfileBase } from '@nartc/automapper';

import PhoneModel from 'models/phoneModel';
import PhoneViewModel from 'view-models/phoneViewModel';
import stringHelper from 'helpers/stringHelper';


export default class PhoneMappingProfile extends MappingProfileBase {
    constructor(mapper: AutoMapper) {
        super();

        mapper.createMap(PhoneModel, PhoneViewModel)
            .forMember(d => d.phoneNumber, o => o.mapFrom(s => stringHelper.joinNonEmpty(' x', s.phoneNumber, s.phoneExtension)))
    }
}
