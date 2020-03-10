export interface IUSer {
    username: string;
    password: string;
    email: string;
    id?: number;
}

export class User implements IUSer {

    constructor(
        public username: string,
        public password: string,
        public email: string,
        public id?: number,
    ) {
    }
}
