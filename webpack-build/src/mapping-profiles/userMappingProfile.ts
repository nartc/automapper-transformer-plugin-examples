import { AutoMapper, MappingProfileBase } from '@nartc/automapper';

import UserModel from 'models/userModel';
import UserViewModel from 'view-models/userViewModel';
import stringHelper from 'helpers/stringHelper';


export default class UserMappingProfile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();

    mapper.createMap(UserModel, UserViewModel)
      .forMember(d => d.fullName, o => o.mapFrom(s => stringHelper.joinNonEmpty(' ', s.firstName, s.middleName, s.lastName)));
  }
}
