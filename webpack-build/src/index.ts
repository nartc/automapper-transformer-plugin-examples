import 'reflect-metadata';
import { Mapper } from '@nartc/automapper';

import AddressModel from 'models/addressModel';
import ContactModel from 'models/contactModel';
import PhoneModel from 'models/phoneModel';
import UserModel from 'models/userModel';
import UserViewModel from 'view-models/userViewModel';
import Gender from 'constants/gender';
import AddressMappingProfile from 'mapping-profiles/addressMappingProfile';
import ContactMappingProfile from 'mapping-profiles/contactMappingProfile';
import PhoneMappingProfile from 'mapping-profiles/phoneMappingProfile';
import UserMappingProfile from 'mapping-profiles/userMappingProfile';


Mapper.initialize(cfg => {
  cfg.addProfile(AddressMappingProfile)
    .addProfile(ContactMappingProfile)
    .addProfile(PhoneMappingProfile)
    .addProfile(UserMappingProfile);
});

const address1 = new AddressModel();
address1.name = 'Office';
address1.line1 = '123 Broadway Street';
address1.line2 = 'Apt. 5';
address1.city = 'New York';

const address2 = new AddressModel();
address2.name = 'Bar';
address2.line1 = '14 Andrea Street';
address2.city = 'New York';

const phone1 = new PhoneModel();
phone1.phoneNumber = '+123456789';
phone1.phoneExtension = '2';

const phone2 = new PhoneModel();
phone2.phoneNumber = '+123456789';

const contact1 = new ContactModel();
contact1.email = 'anne.morrison@example.com';
contact1.phones = [phone1, phone2];
contact1.addresses = [address1, address2];

const contact2 = new ContactModel();
contact2.email = 'jayden.ward@example.com';
contact2.phones = [];
contact2.addresses = null;

const user1 = new UserModel();
user1.firstName = 'Anne';
user1.lastName = 'Morrison';
user1.middleName = 'T.';
user1.isActive = true;
user1.age = 24;
user1.gender = Gender.Female;
user1.contact = contact1;

const user2 = new UserModel();
user2.firstName = 'Jayden';
user2.lastName = 'Ward';
user2.isActive = false;
user2.gender = Gender.Male;
user2.contact = contact2;

const vm = Mapper.map(user1, UserViewModel);
console.log(vm);

const plainObj = JSON.parse(JSON.stringify(user1));
const vmFromPlain = Mapper.map(plainObj, UserViewModel, UserModel);
console.log(vmFromPlain);

const plainObjArray = JSON.parse(JSON.stringify([user1, user2]));
const vmFromPlainArray = Mapper.mapArray(plainObjArray, UserViewModel, UserModel);
console.log(vmFromPlainArray);
