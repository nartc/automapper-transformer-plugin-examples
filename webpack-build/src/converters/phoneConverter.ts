import { Converter } from '@nartc/automapper';

import PhoneModel from 'models/phoneModel';
import stringHelper from 'helpers/stringHelper';


export default class PhoneConverter implements Converter<PhoneModel[], string[]> {
    convert(source: PhoneModel[]): string[] {
        return source.map(s => stringHelper.joinNonEmpty(' x', s.phoneNumber, s.phoneExtension))
    }
}