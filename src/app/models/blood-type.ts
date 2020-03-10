export interface IBloodType {
    id?: number;
    blood_type: string;
}

export class BloodType implements IBloodType {

    constructor(
        public blood_type: string,
        public id?: number
    ) {
    }
}
