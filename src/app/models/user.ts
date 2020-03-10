import { IProvince } from './province';
import { ILocation } from './location';
import { IBloodType } from './blood-type';

export interface IUSer {
    first_name: string;
    last_name: string;
    birthday: string;
    last_date_donation: string;
    email: string;
    province: IProvince;
    location: ILocation;
    blood_type: IBloodType;
    id?: number;
}

export class User implements IUSer {

    constructor(
        public first_name: string,
        public last_name: string,
        public birthday: string,
        public last_date_donation: string,
        public email: string,
        public province: IProvince,
        public location: ILocation,
        public blood_type: IBloodType,
        public id?: number,
    ) {
    }
}
