export interface ICompany {
    id?: string;
    name?: string;
    phone?: string;
    address?: string;
    createdDate?: Date
}

export class Company implements ICompany {
    constructor(
        public id?: string,
        public name?: string,
        public phone?: string,
        public address?: string,
        public createdDate?: Date
    ) {
    }
}
