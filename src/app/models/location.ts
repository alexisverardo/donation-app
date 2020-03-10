export interface ILocation {
    id?: number;
    location_name: string;
}

export class Location implements ILocation {

    constructor(
        public location_name: string,
        public id?: number
    ) {
    }
}
