import {ICompany} from '@shared/model/company.model';

export interface ITestCenter {
    id?: string;
    phone?: string;
    address?: string;
    company?: ICompany;
    createdDate?: Date;
}

export class TestCenter implements ITestCenter {
    constructor(public id?: string,
                public phone?: string,
                public address?: string,
                public company?: ICompany,
                public createdDate?: Date) {
    }
}
