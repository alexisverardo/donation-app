export interface IProvince {
    id?: number;
    province_name: string;
}

export class Province implements IProvince {

    constructor(
        public province_name: string,
        public id?: number
    ) {
    }
}
