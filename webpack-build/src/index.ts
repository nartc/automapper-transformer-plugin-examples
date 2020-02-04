import { AutoMapper, Mapper, MappingProfileBase } from '@nartc/automapper';
import 'reflect-metadata';
import { Address } from './address.model';
import { AddressVm } from './address.vm';
import { Profile } from './profile.model';
import { ProfileVm } from './profile.vm';
import { User } from './user.model';
import { UserVm } from './user.vm';

class UserProfile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(User, UserVm)
      .forMember(dest => dest.first, opts => opts.mapFrom(src => src.firstName))
      .forMember(dest => dest.last, opts => opts.mapFrom(src => src.lastName))
      .forMember(dest => dest.full, opts => opts.mapFrom(src => src.firstName + ' ' + src.lastName));
  }
}

class ProfileProfile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(Profile, ProfileVm)
      .forMember(dest => dest.bioString, opts => opts.mapFrom(src => src.bio))
      .forMember(dest => dest.ageNumber, opts => opts.mapFrom(src => src.age));
  }
}

class AddressProfile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(Address, AddressVm)
      .forMember(dest => dest.formattedStreet, opts => opts.mapFrom(src => src.street));
  }
}

Mapper.initialize(cfg => {
  cfg.addProfile(UserProfile)
    .addProfile(ProfileProfile)
    .addProfile(AddressProfile);
});

const user = new User();
user.firstName = 'Chau';
user.lastName = 'Tran';
user.profile = new Profile();
user.profile.bio = 'Developer';
user.profile.age = 28;
user.addresses = Array.from({ length: 2 }).map((_, index) => {
  const addr = new Address();
  addr.street = 'street ' + index;
  return addr;
});

const plainObj = JSON.parse(JSON.stringify(user));

const vm = Mapper.map(plainObj, UserVm, User);
console.log(vm);
