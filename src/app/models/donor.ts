import { ILocation } from './location';
import { IBloodType } from './blood-type';

export interface IDonor {
    first_name: string;
    last_name: string;
    genre: string;
    phone: string;
    location: ILocation;
    birthday: string;
    last_date_donation: string;
    blood_type: IBloodType;
    user_id?: number;
    id?: number;
}

export class Donor implements IDonor {

    constructor(
        public first_name: string,
        public last_name: string,
        public birthday: string,
        public genre: string,
        public phone: string,
        public last_date_donation: string,
        public email: string,
        public location: ILocation,
        public blood_type: IBloodType,
        public user_id?: number,
        public id?: number,
    ) {
    }
}
