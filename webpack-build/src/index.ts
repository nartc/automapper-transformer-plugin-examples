import 'reflect-metadata';
import { AutoMapper, Mapper, MappingProfileBase } from '@nartc/automapper';

import Address from './address.model';
import AddressVm from './address.vm';
import Contact from './contact.model';
import ContactVm from './contact.vm';
import Phone from './phone.model';
import PhoneVm from './phone.vm';
import User from './user.model';
import UserVm from './user.vm';
import Gender from './gender';


function joinNonEmpty(separator: string, ...args: Array<string | null | undefined>) {
  return args
    .filter(x => !!x)
    .join(separator);
}

class UserProfile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();

    mapper.createMap(User, UserVm)
      .forMember(d => d.fullName, o => o.mapFrom(s => joinNonEmpty(' ', s.firstName, s.middleName, s.lastName)));
  }
}

class ContactProfile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();

    mapper.createMap(Contact, ContactVm);
  }
}

class AddressProfile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();

    mapper.createMap(Address, AddressVm)
      .forMember(d => d.street, o => o.mapFrom(s => joinNonEmpty(' ', s.line1, s.line2)));
  }
}

class PhoneProfile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();

    // is it possible to add a map from class to simple type ex. mapper.createMap(Phone, string) ?
    mapper.createMap(Phone, PhoneVm)
      .forMember(d => d.phoneNumber, o => o.mapFrom(s => joinNonEmpty(' x', s.phoneNumber, s.phoneExtension)))
  }
}

Mapper.initialize(cfg => {
  cfg.addProfile(UserProfile)
    .addProfile(ContactProfile)
    .addProfile(AddressProfile)
    .addProfile(PhoneProfile);
});

const address1 = new Address();
address1.name = 'Office';
address1.line1 = '123 Broadway Street';
address1.line2 = 'Apt. 5';
address1.city = 'New York';

const address2 = new Address();
address2.name = 'Bar';
address2.line1 = '14 Andrea Street';
address2.city = 'New York';

const phone1 = new Phone();
phone1.phoneNumber = '+123456789';
phone1.phoneExtension = '2';

const phone2 = new Phone();
phone2.phoneNumber = '+123456789';

const contact1 = new Contact();
contact1.email = 'anne.morrison@example.com';
contact1.phones = [phone1, phone2];
contact1.addresses = [address1, address2];

const contact2 = new Contact();
contact2.email = 'jayden.ward@example.com';
contact2.phones = [];
contact2.addresses = null;

const user1 = new User();
user1.firstName = 'Anne';
user1.lastName = 'Morrison';
user1.middleName = 'T.';
user1.isActive = true;
user1.age = 24;
user1.gender = Gender.Female;
user1.contact = contact1;

const user2 = new User();
user2.firstName = 'Jayden';
user2.lastName = 'Ward';
user2.isActive = false;
user2.gender = Gender.Male;
user2.contact = contact2;

const vm = Mapper.map(user1, UserVm);
console.log(vm);

const plainObj = JSON.parse(JSON.stringify(user1));
const vmFromPlain = Mapper.map(plainObj, UserVm, User);
console.log(vmFromPlain);

const plainObjArray = JSON.parse(JSON.stringify([user1, user2]));
const vmFromPlainArray = Mapper.mapArray(plainObjArray, UserVm, User);
console.log(vmFromPlainArray);
